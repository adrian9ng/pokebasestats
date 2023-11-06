import React from "react";
import "./StatBar.css";

function StatBar(props){
    const baseStat = props.baseStat;

    return (
     <div className="statBar">
        <div className="statNameContainer">
            <h3 className="baseStat">{baseStat.toUpperCase()}</h3>
        </div>
        
        <div className="barContainer">
            <div className="bar" style={{width: `${props.stat / 255 * 100}%`}}></div> 
        </div>

        <div className="numberContainer">
            <div className="number">{props.stat}</div>
        </div>
     </div>   
    )
}

export default StatBar;