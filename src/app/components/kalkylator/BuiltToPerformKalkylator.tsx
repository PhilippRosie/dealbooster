"use client";

import React, { useState } from "react";
import styles from "./Kalkylator.module.css";

const BuiltToPerformKalkylator: React.FC = () => {
  const profitPerProduct = 100;
  const [antalProdukter, setAntalProdukter] = useState(100);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAntalProdukter(Number(event.target.value));
  };

  return (
    <div className={`${styles.kalkylatorContainer} ${styles.builtToPerform}`}>
      <h1>Beräkna intäkter för Built 2 Perform</h1>

      <div className={styles.sliderContainer}>
        <label htmlFor="productsSlider">
          Antal sålda produkter: <span>{antalProdukter}</span>
        </label>
        <br />
        <input
          className={`${styles.slider} ${styles.builtToPerformSlider}`}
          type="range"
          id="productsSlider"
          min="0"
          max="3000"
          step="20"
          value={antalProdukter}
          onChange={handleSliderChange}
          aria-label="Antal sålda produkter"
        />
      </div>

      <p>
        Intäkter:{" "}
        <span className={styles.intäkter}>{antalProdukter * profitPerProduct}</span>{" "}
        SEK
      </p>
    </div>
  );
};

export default BuiltToPerformKalkylator;
