"use client";

import { useState } from "react";
import styles from "./page.module.css";
import DiplomImage from "../assets/images/kontaktaoss/dealbooster-diplom.png";
import Image from "next/image";
import { oswald } from "../layout";
import Föreningar from "./Föreningar";
import Samarbetspartners from "./Samarbetspartners";

export default function Partner() {
  const [activeTab, setActiveTab] = useState<"föreningar" | "samarbetspartners">("föreningar");

  return (
    <div className={styles.partnerPage}>
      <main className={styles.mainPartner}>
        <div className={`${styles.partnerTitle} ${oswald.className}`}>
          <h1></h1>
        </div>
        <div className={styles.toggleContainer}>
          <div 
            className={styles.toggleSwitch}
            onClick={() => setActiveTab(activeTab === "föreningar" ? "samarbetspartners" : "föreningar")}
          >
            <div className={`${styles.toggleSlider} ${activeTab === "samarbetspartners" ? styles.slideRight : ""}`}></div>
            <div className={`${styles.toggleOption} ${activeTab === "föreningar" ? styles.active : ""} ${oswald.className}`}>
              Föreningar
            </div>
            <div className={`${styles.toggleOption} ${activeTab === "samarbetspartners" ? styles.active : ""} ${oswald.className}`}>
              Samarbetspartners
            </div>
          </div>
        </div>
        {activeTab === "föreningar" ? <Föreningar /> : <Samarbetspartners />}
        <Image className={styles.diplomImage} src={DiplomImage} alt="Diplom" />
      </main>
    </div>
  );
}
