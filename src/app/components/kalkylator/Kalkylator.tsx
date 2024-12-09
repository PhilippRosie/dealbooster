import React, { useState } from "react";

const Kalkylator: React.FC = () => {
  const pricePerHafte = 150; // Sätt pris per häfte
  const [antalHäften, setAntalHäften] = useState(1000);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAntalHäften(Number(event.target.value));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Beräkna dina intäkter</h1>

      <div style={{ margin: "20px 0" }}>
        <label htmlFor="salesSlider">
          Antal sålda häften: <span>{antalHäften}</span>
        </label>
        <br />
        <input
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
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>
          {antalHäften * pricePerHafte}
        </span>{" "}
        SEK
      </p>
    </div>
  );
};

export default Kalkylator;
