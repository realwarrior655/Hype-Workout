const container = document.getElementById("cards-container");

fetch("listOfDinamics.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al cargar el archivo JSON");
        }
        return response.json(); // Parsear los datos como JSON
    })
    .then(listOfDinamics => {
        // Iterar sobre los datos y crear las tarjetas
        listOfDinamics.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
            <img src=" ${item.image}" alt="${item.Name}">
            <h3>${item.Name}</h3>
            <h2>${item.dificulty}</h2>
            <p>${item.description}</p>
          `;
            container.appendChild(card);
        });
    })