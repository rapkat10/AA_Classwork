import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount() {
    // debugger;
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const pokemonList = pokemon;
    // debugger;
    if (pokemon.length === 0) {
        return ( <div>No Pokemon yet</div> );
    } else {
        return (
            <div>
                <h1>Pokemon</h1>
                <ul>
                    {pokemonList.map((poke, i) => {    
                        return (<li>{poke.name}<img src={poke.image_url} alt="" /></li> );
                    })}
                </ul>
            </div>
        );
    }
  }

}

export default PokemonIndex;