import React from 'react';
import "./Pokecard.css"

const Pokecard = ({name, type, exp, id}) => (
    <div className="Pokecard">
        <h3 className="Pokecard-h3"> {name}</h3>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
        <div>Type: {type}</div>
        <div>EXP: {exp}</div>
    </div>
)

export default Pokecard;