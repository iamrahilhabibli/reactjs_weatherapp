import { SearchBar } from "./Searchbar";
import { WeatherDisplay } from "./WeatherDisplay";
import { useState, useEffect } from "react";
import style from "./WeatherApp.module.css";
import nightImg from "../images/night.png";
import sunriseImg from "../images/sunrise.png";
import sunsetImg from "../images/sunset.jpeg";
import postMidnightImg from "../images/postmidnight.jpeg";
import daytimeImg from "../images/daytime.jpeg";
import { useNavigate } from "react-router-dom";
import { ErrorPage } from "./Errorpage";
export function WeatherApp() {
  const [initialSearch, setInitialSearch] = useState("Oxford");
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const handleBack = () => {
    setErrorMessage(null);
    navigate("/");
  };

  useEffect(() => {
    const api_key = "7e58c48abd6d40fe85b54302231805";
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${initialSearch}&aqi=no&dt}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("No match found");
        }
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
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, [initialSearch]);

  if (errorMessage) {
    return <ErrorPage errorMessage={errorMessage} handleBack={handleBack} />;
  }

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
