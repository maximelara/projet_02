//header
function header(){
    //base
    const headerDiv = document.querySelector("#header");
    const headerDivContent = document.createElement("div");  
    headerDivContent.style.display = "flex";
    headerDivContent.style.height = "100%";
    headerDivContent.style.alignItems = "center";
    headerDivContent.id = "headerContent";
    headerDiv.append(headerDivContent);
    //hidden header
    hiddenHeader();
    //logo
    logo(headerDivContent);  
    //navbar 
    navbar(headerDivContent);
    //icones
    icons(headerDivContent);
    //icones
    hamburgerMenu(headerDivContent);
    //menu mobile
    mobileMenu();
    
}
header();

//logo
function logo(div){
    const logoLink = document.createElement("a");
    const logo = document.createElement("img");
    logoLink.id = "logoHeaderA";
    logoLink.classList.add("left");    
    logo.id = "logoHeader";
    logo["src"] = "../assets/img/logo/logo.png";
    logoLink["href"] = "../html/feed.html";
    logoLink.append(logo);
    div.append(logoLink);
}

//navbar
function navbar(div){
    const ulNavbar = document.createElement("ul");
    ulNavbar.classList.add("center");
    ulNavbar.id = "navbar";
    const pages = {
        "feed" : "Fil d'actu",
        "map" : "Map",
        "classement" : "Classement",
        "guides" : "Guides",
    }
    for (page in pages) {
        let element = document.createElement("li");
        let elementLink = document.createElement("a");
        elementLink.textContent = pages[page];
        elementLink.href = `../html/${page}.html`;         
        elementLink.style.fontSize = "20px";
        elementLink.id = page;
        element.append(elementLink);
        ulNavbar.append(element);
    }
    div.append(ulNavbar);
}

//icons
function icons(div){
    let iconsList = ["feed", "mp", "notif", "profilPic"];
    const divIcons = document.createElement("div");
    divIcons.id = "icons";
    divIcons.classList.add("right");
    divIcons.style.display = "flex";    
    divIcons.style.alignItems = "center";
    divIcons.style.justifyContent = "space-evenly";
    for (icon of iconsList) {
        let = iconImgLink = document.createElement("a");
        let = iconImg = document.createElement("img");
        iconImgLink.id = icon + "A"
        iconImg.id = icon + "Img"
        iconImgLink["href"] = "";
        iconImg["src"] = `../assets/img/icone/${icon}.svg`;
        iconImg.classList.add("icon");
        if (icon === "profilPic") {
            iconImg["src"] = `../assets/img/icone/${icon}.jpg`;
        }
        iconImgLink.append(iconImg);
        divIcons.append(iconImgLink);
    }
    div.append(divIcons);
}

//hamburger menu
function hamburgerMenu(div){
    const burgerDiv = document.createElement("div");  
    burgerDiv.classList.add("right-s"); 
    burgerDiv.style.display = "flex";
    burgerDiv.style.margin = "0 auto";
    burgerDiv.style.flexDirection = "column";
    burgerDiv.style.justifyContent = "space-between";
    burgerDiv.style.height = "25px";
    burgerDiv.style.width = "29px";    
    burgerDiv.style.cursor = "pointer";
    for(let i=0; i<3; i++){
        let burgerSpan = document.createElement("span");
        burgerSpan.style.height = "5px";
        burgerSpan.style.borderRadius = "2px"
        burgerSpan.style.transformOrigin = "0% 50%";
        burgerDiv.append(burgerSpan);
    }
    div.append(burgerDiv);
    //animation click et ouverture menu mobile
    let isOpen = false;
    let mobileMenuVar = false;
    burgerDiv.addEventListener("click", () => {
        burgerDiv.children[0].style.transform = isOpen ? "rotate(0deg)" : "rotate(45deg)";
        burgerDiv.children[1].style.display = isOpen ? "block" : "none";
        burgerDiv.children[2].style.transform = isOpen ? "rotate(0deg)" : "rotate(-45deg)";
        isOpen = !isOpen;
        mobileMenuAnim(mobileMenuVar);
        mobileMenuVar = !mobileMenuVar;
    });
}

//mobile menu
function mobileMenu(){
    const menuMobileDiv = document.createElement("div");
    menuMobileDiv.id = "menuMobile";
    document.body.insertBefore(menuMobileDiv, document.querySelector("#main"));
    //navbar
    navbarMobile(menuMobileDiv);
    //session
    const divSession = document.createElement("div");
    divSession.id = "infoSessionMobile";
    menuMobileDiv.append(divSession);
    //logo
    logoMobile(menuMobileDiv);
}

// transition menu mobile
function mobileMenuAnim(visible){
    menuMobileDiv = document.querySelector("#menuMobile");
    if (visible) {
        document.body.style.overflow = "auto";
        menuMobileDiv.style.transform = "translateX(100%)"; 
    } else {
        document.body.style.overflow = "hidden";     
        menuMobileDiv.style.transform = "translateX(0%)";
    }
}

//scroll hidden header
function hiddenHeader(){
    let lastScrollY = 0;
    const divHeader = document.querySelector("#header");
    window.addEventListener("scroll", () => {
        const currentScroll = document.documentElement.scrollTop;   
        if (currentScroll > lastScrollY) {
            divHeader.style.transform = "translateY(-100%)";
        } else{
            divHeader.style.transform = "translateY(0)";
        }
        lastScrollY = currentScroll;
    });
}
//nav bar mobile
function navbarMobile(div){
    const ulNavbar = document.createElement("ul");
    ulNavbar.id = "navbarMobile";
    const displayMenuList = ["Profil", "Map", "Classement", "Guides", "Amis"];
    for (page of displayMenuList) {
        let element = document.createElement("li");
        let elementLink = document.createElement("a");
        elementLink.innerText = page;    
        elementLink.style.fontSize = "20px";
        element.style.margin = "30px 50px";
        elementLink["href"] = `../html/${page.toLowerCase()}.html`;
        element.append(elementLink);
        ulNavbar.append(element);
    }
    div.append(ulNavbar);
}

//logo mobile
function logoMobile(div){
    const logoLink = document.createElement("a");
    const logo = document.createElement("img");    
    logoLink.style.display = "flex"; 
    logoLink.style.alignItems = "center";
    logoLink.style.margin = "auto";
    logoLink.id = "logoMobile";
    logo.style.width = "50%";
    logo.style.height = "auto";
    logo.style.margin = "0 auto";
    logo["src"] = "../assets/img/logo/logo.png";
    logoLink["href"] = "../html/feed.html";
    logoLink.append(logo);
    div.append(logoLink);
}