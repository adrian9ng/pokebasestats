import React from "react";
import StatBar from "../statBar/StatBar";
import "./PokemonCard.css";

function PokemonCard(props){

    if(props.id){
        return (
            <div className="card">
                <h2 className="pokemonNameNum">{props.name.toUpperCase()} #{props.id}</h2>
                <div className="spr">
                    <img src={props.sprite} alt="Sprite of pokémon"/>
                </div>
                <div className="statGrid">
                    <StatBar baseStat="hp" stat={props.stats.hp}/>
                    <StatBar baseStat="attack" stat={props.stats.attack}/> 
                    <StatBar baseStat="defence" stat={props.stats.defence}/> 
                    <StatBar baseStat="sp Atk" stat={props.stats.spAttack}/> 
                    <StatBar baseStat="sp Def" stat={props.stats.spDefence}/> 
                    <StatBar baseStat="speed" stat={props.stats.speed}/>    
                </div>
                             
            </div>
        ) 
    }
    
}

export default PokemonCard;