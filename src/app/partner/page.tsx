import styles from "./page.module.css";
import pagesBG from "../assets/images/pagesBG/pagesBG.png";
import Image from "next/image";

import aspudden from '../assets/images/partner/Aspudden-png.png'
import borstahusen from '../assets/images/partner/Borstahusen-png.png'
import djurgårdensHockey from '../assets/images/partner/Djurgårdens-Hockey-png.png'
import djurgårdensIfUngdom from '../assets/images/partner/DjurgårdensIF-Ungdom-png.png'
import dösjebro from '../assets/images/partner/Dösjebro-png.png'

import {oswald } from "../layout";

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
                <div className={styles.foreningBox}>
                  <Image src={aspudden} alt="Aspudden" />
                </div>
                <div className={styles.foreningBox}>
                  <Image src={borstahusen} alt="Borstahusen" />
                </div>
                <div className={styles.foreningBox}>
                  <Image src={djurgårdensHockey} alt="Djurgårdens Hockey" />
                </div>
                <div className={styles.foreningBox}>
                  <Image src={djurgårdensIfUngdom} alt="Djurgårdens IF Ungdom" />
                </div>
                <div className={styles.foreningBox}>
                  <Image src={dösjebro} alt="Dösjebro" />
                </div>
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
