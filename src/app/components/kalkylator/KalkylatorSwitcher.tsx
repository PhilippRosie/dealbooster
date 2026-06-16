"use client";

import { useState } from "react";
import Kalkylator from "./Kalkylator";
import BuiltToPerformKalkylator from "./BuiltToPerformKalkylator";
import styles from "./Kalkylator.module.css";

type KalkylatorType = "forhanshafter" | "builtToPerform";

const KalkylatorSwitcher: React.FC = () => {
  const [active, setActive] = useState<KalkylatorType>("forhanshafter");

  return (
    <div>
      <div className={styles.kalkylatorTabs}>
        <button
          className={`${styles.kalkylatorTabButton} ${
            active === "forhanshafter" ? styles.kalkylatorTabButtonActive : ""
          }`}
          type="button"
          onClick={() => setActive("forhanshafter")}
        >
          Förmånshäften
        </button>
        <button
          className={`${styles.kalkylatorTabButton} ${
            active === "builtToPerform" ? styles.kalkylatorTabButtonActive : ""
          }`}
          type="button"
          onClick={() => setActive("builtToPerform")}
        >
          Built to Perform
        </button>
      </div>
      {active === "forhanshafter" ? <Kalkylator /> : <BuiltToPerformKalkylator />}
    </div>
  );
};

export default KalkylatorSwitcher;
