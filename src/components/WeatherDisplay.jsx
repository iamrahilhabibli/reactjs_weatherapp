import styles from "./WeatherDisplay.module.css";

export function WeatherDisplay({ data }) {
  const countryName = data.location.country;
  const cityName = data.location.name;
  const localTime = data.location.localtime;
  const formattedTime = localTime.slice(11, 16);

  const incomingDate = localTime.slice(0, 11).trim();
  const date = new Date(incomingDate);
  const options = { weekday: "long", day: "numeric", month: "long" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const iconForCondition = data.current.condition.icon;
  const currentTemp = data.current.temp_c;
  const windSpeed = data.current.wind_kph;
  const humidity = data.current.humidity;
  const feelsLikeC = data.current.temp_c;
  const uvIndex = data.current.uv;
  return (
    <div className={styles.weatherDataContainer}>
      <div className={styles.countryAndCityNameContainer}>
        <span className={styles.countryName}>{countryName}</span> ,{" "}
        <span className={styles.cityName}>{cityName}</span>
      </div>
      <div>
        <span className={styles.localTime}>{formattedTime}</span>
      </div>
      <div>
        <span className={styles.localDate}>{formattedDate}</span>
      </div>
      <img
        className={styles.weatherIcon}
        src={`https:${iconForCondition}`}
        alt="weather icon"
      />
      <span className={styles.currentTempSpan}>{currentTemp + " °C"}</span>

      <div className={styles.weatherMetricsGrid}>
        <span className={styles.windSpeedSpan}>{windSpeed}</span>
        <span className={styles.humiditySpan}>{humidity}</span>
        <span className={styles.feelsLikeSpan}>{feelsLikeC}</span>
        <span className={styles.uvIndexSpan}>{uvIndex}</span>
      </div>
    </div>
  );
}
