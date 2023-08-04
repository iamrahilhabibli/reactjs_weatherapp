import React, { useState, useEffect } from "react";
import { WeatherApp } from "../components/WeatherApp";
import style from "./Home.module.css";
export function Home() {
  return (
    <div className={style.HomeContainer}>
      <WeatherApp />
    </div>
  );
}
