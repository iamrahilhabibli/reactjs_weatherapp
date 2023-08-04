export function WeatherDisplay({ data }) {
  const countryName = data.location.country;
  const cityName = data.location.name;
  const localTime = data.location.localtime;
  const formattedTime = localTime.slice(11, 16);
  return (
    <div className="weather-data">
      <div>
        {countryName}, {cityName}
      </div>
      <div>{formattedTime}</div>
    </div>
  );
}
