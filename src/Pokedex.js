import React from 'react';
import Pokecard from './Pokecard';
import "./Pokedex.css";

const Pokedex = ({pokemon}) => (
    <>
        {pokemon.map(p => 
            <Pokecard name={p.name} type={p.type} exp={p.base_experience} id={p.id}  />)
        }
    </>
)

export default Pokedex;