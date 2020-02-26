import React from 'react';
import { Route } from 'react-router-dom';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {

  componentDidMount() {
    // debugger;
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const pokemonItems = pokemon.map(poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));
    // debugger;
    if (pokemon.length === 0) {
        return ( <div>No Pokemon yet</div> );
    } else {
      return (
        <section className="list-section">
          {/* <h1>Pokemon</h1> */}
          <Route
            path="/pokemon/:pokemonId"
            component={PokemonDetailContainer}
          />
          <ul className="pokemonlist">
              {pokemonItems}
          </ul>
          
        </section>
      );
    }
  }

}

export default PokemonIndex;