//selecciono donde voy a conocar los elementos iterables
const container = document.getElementById("cards-container");

fetch("listOfStatics.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al cargar el archivo JSON");
        }
        return response.json(); // Parsear los datos como JSON
    })
    .then(listOfStatics => {
        // Iterar sobre los datos y crear las tarjetas
        listOfStatics.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
            <img src=" ${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <h2>${item.dificulty}</h2>
            <p>${item.description}</p>
          `;
            container.appendChild(card);
        });
    })