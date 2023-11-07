import SearchBar from "../searchbar/SearchBar";
import PokemonCard from "../pokemoncard/PokemonCard";
import "./reset.css";
import './App.css';
import { useState } from "react";

let url = "https://pokeapi.co/api/v2/pokemon/"

function App() {

  const [stats, setStats] = useState({hp: 0, attack: 0, defence: 0, spAttack: 0, spDefence: 0, speed: 0}); //{hp: 0, attack: 0, defence: 0, spAttack: 0, spDefence: 0, speed: 0}
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [sprite, setSprite] = useState(0);
  const [validSearch, setValidSearch] = useState(true);

  async function search(term){
    try{
      const response = await fetch(url + term + "/");
      const jsonResponse = await response.json();

      await setName(jsonResponse.name)
      await setId(jsonResponse.id)
      await setSprite(jsonResponse.sprites.front_default)
      await setStats({
                hp: jsonResponse.stats[0].base_stat,
                attack: jsonResponse.stats[1].base_stat,
                defence: jsonResponse.stats[2].base_stat,
                spAttack: jsonResponse.stats[3].base_stat,
                spDefence: jsonResponse.stats[4].base_stat,
                speed: jsonResponse.stats[5].base_stat
              }); 
      setValidSearch(true);
    }
    catch{
      setValidSearch(false);
    }  
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>POKÉ BASE STATS</h1>
      </header>
      <body>
        <div className="searchbar">
          <SearchBar onSearch={search} isValidSearch={validSearch}/>
        </div>
        <div className="pokemonSection">
            <PokemonCard name={name} id={id} sprite={sprite} stats={stats}/>
        </div>
      </body>
    </div>
  );
}

export default App;
