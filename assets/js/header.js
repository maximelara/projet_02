// base
const colors = window.getComputedStyle(document.documentElement);
let statusSession = true;
const pages = {
    "feed" : "Fil d'actu",
    "map" : "Map",
    "classement" : "Classement",
    "guides" : "Guides",
}
const divHeader = document.querySelector("#header");
const divHeaderContent = document.createElement("div");
const mainDiv = document.querySelector("#main")
divHeaderContent.id = "headerContent";
divHeader.append(divHeaderContent);

// logo
const logoLink = document.createElement("a");
const logo = document.createElement("img");
logoLink.id = "logo";
logo["src"] = "../assets/img/logo/logo.png";
logoLink["href"] = "../html/feed.html"
logoLink.append(logo);
divHeaderContent.append(logoLink);

// navbar
const divNavBarList = document.createElement("ul");
divNavBarList.id = "navbar";
for (page in pages) {
    const pageElement = document.createElement("li");
    const pageElementLink = document.createElement("a");
    pageElementLink.textContent = pages[page];
    pageElementLink.href = `../html/${page}.html`;
    pageElementLink.id = page;
    pageElement.append(pageElementLink);
    divNavBarList.append(pageElement);
}
divHeaderContent.append(divNavBarList);

// web icons
let iconsList = ["mp", "notif", "profilPic"];
const divIcons = document.createElement("div");
divIcons.id = "icons";
for (icon of iconsList) {
    let = iconImg = document.createElement("img");
    let = iconImgLink = document.createElement("a");
    iconImgLink["href"] = "";
    iconImg["src"] = `../assets/img/icone/${icon}.svg`;
    iconImg.style.width = "35px";
    iconImg.style.height = "auto";
    if (icon === "profilPic") {
        iconImg["src"] = `../assets/img/icone/${icon}.jpg`;
        iconImg.style.width = "50px";
        iconImg.style.height = "50px";
        iconImg.style.borderRadius = "50%";
        iconImg.style.objectFit = "cover";
        iconImg.style.boxShadow = "3px 3px 10px 0.5px  rgba(0, 0, 0, 0.1)";
    }
    iconImgLink.append(iconImg);
    divIcons.append(iconImgLink);
}
divHeaderContent.append(divIcons);

// mobile icons
//iconsList = ["feed", "search", "mp", "notif"];
iconsList = ["feed", "mp", "notif"];
const divIconsMobile = document.createElement("div");
divIconsMobile.id = "iconsMobile";
for (icon of iconsList) {
    let = iconImg = document.createElement("img");
    let = iconImgLink = document.createElement("a");
    iconImgLink["href"] = "";
    iconImg["src"] = `../assets/img/icone/${icon}.svg`;
    iconImg.style.width = "25px";
    iconImg.style.height = "auto";
    iconImgLink.append(iconImg);
    divIconsMobile.append(iconImgLink);
}
divHeaderContent.append(divIconsMobile);

//hamburger
const divMenuHamburger = document.createElement("div");
const menuHamburger = document.createElement("div");
divMenuHamburger.id = "divMenuHamburger";
menuHamburger.style.width = "30px";
menuHamburger.style.height = "25px";
menuHamburger.style.display = "flex";
menuHamburger.style.flexDirection = "column";
menuHamburger.style.justifyContent = "space-between";
menuHamburger.style.cursor = "pointer";
for (let i = 0; i < 3; i++) {
    const bar = document.createElement("div");
    bar.style.height = "4px";
    bar.style.background = "white";
    bar.classList.add("bar");
    bar.style.transformOrigin = "0% 50%";
    menuHamburger.append(bar);
}
divMenuHamburger.append(menuHamburger);
divHeaderContent.append(divMenuHamburger);

let isOpen = false;
function transformHamburger() {
    menuHamburger.children[0].style.transform = isOpen ? "rotate(0deg)" : "rotate(45deg)";
    menuHamburger.children[1].style.display = isOpen ? "block" : "none";
    menuHamburger.children[2].style.transform = isOpen ? "rotate(0deg)" : "rotate(-45deg)";
    isOpen = !isOpen;
}

//display menu
const divDisplayMenu = document.createElement("div");
divDisplayMenu.id = "navbarHamburger";
let visible = false;
divDisplayMenu.style.top = `80px`;
divDisplayMenu.style.display = "block";
divDisplayMenu.style.transform = "translateX(100%)";
const displayMenuList = ["Profil", "Map", "Classement", "Guides", "Amis"];
const displayMenuUL = document.createElement("ul");
displayMenuUL.id = "hamburgerList";
for (element of displayMenuList) {
    const elementLI = document.createElement("li");
    const elementLink = document.createElement("a");
    elementLink.innerText = element;    
    elementLink.style.fontSize = "20px";
    elementLI.style.margin = "30px";
    elementLink["href"] = `../html/${element.toLowerCase()}.html`;    
    elementLI.append(elementLink);
    displayMenuUL.append(elementLI);
}
divDisplayMenu.append(displayMenuUL);
divMenuHamburger.addEventListener("click", () => {  
    transformHamburger();  
    if (visible) {   
        //divDisplayMenu.style.display = "none";     
        divDisplayMenu.style.transform = "translateX(100%)";
        document.body.style.overflow = "auto"; 
        
    } else {     
        //divDisplayMenu.style.display = "block";   
        divDisplayMenu.style.transform = "translateX(0%)";
        document.body.style.overflow = "hidden";        
    }
    visible = !visible;
});
document.body.append(divDisplayMenu);
//sessions
function offSession(div) {    
    const divButtons = document.createElement("div");
    const goFishingButton = document.createElement("button");
    const addFishButton = document.createElement("button");
    const message = document.createElement("p");
    divButtons.style.marginTop = "10px";
    divButtons.style.display = "flex";
    divButtons.style.justifyContent = "space-between";
    message.innerText = "Vous n'êtes pas à la pêche.";
    goFishingButton.innerText = "Démarrer une session";
    addFishButton.innerText = "Ajouter un poisson";
    addFishButton.style.backgroundColor = colors.getPropertyValue("--greenColor");
    divButtons.append(goFishingButton);
    divButtons.append(addFishButton);
    div.append(message);
    div.append(divButtons);
}
function onSession(div, fishingTime, nbFish=0, weightFish=0, sizeFish=0) {
    const divDetails = document.createElement("div");
    const divButtons = document.createElement("div");
    const stopFishingButton = document.createElement("button");    
    const addFishButton = document.createElement("button");
    divButtons.style.marginTop = "10px";
    divButtons.style.display = "flex";
    divButtons.style.justifyContent = "space-between";
    stopFishingButton.innerText = "Clôturer la session";
    addFishButton.innerText = "Ajouter un poisson";
    addFishButton.style.backgroundColor = colors.getPropertyValue("--greenColor");
    stopFishingButton.style.backgroundColor = colors.getPropertyValue("--redColor");
    let infosList = {
        "Temps de pêche : " : fishingTime,
        "Nombre de poisson : " : nbFish,
        "Plus gros poisson : " : weightFish + " kg",
        "Plus grand poisson : " : sizeFish + " cm",
    };
    for (element in infosList) {
        info = document.createElement("p");
        info.style.marginTop = "5px";
        info.innerText = element + infosList[element];        
        divDetails.append(info);
    }   
    divButtons.append(addFishButton);
    divButtons.append(stopFishingButton);
    div.append(divDetails);    
    div.append(divButtons);   
}
const statusSessionDiv = document.createElement("fieldset");
statusSessionDiv.id = "session";
statusSessionDiv.style.margin = "0px 30px";
statusSessionDiv.style.padding = "10px 20px 20px 20px";
statusSessionDiv.style.borderColor = colors.getPropertyValue("--greenColor");
const statusSessionLegend = document.createElement("legend");
statusSessionLegend.innerText = "Session en cours";
statusSessionLegend.style.fontSize = "20px";
statusSessionLegend.style.margin = "auto";
statusSessionLegend.style.padding = "0 10px";
statusSessionDiv.append(statusSessionLegend)
divDisplayMenu.append(statusSessionDiv);
statusSession = statusSession ? onSession(statusSessionDiv, "4h32", 12, 4.6, 65) : offSession(statusSessionDiv);
//logo
const logoMenuLink = document.createElement("a");
const logoMenu = document.createElement("img");
logoMenu["src"] = "../assets/img/logo/logo.png";
logoMenuLink["href"] = "../html/feed.html"
logoMenu.style.width = "80%";
logoMenu.style.height = "auto";
logoMenu.style.display = "flex";
logoMenu.style.margin = "50px auto";
logoMenuLink.append(logoMenu);
divDisplayMenu.append(logoMenuLink);

//scroll hidden header
let lastScrollY = 0;
window.addEventListener("scroll", () => {
    const currentScroll = document.documentElement.scrollTop;    
    if (currentScroll > lastScrollY) {
        divHeader.style.transform = "translateY(-100%)";
    } else{
        divHeader.style.transform = "translateY(0)";
    }
    lastScrollY = currentScroll;
});






