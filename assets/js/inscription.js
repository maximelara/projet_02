function inscription() {
    document.querySelector("#inscription-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        for (const pair of formData.entries()) {
            console.log(`Clé: ${pair[0]}, Valeur: ${pair[1]}`);
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
inscription();
