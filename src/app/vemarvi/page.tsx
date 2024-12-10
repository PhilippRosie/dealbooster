import styles from "./page.module.css";
import pagesBG from "../assets/images/pagesBG/pagesBG.png";

import { barlowCondensed, oswald } from "../layout";

export default function Vemarvi() {
  return (
    <div className={styles.vemarviPage}>
      <main
        className={styles.mainVemarvi}
        style={{
          backgroundImage: `url(${pagesBG.src})`,
        }}
      >
        <div className={`${styles.vemarviTitle} ${oswald.className}`}>
          <h1>Vem är vi?</h1>
        </div>
      </main>
    </div>
  );
}
