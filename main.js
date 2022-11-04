window.onload = getPokemon;
// const pageContainer = document.getElementById("page-container");
let pokemonDisplay = document.getElementById("pokemon-display");

let pokemonArray = [{}];

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  ghost: "#564aa5",
  ice: "#d0fdff",
};

async function getPokemon() {
  for (let i = 1; i < 152; i++) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${i}/

      `
    );
    const todo = await response.json();
    pokemonArray.push(todo);
  }
  console.log(pokemonArray);
  displayPokemon();
  return pokemonArray;
}

const displayPokemon = () => {
  for (let i = 1; i <= pokemonArray.length; i++) {
    const type = pokemonArray[i].types[0].type.name;
    const color = colors[type];
    const pokeDiv = document.createElement("div");
    pokeDiv.setAttribute("onclick", "battlePokemon(this.id)");
    pokeDiv.classList.add("pokemon");
    pokeDiv.id = `${i}`;
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
    pokeDiv.style.backgroundColor = color;

    pokemonDisplay.appendChild(pokeDiv);
  }
  console.log(pokemonArray);
};

let lastPokemon = "";
let lastBaseStat = 0;
const battlePokemon = (element) => {
  console.log("battle pokemon");
  // element.classList.add('active')
  if (pokemonArray[element].stats[0].base_stat > lastBaseStat) {
    window.alert(`${pokemonArray[element].name} wins!`);
  } else if (pokemonArray[element].stats[0].base_stat < lastBaseStat) {
    window.alert(`${lastPokemon} wins!`);
  }
  // identify the pokemon we clicked on
  for (let i = 1; i <= pokemonArray.length; i++) {
    if (element == pokemonArray[i - 1].id) {
      lastPokemon = pokemonArray[i - 1].name;
      lastBaseStat = pokemonArray[i - 1].stats[0].base_stat;
      // console.log(pokemonArray[i].name);
      // console.log(pokemonArray[i].stats[0].base_stat);
    }
  }
  // find its base stat
  // create a variable to represent the stat
  //
};

// window.onload(displayPokemon());
