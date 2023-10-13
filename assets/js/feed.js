
function getFilter(filterButtons, filterDefault) {
    filterDefault.style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue("--greenColor");
    filterDefault.querySelector("p").style.color = window.getComputedStyle(document.documentElement).getPropertyValue("--whiteColor");
    filterDefault.style.fontWeight = "bold";
    filterButtons.forEach((span) => {
        span.addEventListener("click", () => {
            filterButtons.forEach((btn) => {
                const icon = btn.querySelector("i");
                btn.style.backgroundColor = "";     
                btn.style.fontWeight = "";  
                btn.querySelector("p").style.color = "";               
                if (icon) {
                    icon.style.color = "";
                }            
            });
            span.style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue("--greenColor");
            span.querySelector("p").style.color = window.getComputedStyle(document.documentElement).getPropertyValue("--whiteColor");
            const icon = span.querySelector("i");
            if (icon) {
                icon.style.color = window.getComputedStyle(document.documentElement).getPropertyValue("--whiteColor");
            }            
            span.style.fontWeight = "bold";
        });
    });
}
function getRadioLocation(filterButtons, filterDefault) {
    filterDefault.style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue("--greenColor"); 
    let filterButtonsRadio = document.querySelectorAll("#location-selection span");
    filterButtons.forEach((span, index) => {
        span.addEventListener("click", () => {
            filterButtonsRadio.forEach((btn) => {
                btn.style.backgroundColor = "";  
            });
            filterButtonsRadio[index].style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue("--greenColor");
        });
    });
}

function getDistance() {
    const distanceSlider = document.getElementById("slider-distance");    
    const distanceList = [10, 25, 50, 100, 250, 500, 1000];
    distanceSlider.value = distanceList.length;
    let minScale = document.querySelector("#scale-low");
    let maxScale = document.querySelector("#scale-high");
    let distance = document.querySelector("#distance-location-km");
    distance.style.color = window.getComputedStyle(document.documentElement).getPropertyValue("--greenColor"); 
    distance.style.fontWeight = "bold"; 
    distance.innerText = distanceList[distanceList.length-1] + "km";
    minScale.innerText = distanceList[0] + "km";
    maxScale.innerText = distanceList[distanceList.length-1] +"km";
    distanceSlider.addEventListener("input", (event) => {
        const selectedIndex = event.target.value;
        const selectedDistance = distanceList[selectedIndex];       
        distance.innerText = selectedDistance + "km";      
    });
}

function openLocationMenu(){
    const buttonDisplay = document.querySelector("#filter-location");
    const buttonHidden = document.querySelector("#filter-everywhere");
    const locationMenu = document.querySelector("#location-selection");
    locationMenu.style.display = "none";
    buttonDisplay.addEventListener("click", () => {        
        locationMenu.style.display = "block";        
    });
    buttonHidden.addEventListener("click", () => {        
        locationMenu.style.display = "none";        
    });
}
openLocationMenu();

function getFilters() {
    let filterType = getFilter(document.querySelectorAll("#publications-type span"), document.querySelector("#filter-all"));
    let filterWho = getFilter(document.querySelectorAll("#publications-who span"), document.querySelector("#filter-everyone"));
    let filterWhere = getFilter(document.querySelectorAll("#publications-where span"), document.querySelector("#filter-everywhere"));
    let filterWhereRadio = getRadioLocation(document.querySelectorAll(".radio"), document.querySelector("#location-input span"));
    let filterDistance = getDistance();
    let filterSpecies = getFilter(document.querySelectorAll("#select-species span"), document.querySelector("#filter-all-species"));
    let filterSort = getFilter(document.querySelectorAll(".sort span"), document.querySelector("#sort-date"));
}
getFilters();


