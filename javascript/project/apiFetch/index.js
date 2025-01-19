// fetch("https://pokeapi.co/api/v2/pokemon/ditto" )
// .then(response =>{
//      return response.json()})
// .then(data =>{
//     console.log(data.name);
// })
// .catch(error =>{console.error(error);})

async function getData(){
   try{
     const pokemonName = document.getElementById("dataEntry").value.toLowerCase();
    const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    if(!response.ok) throw new Error("Can't fetch Data");
    
    const data = await response.json();
    const pokemonSpirit = data.sprites.front_shiny;
    ;
    const imgElement = document.getElementById("pokemonspirit");
    imgElement.src = pokemonSpirit;
    imgElement.style.display = "block";
    console.log(data);
    }
    catch(error){
        console.error(error);
    }
}