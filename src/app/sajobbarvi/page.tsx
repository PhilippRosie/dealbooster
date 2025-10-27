import styles from "./page.module.css";
import pagesBG1 from "../assets/images/pagesBG/pagesBG1.png";
import DiplomImage from "../assets/images/kontaktaoss/dealbooster-diplom.png";
import { barlowCondensed, oswald } from "../layout";
import Image from "next/image";

import fottballAndFoot from "../assets/images/sajobbarvi/footballAndFoot.jpg";

export default function Sajobbarvi() {
  return (
    <div className={styles.sajobbarviPage}>
      <main
        className={styles.mainSajobbarvi}
      >
        <h2 className={`${styles.sajobbarviTextTitle} ${oswald.className}`}>
          Så jobbar vi för att <br /> stärka er förenings ekonomi
        </h2>
        <div className={styles.sajobbarviContent1}>
          <Image
            src={fottballAndFoot}
            alt="Football and Foot"
            height={300}
            
            className={styles.sajobbarviContentImage1}
          />
          <div className={styles.sajobbarviTextContainer}>
            <p
              className={`${styles.sajobbarviContentText1} ${barlowCondensed.className}`}
            >
              Låt säga att varje spelare säljer 2 häften var på våren,
              respektive 2 var på hösten, och att ni är 700 aktiva medlemmar i
              er förening. Med detta upplägg skulle ni dra in 420 000 kronor i
              rena intäkter. Utöver de intäkter produkten inbringar, går vi på
              Dealbooster in med en sponsring någonstans runt 25.000 - 35.000
              kronor/år till föreningen. Vi skriver i regel ett 3-årskontrakt på
              sponsringen.
            </p>
            <p
              className={`${styles.sajobbarviContentText2} ${barlowCondensed.className}`}
            >
              När ni jobbar med oss, hjälper vi er med den utbildning och
              planering som behövs för att komma igång och skapa ett
              framgångsrikt projekt med bra inkomst till föreningen. Vi har
              hjälpt föreningar att tjäna pengar på ett sätt som är både enkelt
              och roligt. Genom våra förmånshäften fyller vi plånböcker, stöttar
              lokala företag och gör livet lite bättre för alla inblandade. Vår
              vision? Att hjälpa din förening att blomstra samtidigt som vi
              bygger starkare lokalsamhällen.
            </p>
          </div>
        </div>
        <Image className={styles.diplomImage} src={DiplomImage} alt="Diplom" />
      </main>
    </div>
  );
}
