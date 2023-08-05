import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Errorpage.module.css";
export function ErrorPage({ errorMessage, handleBack }) {
  const navigate = useNavigate();

  const handleClick = () => {
    handleBack();
    navigate("/");
  };

  return (
    <div>
      <h1>{errorMessage}</h1>
      <button className={styles.backBtn} onClick={handleClick}>
        Go back
      </button>
    </div>
  );
}
