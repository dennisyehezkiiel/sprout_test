import React from "react";
import { useSelector } from "react-redux";

function PokemonState() {
  const { pokemonState, loading, error } = useSelector((state) => state);

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

  console.log(pokemonState);

  return (
    <>
      <div className="flex justify-center">
        <div className="font-semibold mt-6 mx-6 lg:mx-auto space-y-6">
          <div className="flex justify-between flex-row">
            <p className="mr-72 lg:mr-56 text-slate-400">HP</p>
            <p>{pokemonState[0]}</p>
          </div>
          <div className="flex justify-between flex-row">
            <p className="text-slate-400">Attack</p>
            <p>{pokemonState[1]}</p>
          </div>
          <div className="flex justify-between flex-row">
            <p className="text-slate-400">Defense</p>
            <p>{pokemonState[2]}</p>
          </div>
          <div className="flex justify-between flex-row">
            <p className="text-slate-400">Sp.Atk</p>
            <p>{pokemonState[3]}</p>
          </div>
          <div className="flex justify-between flex-row">
            <p className="text-slate-400">Sp.Def</p>
            <p>{pokemonState[4]}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonState;
