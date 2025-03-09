// ohladom useEffect

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [hodnota, setHodnota] = useState(0);

  useEffect(() => {
    console.log("useEffect pre value");
  }, [value]);

  useEffect(() => {
    console.log("useEffect pre hodnota");
  }, [hodnota]);

  return (
    <div>
      <h1>zacinam</h1>
      {console.log("ja som return")}
      <p>cislo pre value je momentalne {value}</p>
      <p>cislo pre hodnota je momentalne {hodnota}</p>
      <button onClick={() => setValue(value + 1)}>value</button>
      <button onClick={() => setHodnota(hodnota + 1)}>hodnota</button>
    </div>
  );
}

export default App;
