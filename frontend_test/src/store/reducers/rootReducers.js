import {
  FETCH_POKEMON,
  FETCH_POKEMON_ABOUT,
  FETCH_POKEMON_STATE,
  FETCH_POKEMON_TYPE,
  SET_LOADING,
  SET_ERROR,
  SET_ABOUT,
} from "../actionTypes/actionTypes";

const initialState = {
  pokemonList: [],
  pokemonAboout: [],
  pokemonState: [],
  pokemonType: [],
  loading: true,
  error: null,
  about: false,
};

function rootReducer(state = initialState, action) {
  if (action.type === FETCH_POKEMON) {
    return {
      ...state,
      pokemonList: action.payload,
    };
  } else if (action.type === FETCH_POKEMON_ABOUT) {
    return {
      ...state,
      pokemonAbout: action.payload,
    };
  } else if (action.type === FETCH_POKEMON_STATE) {
    return {
      ...state,
      pokemonState: action.payload,
    };
  } else if (action.type === FETCH_POKEMON_TYPE) {
    return {
      ...state,
      pokemonType: action.payload,
    };
  } else if (action.type === SET_LOADING) {
    return {
      ...state,
      loading: action.payload,
    };
  } else if (action.type === SET_ERROR) {
    return {
      ...state,
      error: action.payload,
    };
  } else if (action.type === SET_ABOUT) {
    return {
      ...state,
      about: action.payload,
    };
  }
  return state;
}

export default rootReducer;
