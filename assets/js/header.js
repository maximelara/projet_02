// base
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
iconsList = ["feed", "search", "mp", "notif"];
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
divDisplayMenu.style.top = `0px`;
divDisplayMenu.style.display = "block";
divDisplayMenu.style.transform = "translateX(100%)";
divMenuHamburger.addEventListener("click", () => {  
    transformHamburger();  
    if (visible) {        
        divDisplayMenu.style.transform = "translateX(100%)";
        document.body.style.overflow = "auto"; 
    } else {        
        divDisplayMenu.style.transform = "translateX(0%)";
        document.body.style.overflow = "hidden";        
    }
    visible = !visible;
});
document.body.append(divDisplayMenu);

//scroll mobile
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







