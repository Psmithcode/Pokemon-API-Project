window.onload = getPokemon;
// const pageContainer = document.getElementById("page-container");
let pokemonDisplay = document.getElementById("pokemon-display");

let pokemonArray = [];

async function getPokemon() {
  for (let i = 1; i < 152; i++) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${i}/

      `
    );
    const todo = await response.json();
    pokemonArray.push(todo);
  }
  displayPokemon();
  return pokemonArray;
}

const displayPokemon = () => {
  for (let i = 0; i <= pokemonArray.length; i++) {
    const pokeDiv = document.createElement("div");
    // Name
    const pokemonNameContainer = document.createElement("p");
    pokemonNameContainer.classList.add("pokemon-name");
    // const pokemonName = document.createTextNode(pokemonArray[i].name);
    pokemonNameContainer.innerText = pokemonArray[i].name;
    // Image
    const pokeImageContainer = document.createElement("div");
    const pokeImage = document.createElement("img");
    pokeImage.src = pokemonArray[i].sprites.front_default;
    pokeImageContainer.appendChild(pokeImage);
    pokeImageContainer.classList.add("pokemon-image");
    // Id
    const pokeIdContainer = document.createElement("p");
    // const pokeId = document.createTextNode(pokemonArray[i].id);
    pokeIdContainer.innerText = pokemonArray[i].id;
    pokeIdContainer.classList.add("pokemon-id");
    // Type
    const pokemonTypeContainer = document.createElement("div");
    const pokemonTypeArray = pokemonArray[i].types;
    for (let i = 0; i < pokemonTypeArray.length; i++) {
      const pokeType = document.createElement("p");
      pokeType.innerText = pokemonTypeArray[i].type.name;
      pokemonTypeContainer.appendChild(pokeType);
    }
    pokemonTypeContainer.classList.add("pokemon-type");
    //
    pokeDiv.appendChild(pokemonNameContainer);
    pokeDiv.appendChild(pokeIdContainer);
    pokeDiv.appendChild(pokeImageContainer);
    pokeDiv.appendChild(pokemonTypeContainer);
    pokeDiv.classList.add("pokemon");

    pokemonDisplay.appendChild(pokeDiv);
  }
  console.log(pokemonArray);
};

// window.onload(displayPokemon());
