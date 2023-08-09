import { SearchBar } from "./Searchbar";
import { WeatherDisplay } from "./WeatherDisplay";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import style from "./WeatherApp.module.css";
import { useNavigate } from "react-router-dom";
import { ErrorPage } from "./Errorpage";
import { Spinner } from "@chakra-ui/react";
import axios from "axios";

export function WeatherApp() {
  const [initialSearch, setInitialSearch] = useState("Oxford");
  const navigate = useNavigate();
  const api_key = "7e58c48abd6d40fe85b54302231805";

  const fetchWeatherData = () => {
    return axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${initialSearch}&aqi=no&dt}`
    );
  };
  const [isError, setIsError] = useState(null);
  const { isLoading, data, error } = useQuery(
    ["myData", initialSearch],
    fetchWeatherData
  );

  useEffect(() => {
    if (error) {
      setIsError(error.message);
    } else {
      setIsError(null);
    }
  }, [error]);

  const handleBack = () => {
    setIsError(null);
    setInitialSearch("Baku");
  };
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <ErrorPage errorMessage={error.message} handleBack={handleBack} />;
  }
  return (
    <div
      className={style.Container}
      style={{
        backgroundSize: "cover",
      }}
    >
      <SearchBar onSearch={setInitialSearch} />
      {data && <WeatherDisplay data={data.data} />}
    </div>
  );
}
