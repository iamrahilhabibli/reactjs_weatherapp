import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { Navbar } from "../../components/Navbar";
import "../../Index.css";
import { WeatherApp } from "../../components/WeatherApp";
export default function MainLayout() {
  return (
    <div className={styles.Container}>
      <Navbar />
      <Outlet />
    </div>
  );
}
