import React from "react";
import { useState, useEffect } from "react";
import style from "./UseEffect.module.css";

const UseEffect = () => {
  const [quote, setQuote] = useState("");
  const url = "https://api.kanye.rest";

  useEffect(() => {
    const getQuote = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setQuote(data.quote);
    };
    getQuote();
  }, []);

  //   getQuote();

  return (
    <div className={style.quote}>
      <h1>{quote ? quote : "nic"}</h1>
    </div>
  );
};

export default UseEffect;
