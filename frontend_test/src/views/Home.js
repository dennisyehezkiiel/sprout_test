import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getPokemon,
  getPokemonAbout,
  getPokemonTypes,
} from "../store/actionCreators/actionCreator";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pokemonList, loading, error } = useSelector((state) => state);

  function bgSelector(index) {
    let bgSetting =
      "bg-blue-300 m-2 w-40 lg:w-96 md:w-72 h-40 lg:h-96 rounded-xl";
    if (index > 3) {
      bgSetting = "bg-red-300 m-2 w-40 lg:w-96 md:w-72 h-40 lg:h-96 rounded-xl";
    }
    if (index > 6) {
      bgSetting =
        "bg-green-300 m-2 w-40 lg:w-96 md:w-72 h-40 lg:h-96 rounded-xl";
    }
    if (index > 9) {
      bgSetting =
        "bg-yellow-300 m-2 w-40 lg:w-96 md:w-72 h-40 lg:h-96 rounded-xl";
    }
    if (index > 12) {
      bgSetting =
        "bg-teal-300 m-2 w-40 lg:w-96 md:w-72 h-40 lg:h-96 rounded-xl";
    }
    if (index > 15) {
      bgSetting =
        "bg-indigo-300 m-2 w-40 lg:w-96 md:w-72 h-40 lg:h-96 rounded-xl";
    }
    if (index > 18) {
      bgSetting =
        "bg-violet-300 m-2 w-40 lg:w-96 md:w-72 h-40 lg:h-96 rounded-xl";
    }
    return bgSetting;
  }

  function navigateToDetail(id) {
    dispatch(getPokemonAbout(id));
    navigate(`/detail/${id}`);
  }

  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  function getPokemonType(id) {
    let type = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        return res.json().then((data) => {
          if (res.ok) {
            return data.types.map((el) => {
              return el.type.name;
            });
          } else {
            return Promise.reject(data);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });

    const printType = async () => {
      let value = "";
      const result = await type;
      result.map((el) => {
        // console.log(el, ">>>>>>>");
        value += el + " ";
      });
      return value;
    };

    printType();
  }

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
    <div className="m-2">
      <div className="flex justify-start mx-6 my-6 lg:justify-center lg:mx-0">
        <p className="text-4xl font-bold text-zinc-900">Pokedex</p>
      </div>
      <div className="flex flex-row">
        <div className="flex justify-center flex-wrap">
          {pokemonList.map((el, index) => (
            <div
              key={index}
              onClick={() => navigateToDetail(index + 1)}
              className={bgSelector(index + 1)}
            >
              <p className="text-xl text-slate-50 m-4 font-bold capitalize">
                {el.name}
              </p>
              <p>{getPokemonType(index + 1)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
