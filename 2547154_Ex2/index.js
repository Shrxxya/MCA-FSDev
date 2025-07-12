async function fetchData() {
    try{
        // const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const randomIndex = Math.floor(Math.random() * 10) + 1;
        const response = await fetch(`https://dogapi.dog/api/v2/breeds`);
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        console.log(data.data[randomIndex].attributes.name);
        const pokemonSprite = data.data[randomIndex].attributes.name;
        const pokemonSprite2 = data.data[randomIndex].attributes.description;
        const nameElement = document.getElementById("name");
        const descElement = document.getElementById("desc");

        nameElement.innerHTML = pokemonSprite;
        nameElement.style.display = "block";
        descElement.innerHTML = pokemonSprite2;
        descElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
    
}

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// fetchData();