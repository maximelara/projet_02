let allData = [];

function getAllData() {
    const apiUrl = "http://localhost:8080/api/guide";

    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur de réseau ou de l'API");
            }
            return response.json();
        })
        .then(fetchedData => {
            allData = fetchedData;  
            filterData(allData);
        })
        .catch(error => {
            console.error("Une erreur s'est produite :", error);
        });
}

function animButtons() {
    //trie
    const sortButtons = document.querySelectorAll("#filter-sort span");    
    sortButtons[0].classList.add("selected");
    sortButtons.forEach(button => {
        button.style.userSelect = "none";
        button.addEventListener("click", () => {
            if (!button.classList.contains('selected')) {
                sortButtons.forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
            } else {
                const arrowIcon = button.querySelector('i.fa-solid');
                if (arrowIcon.classList.contains('fa-arrow-down')) {
                    arrowIcon.classList.replace('fa-arrow-down', 'fa-arrow-up');
                } else {
                    arrowIcon.classList.replace('fa-arrow-up', 'fa-arrow-down');
                }                
            }
        });
    });
    // type eaux
    const waterButtons = document.querySelectorAll("#filter-water-type span");
    waterButtons.forEach(button => {
        button.classList.add("selected");
        button.style.userSelect = "none";
        button.addEventListener("click", () => {            
            button.classList.toggle('selected'); 
        });
    });
}

function filterInput(data) {
    let newData = [];
    const input = document.querySelector("#search-bar-species");    
    data.forEach(_ => {
        if (input.value.toLowerCase() === "" || _.nom_espece.toLowerCase().includes(input.value.toLowerCase()) || _.nom_latin_espece.toLowerCase().includes(input.value.toLowerCase())) {
            newData.push(_);
        }
    });    
    return newData;
}

function filterWater(data) {
    let newData = [];
    const waterSelect = document.querySelectorAll("#filter-water-type .selected");    
    waterSelect.forEach(btn => {
        data.forEach(_ => {
            if (_.typeEauxEspece.toLowerCase().includes(btn.textContent.toLowerCase())) {
                newData.push(_);
            }
        });
    });
    return newData;
}

function sortBybase(data) {
    const selectedButton = document.querySelector("#filter-sort .selected");
    let property;
    if (selectedButton.id === "filter-sort-name") {
        property = "nom_espece";
    } else if (selectedButton.id === "filter-sort-latin-name") {
        property = "nom_latin_espece";
    } else if (selectedButton.id === "filter-sort-mean-lenght") {
        property = "taille_moyenne_espece";
    }
    data.sort((a, b) => {
        if (a[property] !== undefined && b[property] !== undefined) {
            if (property === "taille_moyenne_espece") {
                const sizeA = parseFloat(a[property].match(/\d+/)[0]);
                const sizeB = parseFloat(b[property].match(/\d+/)[0]);
                return sizeA - sizeB;
            } else {
                return a[property].localeCompare(b[property]);
            }
        } else {            
            return 0; 
        }
    });
    if (selectedButton.querySelector("i.fa-arrow-up")) {
        data.reverse();
    }
    return data;
}

function filterData(data) {
    dataInput = filterInput(data);
    dataWater = filterWater(dataInput);
    dataSort = sortBybase(dataWater);
    dataSort = Array.from(new Set(dataSort.map(JSON.stringify)), JSON.parse);
    updateUI(dataSort);
}

function updateUI(data) {
    const liste = document.querySelector("#species-list");
    const nbElement = document.querySelector("#nb-species");
    let nbFish = data.length;
    if (nbFish > 1) {
        nbElement.innerHTML = '<span style="font-weight: bold;">' + data.length + '</span> poissons trouvés.';
    } else {
        nbElement.innerHTML = '<span style="font-weight: bold;">' + data.length + '</span> poisson trouvé.';
    }
    
    liste.innerHTML = ""; 
    data.forEach(fish => {
        const li = document.createElement("li");
        li.classList.add("fish-element");
        const liHeader = document.createElement("div");
        const name = document.createElement("p");
        const latinName = document.createElement("p");
        const meanLength = document.createElement("p");
        const liHeaderWater = document.createElement("div");
        liHeaderWater.classList.add("type-water");
        const img = document.createElement("img"); 
        img.classList.add("fish-element-img");     
        name.innerText = fish.nom_espece;
        latinName.innerText = fish.nom_latin_espece;  
        latinName.style.fontStyle = "italic";
        name.classList.add("name-fish");        
        meanLength.innerText = "Taille moyenne : " + fish.taille_moyenne_espece; 
        img.onerror = function() {
            img.src = "../assets/img/fishs/defaut.png";
        };
        img.src = "../assets/img/fishs/" + fish.nom_espece.toLowerCase() + "_01.png";
        if (fish.description_espece === null) {
            img.title = "Pas de description.";
        } else {
            img.title = fish.description_espece;
        }        
        liHeaderWater.innerText = "Eaux : ";
        let listeEaux = fish.typeEauxEspece.split(", ");
        listeEaux.forEach(eau => {
            let typeEau = document.createElement("div");
            typeEau.classList.add("water");
            if (eau === "Eau de mer") {
                typeEau.classList.add("saltwater");                
            } else if (eau === "Eau douce") {
                typeEau.classList.add("freshwater");
            } else if (eau === "Eau saumâtre") {
                typeEau.classList.add("brackish");
            } 
            typeEau.title = eau;
            liHeaderWater.append(typeEau);
        });
        liHeader.append(name);
        liHeader.append(latinName);
        liHeader.append(meanLength);
        liHeader.append(liHeaderWater);
        li.append(liHeader);     
        li.append(img);     
        liste.appendChild(li);
    });
}

function onClick() {
    //search bar
    const input = document.querySelector("#search-bar-species");    
    input.addEventListener("keyup", () =>{
        filterData(allData);
    });
    //btns
    const buttons = document.querySelectorAll(".filter");    
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterData(allData);
        });
    });
}


animButtons();
getAllData();
onClick();


