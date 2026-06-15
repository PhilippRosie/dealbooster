import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { barlowCondensed, oswald } from "../layout";

import fottballAndFoot from "../assets/images/sajobbarvi/footballAndFoot.jpg";
import bandyKillar from "../assets/images/builttoperform/bandyKillar.jpg";
import bandyTjejer from "../assets/images/builttoperform/bandyTjejer.jpg";

export default function VarforDealbooster() {
  return (
    <div className={styles.builttoperformPage}>
      <main className={styles.mainBuilttoperform}>
        <h2 className={`${styles.builttoperformTextTitle} ${oswald.className}`}>
          Varför Dealbooster?
        </h2>
        <p className={`${styles.heroSubtitle} ${barlowCondensed.className}`}>
          Vi hjälper föreningar att skapa långsiktiga intäkter samtidigt som vi
          stärker lokala företag och lokalsamhällen.
        </p>

        <div className={styles.builttoperformContent1}>
          <div className={`${styles.builttoperformTextContent1} ${barlowCondensed.className}`}>
            <Image
              className={styles.builttoperformTextContent1Img}
              src={fottballAndFoot}
              alt="Fotboll och gemenskap"
              width={400}
              height={300}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 400px"
            />
            <div className={styles.builttoperformTextContent1Text}>
              <h3>Vårt uppdrag</h3>
              <p>
                Vi är mer än en lösning – vi är en partner.
              </p>
              <p>
                Genom att koppla samman föreningar med lokala företag skapar vi
                möjligheter för alla parter att växa. Varje sålt häfte hjälper
                föreningen närmare sina mål – oavsett om det handlar om nya
                matchdräkter, cuper, läger eller bättre träningsförhållanden.
              </p>
              <p>
                Samtidigt får lokala företag chansen att synas, nå nya kunder
                och bli en naturlig del av föreningslivet.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.builttoperformContent2}>
          <div className={`${styles.builttoperformTextContent2} ${barlowCondensed.className}`}>
            <div className={styles.builttoperformTextContent2Text}>
              <h3>Så fungerar det</h3>
              <ul>
                <li>
                  <b>1. Vi bygger häftet:</b> Vi tar fram ett attraktivt
                  förmånshäfte med lokala erbjudanden.
                </li>
                <li>
                  <b>2. Föreningen säljer:</b> Medlemmarna säljer häftena på ett
                  enkelt och tydligt sätt.
                </li>
                <li>
                  <b>3. Ni tjänar pengar:</b> Varje sålt häfte ger föreningen
                  nya intäkter.
                </li>
                <li>
                  <b>4. Lokala företag växer:</b> Företagen får nya kunder och
                  starkare lokal synlighet.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.builttoperformContent1}>
          <div className={`${styles.builttoperformTextContent1} ${barlowCondensed.className}`}>
            <div className={styles.builttoperformTextContent1Text}>
              <h3>Vad kan det ge er förening?</h3>
              <p>Ett enkelt upplägg kan skapa stora resultat.</p>
              <p>
                Exempel:
                <br />
                700 aktiva medlemmar
                <br />
                2 häften på våren
                <br />
                2 häften på hösten
              </p>
              <p>
                Resultat:
                <br />
                420 000 kr i rena intäkter till föreningen.
              </p>
              <p>
                Utöver detta går Dealbooster ofta in med sponsring. Vi arbetar
                vanligtvis med långsiktiga samarbeten över flera år.
              </p>
            </div>
            <Image
              className={styles.builttoperformTextContent1Img}
              src={bandyKillar}
              alt="Förening i rörelse"
              width={400}
              height={300}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 400px"
            />
          </div>
        </div>

        <div className={styles.builttoperformContent2}>
          <div className={`${styles.builttoperformTextContent2} ${barlowCondensed.className}`}>
            <div className={styles.builttoperformTextContent2Text}>
              <h3>Vad gör oss unika?</h3>
              <ul>
                <li>
                  <b>Föreningsfokus:</b> Vi förstår hur viktig föreningen är och
                  anpassar upplägget efter er.
                </li>
                <li>
                  <b>Lokala företag i centrum:</b> Vi lyfter lokala företag och
                  hjälper dem att nå nya kunder.
                </li>
                <li>
                  <b>Långsiktiga samarbeten:</b> Vi bygger hållbara samarbeten
                  som kan växa över tid.
                </li>
                <li>
                  <b>Personligt engagemang:</b> Vi finns med hela vägen från
                  planering till genomförande.
                </li>
                <li>
                  <b>Innovation:</b> Vi testar nya idéer och hittar smartare
                  sätt att skapa värde.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.builttoperformContent2}>
          <div className={`${styles.builttoperformTextContent2} ${barlowCondensed.className}`}>
            <Image
              className={styles.builttoperformTextContent2Img}
              src={bandyTjejer}
              alt="Innebandy i action"
              width={400}
              height={300}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 400px"
            />
            <div className={styles.builttoperformTextContent2Text}>
              <h3>Redo att stärka föreningens ekonomi?</h3>
              <p>
                Boka ett möte så visar vi hur Dealbooster kan skapa nya
                intäkter för just er förening.
              </p>
              <Link
                href="/kontaktaoss"
                className={`${styles.ctaButton} ${oswald.className}`}
              >
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
