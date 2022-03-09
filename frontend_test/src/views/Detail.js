import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getPokemonAbout,
  setAbout,
} from "../store/actionCreators/actionCreator";
import PokemonAbout from "../components/PokemonAbout";
import PokemonState from "../components/PokemonState";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { pokemonAbout, loading, error, about } = useSelector((state) => state);
  const [state, setState] = useState(false);

  function bgSelector(index) {
    let bgSetting = "bg-green-300 w-full h-screen";
    if (index > 3) {
      bgSetting = "bg-red-300 w-full h-screen";
    }
    if (index > 6) {
      bgSetting = "bg-blue-300 w-full h-screen";
    }
    if (index > 9) {
      bgSetting = "bg-yellow-300 w-full h-screen";
    }
    if (index > 12) {
      bgSetting = "bg-teal-300 w-full h-screen";
    }
    if (index > 15) {
      bgSetting = "bg-indigo-300 w-full h-screen";
    }
    if (index > 18) {
      bgSetting = "bg-violet-300 w-full h-screen";
    }
    return bgSetting;
  }

  function statusCheck(payload) {
    if (payload === "isAbout") {
      dispatch(setAbout(true));
      setState(false);
    } else {
      dispatch(setAbout(false));
      setState(true);
    }
  }

  useEffect(() => {
    dispatch(getPokemonAbout(id));
  }, [dispatch, id]);

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
      <div className={bgSelector(id)}>
        <div className="absolute bottom-0 bg-slate-50 w-full h-1/2 rounded-t-lg">
          <div className="flex justify-center">
            <ul className="flex flex-row space-x-8 lg:space-x-20 mt-10">
              <li onClick={() => statusCheck("isAbout")}>About</li>
              <li onClick={() => statusCheck("isState")}>Base Stats</li>
              <li>Evolution</li>
              <li>Moves</li>
            </ul>
          </div>
          {about && <PokemonAbout id={id} />}
          {state && <PokemonState />}
        </div>
      </div>
    </>
  );
}

export default Detail;
