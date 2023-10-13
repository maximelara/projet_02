function publication(insertDiv) {
    //temp var
    //    
    let mainDiv = document.createElement("div");
    // let bgDiv = document.createElement("div");
    // let fgDiv = document.createElement("div");
    //
    mainDiv.classList.add("publication-main");
    // bgDiv.classList.add("publication-bg");
    // fgDiv.classList.add("publication-fg");



    // mainDiv.append(bgDiv);
    // mainDiv.append(fgDiv);
    insertDiv.append(mainDiv);
}


let insertDiv = document.querySelector(".publications");

publication(insertDiv);
publication(insertDiv);
publication(insertDiv);
publication(insertDiv);
publication(insertDiv);
publication(insertDiv);