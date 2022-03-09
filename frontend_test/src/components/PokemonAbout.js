import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemonAbout } from "../store/actionCreators/actionCreator";

function PokemonAbout({ id }) {
  const dispatch = useDispatch();
  const { pokemonAbout, loading, error } = useSelector((state) => state);

  function printAbilities(payload) {
    let abilities = "";
    if (payload.length > 1) {
      payload.map((el, index) => {
        if (index === 0) {
          abilities += el.ability.name + ", ";
        } else if (index === 1) {
          abilities += el.ability.name + "";
        }
      });
    } else {
      abilities = payload[0].ability.name;
    }
    return abilities;
  }

  useEffect(() => {
    dispatch(getPokemonAbout(id));
  }, []);

  if (loading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
  if (error) {
    return (
      <>
        <p>Something went wrong</p>
      </>
    );
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="font-semibold mt-10 mx-6 lg:mx-auto space-y-6">
          <div className="flex justify-between flex-row">
            <p className="mr-56 lg:mr-56 text-slate-400">Name</p>
            <p>{pokemonAbout[0].name}</p>
          </div>
          <div className="flex justify-between flex-row">
            <p className="text-slate-400">Height</p>
            <p>{pokemonAbout[0].weight}</p>
          </div>
          <div className="flex justify-between flex-row">
            <p className="text-slate-400">Weight</p>
            <p>{pokemonAbout[0].height}</p>
          </div>
          <div className="flex justify-between flex-row">
            <p className="text-slate-400">Abilities</p>
            <p className="capitalize">
              {printAbilities(pokemonAbout[0].abilities)}
              {/* hahah */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonAbout;
