function getFilter(filterDivs, filterDefault) {
    filterDefault.style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue("--greenColor");
    filterDefault.style.color = window.getComputedStyle(document.documentElement).getPropertyValue("--whiteColor");
    filterDefault.style.fontWeight = "bold";

    filterDivs.forEach((div) => {
        div.addEventListener("click", () => {
            div.style.backgroundColor = div.style.backgroundColor === ""
                ? window.getComputedStyle(document.documentElement).getPropertyValue("--greenColor")
                : "";
            div.style.color = div.style.backgroundColor === ""
                ? ""
                : window.getComputedStyle(document.documentElement).getPropertyValue("--whiteColor");
            div.style.fontWeight = div.style.backgroundColor === "" ? "" : "bold";
        });
    });
}
function getFilterSort(filterDivs, filterDefault) {
    filterDefault.style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue("--greenColor");
    filterDefault.style.color = window.getComputedStyle(document.documentElement).getPropertyValue("--whiteColor");
    filterDefault.style.fontWeight = "bold";

    filterDivs.forEach((div) => {
        div.addEventListener("click", () => {
            filterDivs.forEach((otherDiv) => {
                otherDiv.classList.remove("selected");
                otherDiv.style.backgroundColor = "";
                otherDiv.style.color = "";
                otherDiv.style.fontWeight = "";
            });
            div.classList.add("selected");
            div.style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue("--greenColor");
            div.style.color = window.getComputedStyle(document.documentElement).getPropertyValue("--whiteColor");
            div.style.fontWeight = "bold";
        });
    });
}


function getFilters() {
    let filterTypeWater = getFilter(document.querySelectorAll("#filter-water-type > span"), document.querySelector("#water-freshwater"));

    let filterSort = getFilterSort(document.querySelectorAll("#filter-sort > span"), document.querySelector("#filter-sort-name"));
}
getFilters();