import styles from "./page.module.css";
import Link from "next/link";
import partnerBild from "../app/assets/images/landningssida/partnerBild.jpg";
import sajobbarviBild from "../app/assets/images/landningssida/såjobbarviBild.jpg";
import hjartefragorBild from "../app/assets/images/landningssida/hjartefragorBild.jpg";
import vemarviBild from "../app/assets/images/landningssida/vemärviBild.jpg";
import { oswald, barlowCondensed } from "../app/layout";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Välkommen till Vår Förening | Din Företag</title>
        <meta name="description" content="Upptäck hur vi samarbetar med föreningar för att skapa långsiktiga intäkter och sponsring. Läs mer om våra hjärtefrågor och hur vi arbetar." />
        <meta name="keywords" content="föreningar, sponsring, hjärtefrågor, intäkter, samarbete" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.landingPage}>
        <main className={styles.main}>
          <div className={styles.content}>
            <div className={styles.gridContainer}>
              <Link
                href="/partner"
                className={`${styles.gridItem} ${oswald.className}`}
              >
                <h2>Föreningar</h2>
                <div className={styles.imageContainer}>
                  <Image
                    src={partnerBild}
                    alt="Partner"
                    width={200}
                    className={styles.partnerImage}
                  />
                </div>
                <h3>Vilka är dom?</h3>
                <p className={barlowCondensed.className}>
                  Våra fantastiska föreningar är vår
                  största styrka! <br/><br/> Här kan ni hitta dom...
                </p>
              </Link>
              <Link
                href="/hjartefragor"
                className={`${styles.gridItem} ${oswald.className}`}
              >
                <h2>Hjärtefrågor</h2>
                <div className={styles.imageContainer}>
                  <Image
                    src={hjartefragorBild}
                    alt="Hjärtefrågor"
                    width={200}
                    className={styles.partnerImage}
                  />
                </div>
                <h3>Vi brinner för din förening!</h3>
                <p className={barlowCondensed.className}>
                  Låt ert lag tjäna pengar, få långsiktig sponsring och göra
                  skillnad på riktigt – för föreningen och för hela
                  lokalsamhället. Vill du bli en hjälte?! Läs mer här!
                </p>
              </Link>
              <Link
                href="/sajobbarvi"
                className={`${styles.gridItem} ${oswald.className}`}
              >
                <h2>Så Jobbar Vi</h2>
                <div className={styles.imageContainer}>
                  <Image
                    src={sajobbarviBild}
                    alt="Så jobbar vi"
                    width={200}
                    className={styles.partnerImage}
                  />
                </div>
                <h3>Sponsring som boostar</h3>
                <p className={barlowCondensed.className}>
                  Med vårt upplägg kan er förening tjäna hundratusentals kronor 
                  och få sponsring på upp till 35 000 kr.
                  Klicka vidare för att se hur enkelt det är att komma igång!
                </p>
              </Link>
              <Link
                href="/vemarvi"
                className={`${styles.gridItem} ${oswald.className}`}
              >
                <h2>Vem är vi?</h2>
                <div className={styles.imageContainer}>
                  <Image
                    src={vemarviBild}
                    alt="Vem är vi"
                    width={200}
                    className={styles.partnerImage}
                  />
                </div>
                <h3>Er förenings bästa vän!</h3>
                <p className={barlowCondensed.className}>
                  Vi är er partner för enklare och roligare föreningsintäkter.
                  Läs mer om hur vi hjälper föreningar att nå sina drömmar!
                </p>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
