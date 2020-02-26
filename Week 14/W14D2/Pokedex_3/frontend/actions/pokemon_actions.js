export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';

import * as APIUtil from '../util/api_util'

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const receiveSinglePokemon = (poke) => ({
  type: RECEIVE_SINGLE_POKEMON,
  poke,
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon().then(pokemon => {
    return dispatch(receiveAllPokemon(pokemon));
  });
}

export const requestSinglePokemon = (id) => (dispatch) => {
  return APIUtil.fetchSinglePokemon(id).then(pokemon => {
    return dispatch(receiveSinglePokemon(pokemon));
  });
}