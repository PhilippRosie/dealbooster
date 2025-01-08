import styles from "./page.module.css";
import pagesBG from "../assets/images/pagesBG/pagesBG.png";

import { barlowCondensed, oswald } from "../layout";

export default function Partner() {
  return (
    <div className={styles.partnerPage}>
      <main
        className={styles.mainPartner}
        style={{
          backgroundImage: `url(${pagesBG.src})`,
        }}
      >
        <div className={`${styles.partnerTitle} ${oswald.className}`}>
          <h1></h1>
        </div>
        <div className={styles.partnerForeningar}>
          <div className={styles.partnerForeningarContent}>
            <div className={styles.gridSection}>
              <h2 className={`${styles.sectionTitle} ${oswald.className}`}>
                Föreningar
              </h2>
              <div className={styles.partnerForeningarGrid}>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
                <div className={styles.foreningBox}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
