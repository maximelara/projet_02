let data = [];

function getData() {
    const apiUrl = "http://localhost:8080/api/guide";

    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur de réseau ou de l'API");
            }
            return response.json();
        })
        .then(fetchedData => {
            data = fetchedData; 
            sortBybase();
           
        })
        .catch(error => {
            console.error("Une erreur s'est produite :", error);
        });
}

function updateUI(data) {
    const liste = document.querySelector("#species-list");
    liste.innerHTML = ""; 
    data.forEach(fish => {
        const li = document.createElement("li");
        li.innerText = fish.nom_espece + " - " + fish.nom_latin_espece + " - " + fish.taille_moyenne_espece;
        liste.appendChild(li);
    });
}

function sortBy() {
    const sortButtons = document.querySelectorAll("#filter-sort span");
    sortButtons.forEach(button => {
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
            let selectedButton = document.querySelector(".selected");
            let property;
            if (selectedButton.id === "filter-sort-name") {
                property = "nom_espece";
            } else if (selectedButton.id === "filter-sort-latin-name") {
                property = "nom_latin_espece";
            } else if (selectedButton.id === "filter-sort-mean-lenght") {
                property = "taille_moyenne_espece";
            }
            data.sort((a, b) => {
                if (property === "taille_moyenne_espece") {
                    const sizeA = parseFloat(a[property].match(/\d+/)[0]);
                    const sizeB = parseFloat(b[property].match(/\d+/)[0]);
                    return sizeA - sizeB;
                } else {
                    return a[property].localeCompare(b[property]);
                }
            });
            if (selectedButton.querySelector("i.fa-arrow-up")) {
                data.reverse();
            }
            updateUI(data);
        });
    });
}
function sortBybase() {
    document.querySelector("#filter-sort-name").classList.add("selected");
    const selectedButton = document.querySelector(".selected");
    let property;

    if (selectedButton.id === "filter-sort-name") {
        property = "nom_espece";
    } else if (selectedButton.id === "filter-sort-latin-name") {
        property = "nom_latin_espece";
    } else if (selectedButton.id === "filter-sort-mean-lenght") {
        property = "taille_moyenne_espece";
    }
    data.sort((a, b) => {
        if (property === "taille_moyenne_espece") {
            const sizeA = parseFloat(a[property].match(/\d+/)[0]);
            const sizeB = parseFloat(b[property].match(/\d+/)[0]);
            return sizeA - sizeB;
        } else {
            return a[property].localeCompare(b[property]);
        }
    });

    if (selectedButton.querySelector("i.fa-arrow-up")) {
        data.reverse();
    }
    updateUI(data);   
}


getData();
sortBy();

