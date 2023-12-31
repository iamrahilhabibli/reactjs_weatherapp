import { useState } from "react";
import styles from "./Search.module.css";

export function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input.trim());
    setInput("");
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Enter a location"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className={styles.searchBtn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
