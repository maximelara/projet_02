function publication(insertDiv) {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("publication-main");

    //header publication
    let divHeader = document.createElement("div");
    divHeader.style.display = "flex";
    let profilePicHeader = document.createElement("img");
    profilePicHeader["src"] = "../assets/img/icone/profilPic.jpg";
    profilePicHeader.classList.add("profile-pic-publication")
    let divTitleHeader = document.createElement("div");    
    divTitleHeader.classList.add("header-publication")
    let userName = document.createElement("p");
    userName.classList.add("userName-publication");
    let datePost = document.createElement("p");
    datePost.classList.add("date-publication");

    //message publication
    let publicationText = document.createElement("p");
    publicationText.classList.add("text-publication")

    //reactions
    let reactionsDiv = document.createElement("div");
    reactionsDiv.classList.add("reactions");
    let commentIconDiv = document.createElement("div");
    let shareIconDiv = document.createElement("div");
    let likeIconDiv = document.createElement("div");

    let commentIcon = document.createElement("i");
    let shareIcon = document.createElement("i");
    let likeIcon = document.createElement("i");

    let commentIconNb = document.createElement("p");
    let shareIconNb = document.createElement("p");
    let likeIconNb = document.createElement("p");


    commentIcon.classList.add("fa-regular");
    commentIcon.classList.add("fa-comment");
    shareIcon.classList.add("fa-solid");
    shareIcon.classList.add("fa-retweet");
    likeIcon.classList.add("fa-regular");
    likeIcon.classList.add("fa-heart");

    // remplissage
    userName.innerText = "Lorem";
    datePost.innerText = "1h";
    publicationText.innerText = "Lorem ipsum dolor sit amet?, consectetur adipisicing elit. Recusandae architecto voluptatem nam doloribus maxime minima impedit itaque rerum vitae laboriosam, mollitia unde quibusdam similique nihil corporis eum distinctio sapiente quod.";
    commentIconNb.innerText = "12";
    shareIconNb.innerText = "16";
    likeIconNb.innerText = "24";

    likeIconDiv.addEventListener("click", () => {
        if (likeIcon.classList.contains("fa-regular")) {
            likeIcon.classList.remove("fa-regular");
            likeIcon.classList.add("fa-solid");
        } else {
            likeIcon.classList.remove("fa-solid");
            likeIcon.classList.add("fa-regular");
        }
        likeIcon.classList.toggle("is-liked");
    })

    //
    divTitleHeader.append(userName);
    divTitleHeader.append(datePost);
    divHeader.append(profilePicHeader);
    divHeader.append(divTitleHeader);
    commentIconDiv.append(commentIcon);
    commentIconDiv.append(commentIconNb);
    shareIconDiv.append(shareIcon);
    shareIconDiv.append(shareIconNb);
    likeIconDiv.append(likeIcon);
    likeIconDiv.append(likeIconNb);
    reactionsDiv.append(commentIconDiv);
    reactionsDiv.append(shareIconDiv);
    reactionsDiv.append(likeIconDiv);
    mainDiv.append(divHeader);
    mainDiv.append(publicationText);
    mainDiv.append(reactionsDiv);
    insertDiv.append(mainDiv);
}







let insertDiv = document.querySelector(".publications");

for (let i=0; i<20; i++) {
    publication(insertDiv);
}