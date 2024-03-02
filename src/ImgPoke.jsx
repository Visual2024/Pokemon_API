import { useEffect } from "react";
import { useState } from "react";

export const ImgPoke = ({url}) => {
  const [poke, setPoke] = useState({});

  useEffect(() => {
    const fetchDate = async () => {
      const res = await fetch(url);
      const resInfo = await res.json();
      setPoke(resInfo.sprites.front_default);
      console.log(res + "Res Normal")
      console.log(resInfo + "Res Info")
    };
    fetchDate();
  }, []);

  console.log(poke);
  console.log(url)
  return (
    <>
        <img src={poke} alt="" />
    </>
  );
};