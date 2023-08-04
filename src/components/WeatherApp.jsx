function WeatherApp() {
  const [initialSearch, setInitialSearch] = useState("Oxford");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const api_key = "7e58c48abd6d40fe85b54302231805";
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${initialSearch}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch(() => alert("Something went wrong..."));
  }, [initialSearch]);

  return (
    <div className="container">
      <SearchBar onSearch={setInitialSearch} />
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}