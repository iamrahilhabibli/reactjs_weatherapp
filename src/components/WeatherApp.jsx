import { SearchBar } from "./Searchbar";
import { WeatherDisplay } from "./WeatherDisplay";
import { useState, useEffect } from "react";
import style from "./WeatherApp.module.css";
import nightImg from "../images/night.png";
import sunriseImg from "../images/sunrise.png";
import sunsetImg from "../images/sunset.jpeg";
import postMidnightImg from "../images/postmidnight.jpeg";
import daytimeImg from "../images/daytime.jpeg";

export function WeatherApp() {
  const [initialSearch, setInitialSearch] = useState("Oxford");
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const api_key = "7e58c48abd6d40fe85b54302231805";
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${initialSearch}&aqi=no&dt=${new Date().toISOString()}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
        const localTime = data.location.localtime;
        const formattedTimeParsed = parseInt(localTime.slice(11, 13));

        if (formattedTimeParsed >= 6 && formattedTimeParsed < 12) {
          setBackgroundImage(sunriseImg);
        } else if (formattedTimeParsed >= 12 && formattedTimeParsed < 18) {
          setBackgroundImage(daytimeImg);
        } else if (formattedTimeParsed >= 18 && formattedTimeParsed < 21) {
          setBackgroundImage(sunsetImg);
        } else if (formattedTimeParsed >= 21 && formattedTimeParsed < 24) {
          setBackgroundImage(nightImg);
        } else {
          setBackgroundImage(postMidnightImg);
        }
      })
      .catch(() => alert("Something went wrong..."));
  }, [initialSearch]);

  return (
    <div
      className={style.Container}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <SearchBar onSearch={setInitialSearch} />
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}
