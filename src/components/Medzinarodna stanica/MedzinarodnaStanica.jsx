import React, { isValidElement } from "react";
import { useEffect, useState } from "react";
const MedzinarodnaStanica = () => {
  const url = "http://api.open-notify.org/iss-now.json";

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [map, setMap] = useState("");

  useEffect(() => {
    const getCoordinates = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setLatitude(data.iss_position.latitude);
      setLongitude(data.iss_position.longitude);
      setMap(`https://sk.mapy.cz/zakladni?x=${latitude}&y=${longitude}&z=4`);
    };
    getCoordinates();
  }, []);

  https: return (
    <div>
      <h1>MedzinarodnaStanica sa nachadza:</h1>
      <p>zemepisna sirka: {latitude}</p>
      <p>zemepisna dlzka: {longitude}</p>
      <a href={map} target="_blank">
        Sucasne miesto ISS je tu, staci kliknut
      </a>
    </div>
  );
};

export default MedzinarodnaStanica;
