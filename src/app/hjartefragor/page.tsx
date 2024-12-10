import styles from "./page.module.css";
import pagesBG from "../assets/images/pagesBG/pagesBG.png";

import { barlowCondensed, oswald } from "../layout";

export default function Hjartefragor() {
  return (
    <div className={styles.hjartefragorPage}>
      <main
        className={styles.mainHjartefragor}
        style={{
          backgroundImage: `url(${pagesBG.src})`,
        }}
      >
        <div className={`${styles.hjartefragorTitle} ${oswald.className}`}>
          <h1>Hjärtefrågor</h1>
        </div>
      </main>
    </div>
  );
}
