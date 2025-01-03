import styles from "./page.module.css";
import Link from "next/link";
import dealboosterBG from "../app/assets/images/landningssida/dealbosterBG.png";
import partnerBild from "../app/assets/images/landningssida/partnerBild.jpg";
import hjartefragorBild from "../app/assets/images/landningssida/hjartefragorBild.jpg";
import { oswald, barlowCondensed } from "../app/layout";

import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.landingPage}>
      <main
        className={styles.main}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${dealboosterBG.src})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      >
        <div className={styles.content}>
          <div className={styles.gridContainer}>
            <Link
              href="/partner"
              className={`${styles.gridItem} ${oswald.className}`}
            >
              <h2>Partners</h2>
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
                Våra fantastiska föreningar och samarbetspartners är våra
                största styrkor! Här kan ni hitta dom.
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
                  alt="Partner"
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
                  src={partnerBild}
                  alt="Partner"
                  width={200}
                  className={styles.partnerImage}
                />
              </div>
              <h3>Bli en vardagshjälte!</h3>
              <p className={barlowCondensed.className}>
                Som vår samarbetspartner blir du en vardagshjälte för många på
                det sätt du och din verksamhet bidrar med i det lokala
                ekonomiska kretsloppet.
              </p>
            </Link>
            <Link
              href="/vemarvi"
              className={`${styles.gridItem} ${oswald.className}`}
            >
              <h2>Vem är vi?</h2>
              <div className={styles.imageContainer}>
                <Image
                  src={partnerBild}
                  alt="Partner"
                  width={200}
                  className={styles.partnerImage}
                />
              </div>
              <h3>Bli en vardagshjälte!</h3>
              <p className={barlowCondensed.className}>
                Som vår samarbetspartner blir du en vardagshjälte för många på
                det sätt du och din verksamhet bidrar med i det lokala
                ekonomiska kretsloppet.
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
