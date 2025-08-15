import styles from "./page.module.css";
import pagesBG from "../assets/images/pagesBG/pagesBG.png";
import bandyTjejer from "../assets/images/vemarvi/bandyTjejer.jpg";
import bandyKillar from "../assets/images/vemarvi/bandyKillar.jpg";
import DiplomImage from "../assets/images/kontaktaoss/dealbooster-diplom.png";
import Image from "next/image";

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
        <h2 className={`${styles.vemarviTextTitle} ${oswald.className}`}>
          Redo att förändra spelet? <br /> Vi är här för dig!
        </h2>
        <div className={styles.vemarviContent1}>
          <div
            className={`${styles.vemarviTextContent1} ${barlowCondensed.className}`}
          >
            <div className={styles.vemarviTextContent1Text}>
              <h3>Vem är vi?</h3>
               Tänk dig en vän som alltid har din rygg – det är vi på
              Dealbooster. <br />
              Vi hjälper idrottsföreningar att tjäna pengar på ett sätt som är
              både enkelt och roligt. Genom våra förmånshäften fyller vi
              plånböcker, stöttar lokala företag och gör livet lite bättre för
              alla inblandade. Vår vision? Att hjälpa din förening att blomstra
              samtidigt som vi bygger starkare lokalsamhällen.
              <br />
              <br /> <h3>Vårt uppdrag</h3>
               Vi är inte bara en lösning – vi är en partner.
              <br /> Genom att koppla ihop föreningar med lokala företag skapar
              vi en kedja av positiv energi. Varje sålt häfte är ett steg
              närmare era mål – vare sig det handlar om nya matchdräkter, en
              turné eller bättre träningsförhållanden. Vi stöttar dig varje steg
              på vägen.
              <br />
            </div>
            <Image
              className={styles.vemarviTextContent1Img}
              src={bandyTjejer}
              alt="Bandy Tjejer"
              width={400}
            />
          </div>
          <div className={styles.vemarviContent2}>
            <div
              className={`${styles.vemarviTextContent2} ${barlowCondensed.className}`}
            >
              <Image
                className={styles.vemarviTextContent2Img}
                src={bandyKillar}
                alt="Bandy Killar"
                width={400}
              />
              <ul>
                <div className={styles.vemarviTextContent2Text}>
                  <h3>Vad gör oss unika?</h3>
                  <li>
                    <b>Föreningsfokus:</b> Vi fattar hur viktig din förening är.
                    Därför skräddarsyr vi lösningar som funkar för just er.
                  </li>
                  <li>
                    <b>Stöd till lokala hjältar:</b> Vi sätter de lokala
                    företagen i rampljuset och hjälper dem att hitta nya kunder.
                  </li>
                  <li>
                    <b>Långsiktiga resultat:</b> Våra samarbeten handlar inte om
                    snabba klipp utan om att bygga en hållbar framtid.
                  </li>
                  <br />
                  <h3>Våra värderingar</h3>
                  <li>
                    <b>Gemenskap:</b> Tillsammans är vi starkare.
                  </li>
                  <li>
                    <b>Engagemang:</b> Vi bryr oss på riktigt och jobbar hårt
                    för din framgång.
                  </li>
                  <li>
                    <b>Innovation:</b> Vi testar nytt och hittar alltid bättre
                    sätt att göra saker.
                  </li>
                  <br />
                  Med Dealbooster vid din sida blir det roligare och enklare att
                  nå era drömmar. Så vad väntar du på? Hör av dig så hjälper vi
                  din förening att ta ett kliv framåt – tillsammans gör vi
                  skillnad!
                </div>
              </ul>
            </div>
          </div>
        </div>
        <Image className={styles.diplomImage} src={DiplomImage} alt="Diplom" />
      </main>
    </div>
  );
}
