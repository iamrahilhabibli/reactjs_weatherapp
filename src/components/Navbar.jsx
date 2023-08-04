import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <nav className={styles.Container}>
      <div>
        <ul className={styles.Pages}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
