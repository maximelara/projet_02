// base
//const pages = ["Fil d'actu", "Map", "Classement", "Guides"];
const pages = {
    "feed" : "Fil d'actu",
    "map" : "Map",
    "classement" : "Classement",
    "guides" : "Guides",
}
const divHeader = document.querySelector("#header");
const divHeaderContent = document.createElement("div");
divHeaderContent.id = "content";
divHeader.append(divHeaderContent);

// logo
const logo = document.createElement("img");
logo.id = "logo";
logo["src"] = "../assets/img/logo/logo.png";
divHeaderContent.append(logo);

// navbar
const divNavBarListe = document.createElement("ul");
divNavBarListe.id = "navbar";
for (page in pages) {
    const pageElement = document.createElement("li");
    const pageElementLink = document.createElement("a");
    pageElementLink.textContent = pages[page];
    pageElementLink.href = `../html/${page}.html`;
    pageElementLink.id = page;
    pageElement.append(pageElementLink);
    divNavBarListe.append(pageElement);
}
divHeaderContent.append(divNavBarListe);





