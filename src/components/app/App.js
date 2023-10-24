import SearchBar from "../searchbar/SearchBar";
import "./reset.css";
import './App.css';
import { useState } from "react";

let url = "https://pokeapi.co/api/v2/pokemon/"

function App() {

  const [stats, setStats] = useState({hp: 0, attack: 0, defence: 0, spAttack: 0, spDefence: 0, speed: 0}); //{hp: 0, attack: 0, defence: 0, spAttack: 0, spDefence: 0, speed: 0}
  const [name, setName] = useState("");

  async function search(term){
    const response = await fetch(url + term + "/");
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    console.log(jsonResponse.stats);
    console.log(jsonResponse.name);

    await setName(jsonResponse.name)

    await setStats({
              hp: jsonResponse.stats[0].base_stat,
              attack: jsonResponse.stats[1].base_stat,
              defence: jsonResponse.stats[2].base_stat,
              spAttack: jsonResponse.stats[3].base_stat,
              spDefence: jsonResponse.stats[4].base_stat,
              speed: jsonResponse.stats[5].base_stat
            });
    await console.log(stats);
  }




  return (
    <div className="App">
      <header className="App-header">
        <h1>Poké Base Stats</h1>
      </header>
      <body>
        <div className="searchbar">
          <SearchBar onSearch={search}/>
        </div>
        <div className="pokemonSection">
          <div className="pokemonSide">
            <h2>{name.toUpperCase()}</h2>
          </div>
          <div className="statSide"></div>
        </div>
      </body>
    </div>
  );
}

export default App;
