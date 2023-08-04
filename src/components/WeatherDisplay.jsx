import styles from "./WeatherDisplay.module.css";

export function WeatherDisplay({ data }) {
  const countryName = data.location.country;
  const cityName = data.location.name;
  const localTime = data.location.localtime;
  const formattedTime = localTime.slice(11, 16);

  // Extract date string from localtime
  const incomingDate = localTime.slice(0, 11).trim();
  // Create a new Date object from incomingDate string
  const date = new Date(incomingDate);
  // Specify formatting options
  const options = { weekday: "long", day: "numeric", month: "long" };
  // Format the date
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className={styles.weatherDataContainer}>
      <div className={styles.countryAndCityNameContainer}>
        <span className={styles.countryName}>{countryName}</span> ,{" "}
        <span className={styles.cityName}>{cityName}</span>
      </div>
      <div>
        <span className={styles.localTime}>{formattedTime}</span>
        <span>{formattedDate}</span>
      </div>
    </div>
  );
}
