import {
  FETCH_POKEMON,
  FETCH_POKEMON_ABOUT,
  FETCH_POKEMON_STATE,
  FETCH_POKEMON_TYPE,
  SET_LOADING,
  SET_ERROR,
  SET_ABOUT,
} from "../actionTypes/actionTypes";

export const getPokemon = () => {
  return (dispatch) => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        return res.json().then((data) => {
          if (res.ok) {
            dispatch(fetchPokemon(data.results));
          } else {
            return Promise.reject(data);
          }
        });
      })
      .catch((err) => {
        dispatch(setError(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
};

export const getPokemonAbout = (id) => {
  return (dispatch) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        return res.json().then((data) => {
          if (res.ok) {
            let about = [];
            let state = [];
            about.push({
              name: data.name,
              weight: data.weight,
              height: data.height,
              abilities: data.abilities,
            });

            data.stats.map((el) => {
              if (el.stat.name === "hp") {
                state.push(el.base_stat);
              } else if (el.stat.name === "attack") {
                state.push(el.base_stat);
              } else if (el.stat.name === "defense") {
                state.push(el.base_stat);
              } else if (el.stat.name === "special-attack") {
                state.push(el.base_stat);
              } else if (el.stat.name === "special-defense") {
                state.push(el.base_stat);
              }
            });
            dispatch(fetchPokemonAbout(about));
            dispatch(fetchPokemonState(state));
          } else {
            return Promise.reject(data);
          }
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch(setError(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
        dispatch(setAbout(true));
      });
  };
};

export const getPokemonTypes = (id) => {
  return (dispatch) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  };
};

export const fetchPokemon = (payload) => {
  return {
    type: FETCH_POKEMON,
    payload: payload,
  };
};

export const fetchPokemonAbout = (payload) => {
  return {
    type: FETCH_POKEMON_ABOUT,
    payload: payload,
  };
};

export const fetchPokemonState = (payload) => {
  return {
    type: FETCH_POKEMON_STATE,
    payload: payload,
  };
};

export const fetchPokemonType = (payload) => {
  return {
    type: FETCH_POKEMON_TYPE,
    payload: payload,
  };
};

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload: payload,
  };
};

export const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload: payload,
  };
};

export const setAbout = (payload) => {
  return {
    type: SET_ABOUT,
    payload: payload,
  };
};
