import React, { useState } from "react";
import "./SearchBar.css"

function SearchBar(props){

  const [term, setTerm] = useState("");

  const search = () => {
    console.log(term)
    console.log("button pressed");
    props.onSearch(term.toLowerCase().replace(" ", "-"));
  }
    
  return(
    <div className="searchBar">

      <input
        type="text"
        placeholder="Enter a Pokémon or Pokédex number"
        onChange={(e) => {setTerm(e.target.value)}}
      />
      <button onClick={search}>Search</button>

    </div> 
  )
}

export default SearchBar