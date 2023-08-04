import React, { useEffect } from "react";
import styles from "./About.module.css";
export function About() {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.TextContainer}>
        <h1>About me</h1>
        <p>
          Hello there! I'm Rahil Habibli, a 25-year-old technology enthusiast
          with a strong drive for learning and personal growth. Currently
          immersing myself in the captivating world of Full Stack Development, I
          am on an exciting journey to cultivate a comprehensive understanding
          of coding, web development, and user-centric design.
        </p>
        <br />
        <h2>My Goal</h2>
        <br />
        <p>
          My goal? To become a professional Backend Developer. I yearn to master
          the art of designing and implementing server-side logic, of optimizing
          systems to ensure speed, of improving database schemas that support
          application processes. I'm captivated by the potential of technology
          to shape and transform the world, and I am eager to be part of that
          transformative process.
        </p>
      </div>
    </div>
  );
}
