import React, { useState } from "react";
import Form from "./Form";
import WeatherCard from "./WeatherCard";
import "../spinner.css";

const WeatherAPI = () => {
  const [weather, setWeather] = useState({});
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const getLocation = async (loc) => {
    setLoading(true);

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a296deeee3mshcda2aabf11bbbc2p145f02jsn70d352bd7769",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    await fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${loc}&days=3&lang=es`,
      options
    )
      .then((response) => response.json())
      .then((response) => setWeather(response))
      .catch((err) => console.error(err));

    setLoading(false);
    setShow(true);
  };

  return (
    <>
      <Form getLocation={getLocation} />

      {loading ? (
        <div className="mx-auto mt-10">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        show && <WeatherCard weather={weather} />
      )}
    </>
  );
};

export default WeatherAPI;
