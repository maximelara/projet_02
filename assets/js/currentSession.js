function displayCurrentSession() {
    //mobil
    const status = false;
    const divMobile = document.querySelector("#infoSessionMobile");
    currentSession(divMobile, status);    
    //web
    const divWeb = document.querySelector("#currentSession");
    currentSession(divWeb, status);    
}

function currentSession(div, status=false) {
    const currentSessionFieldset = document.createElement("fieldset");
    currentSessionFieldset.classList.add("currentSession");
    const currentSessionLegend = document.createElement("legend");
    currentSessionLegend.innerText = "Session en cours";
    if (status) {
        currentSessionOn(currentSessionFieldset, "4h32", 6, 4, 64);
    } else{
        currentSessionOff(currentSessionFieldset);
    }
    currentSessionFieldset.append(currentSessionLegend);
    div.append(currentSessionFieldset);
    
}
function currentSessionOn(div, fishingTime, nbFish=0, weightFish=0, sizeFish=0) {
    const divInfos = document.createElement("div");
    const divBtn = document.createElement("div");
    const stopSessionBtn = document.createElement("button");
    const addFishBtn = document.createElement("button");
    stopSessionBtn.innerText = "Clôturer la session";
    addFishBtn.innerText = "Ajouter un poisson";
    divBtn.style.display = "flex";
    divBtn.style.justifyContent = "space-around";
    stopSessionBtn.classList.add("stopSessionButton");
    addFishBtn.classList.add("addFishButton");
    let infosList = {
        "Temps de pêche : " : fishingTime,
        "Nombre de poisson : " : nbFish,
        "Plus gros/grand poisson : " : weightFish + "kg - " + sizeFish + "cm",
    };
    for (element in infosList) {
        info = document.createElement("p");
        info.style.marginTop = "5px";
        info.innerText = element + infosList[element];        
        divInfos.append(info);
    }   
    
    divBtn.append(addFishBtn);
    divBtn.append(stopSessionBtn);    
    div.append(divInfos);
    div.append(divBtn);
}

function currentSessionOff(div) {
    const p = document.createElement("p");
    const divBtn = document.createElement("div");
    divBtn.style.display = "flex";
    divBtn.style.justifyContent = "space-around";
    p.innerText = "Vous n'êtes pas à la pêche.";
    const startSessionBtn = document.createElement("button");
    const addFishBtn = document.createElement("button");
    startSessionBtn.innerText = "Démarrer une session";
    addFishBtn.innerText = "Ajouter un poisson";
    startSessionBtn.classList.add("startSessionButton");
    addFishBtn.classList.add("addFishButton");
    divBtn.append(startSessionBtn);
    divBtn.append(addFishBtn);
    div.append(p);
    div.append(divBtn);
}

displayCurrentSession();
