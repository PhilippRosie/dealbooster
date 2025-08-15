'use client';

import React, { useState } from "react";
import styles from "./Kalkylator.module.css";

const Kalkylator: React.FC = () => {
  const pricePerHafte = 150; // Sätt pris per häfte
  const [antalHäften, setAntalHäften] = useState(1000);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAntalHäften(Number(event.target.value));
  };

  return (
    <div className={styles.kalkylatorContainer}>
      <h1>Beräkna dina intäkter</h1>

      <div className={styles.sliderContainer}>
        <label htmlFor="salesSlider">
          Antal sålda häften: <span>{antalHäften}</span>
        </label>
        <br />
        <input
          className={styles.slider}
          type="range"
          id="salesSlider"
          min="1000"
          max="6000"
          step="100"
          value={antalHäften}
          onChange={handleSliderChange}
          aria-label="Antal sålda häften"
        />
      </div>

      <p>
        Intäkter:{" "}
        <span className={styles.intäkter}>{antalHäften * pricePerHafte}</span>{" "}
        SEK
      </p>
    </div>
  );
};

export default Kalkylator;
