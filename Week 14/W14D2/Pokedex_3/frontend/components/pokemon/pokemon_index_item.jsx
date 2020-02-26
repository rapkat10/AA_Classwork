import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = ({ pokemon }) => {
  return ( 
    <li className="PokeItem">
      <Link to={`/pokemon/${pokemon.id}`} >
        <strong>{pokemon.id}</strong>
        <img src={pokemon.image_url} />
        <strong>{pokemon.name}</strong>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
