function inscription() {
    document.querySelector("#inscription-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });     
        const email = data.emailUtilisateur;
        const password = data.motDePasseUtilisateur;
        const confirmPassword = data.confirmerMotDePasseUtilisateur;
        
        if (!isValidEmail(email)) {
            document.querySelector("#message").textContent = "Adresse e-mail invalide.";
            return;
        }
        
        if (password !== confirmPassword) {
            document.querySelector("#message").textContent = "Les mots de passe ne correspondent pas.";
            return;
        }   
        fetch("http://localhost:8080/api/inscription", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            return response.text().then(data => {
                document.querySelector("#message").textContent = data;
            });
        });        
    });
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
inscription();
