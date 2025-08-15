import styles from "./page.module.css";
import pagesBG from "../assets/images/pagesBG/pagesBG.png";
import rabatthäfteBild from "../assets/images/hjartefragor/rabatthäfteBild.jpg";
import levereradeHäften from "../assets/images/hjartefragor/leveradeHäften.jpg";
import DiplomImage from "../assets/images/kontaktaoss/dealbooster-diplom.png";
import Image from "next/image";

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
        <div className={styles.hjartefragorContent}>
          <h2
            className={`${styles.hjartefragorContentHeading} ${oswald.className}`}
          >
           
            Lönsamma vardagsrabatter
          </h2>
          <p
            className={`${styles.hjartefragorContentText} ${barlowCondensed.className}`}
          >
            Ett enkelt och lönsamt sätt för dig och din förening att tjäna
            pengar till laget eller föreningen. Vi på Dealbooster arbetar med
            att stärka ekonomin inom idrottsföreningar med stor barn- och
            ungdomsverksamhet över hela landet med hjälp av våra förmånshäften.
          </p>
          <Image
              src={rabatthäfteBild}
              alt="Lönsamma vardagsrabatter"
              width={400}
              className={styles.hjartefragorImage}
                />
          <h2
            className={`${styles.hjartefragorContentHeading} ${oswald.className}`}
          >
            Stor och långsiktig sponsor
          </h2>
          <p
            className={`${styles.hjartefragorContentText} ${barlowCondensed.className}`}
          >
            Söker ni en större sponsor till er klubb eller förening? Då är du/ni
            varmt välkommen att kontakta oss via mail eller telefon, så gör vi
            allt vi kan för att återkomma till dig/er så fort som möjligt.
          </p>
          <Image
              src={levereradeHäften}
              alt="Lönsamma vardagsrabatter"
              width={400}
              className={styles.hjartefragorImage}
                />
          <h2
            className={`${styles.hjartefragorContentHeading} ${oswald.className}`}
          >
            
            Gynna den lokala handeln
          </h2>
          <p
            className={`${styles.hjartefragorContentText} ${barlowCondensed.className}`}
          >
            Våra häften består av lönsamma lokala rabatter på vardagsköpen med
            erbjudanden som omfattar varor och tjänster som passar alla. – Allt
            från den lokala restaurangen, till rikstäckande kedjor inom
            heminredning och mat. Alla städer byggs också med hjälp av den
            lokala föreningens sedan tidigare upparbetade sponsorer och
            partners.
          </p>
        </div>
        <Image className={styles.diplomImage} src={DiplomImage} alt="Diplom" />
      </main>
    </div>
  );
}
