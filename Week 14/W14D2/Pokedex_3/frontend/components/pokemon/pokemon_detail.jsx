import React from 'react';

class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
    // debugger;
    const oldId = prevProps.match.params.pokemonId;
    const newId = this.props.match.params.pokemonId;
    if (oldId !== newId) {
      this.props.requestSinglePokemon(newId);
    }
  }

  render() {
    const { pokemon } = this.props;
    if (pokemon.moves) {
      // debugger;
      const moves = pokemon.moves.join(', ');
      return (
        <section className="detail-section">
          <section className="poke-image">
            <img src={pokemon.image_url} />
          </section>
          <p className="poke-name">{pokemon.name}</p>
            {/* <li className="poke-name">{pokemon.name}</li> */}
          <strong>Type: {pokemon.poke_type}</strong>
          <strong>Attack: {pokemon.attack}</strong>
          <strong>Defense: {pokemon.defense}</strong>
          <strong>Moves: {moves}</strong>
        </section>
      );
    } else {  
      return (<div>Loading</div>);
    }
  }  
}

export default PokemonDetail;
