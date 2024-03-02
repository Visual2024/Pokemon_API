import { useEffect } from "react";
import { useState } from "react";
import { ImgPoke } from "./ImgPoke";

export const App = () => {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    const fetchDate = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon");
      const resInfo = await res.json();
      setPoke(resInfo.results);
    };
    fetchDate();
  }, []);

  console.log(poke);
  return (
    <>
      {poke.length > 0 &&
        poke.map((poke) => {
          return (
            <>
              <div className="flex flex-row flex-wrap p-2 bg-blue-500 ">
                <div className="bg-black flex flex-col w-70">
                  <p className="text-red-600">{poke.name}</p>
                  <ImgPoke url={poke.url} />
                  <a className="text-red-600">{poke.url}</a>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

