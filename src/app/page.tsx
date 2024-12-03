import styles from "./page.module.css";
import Header from "./components/header/Header";
import dealboosterBG from "../app/assets/images/landningssida/dealbosterBG.png";
import partnerBild from "../app/assets/images/landningssida/partnerBild.jpg";
import { barlowCondensed, oswald } from "../app/layout";

import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.landingPage}>
      <Header />
      <main
        className={styles.main}
        style={{
          backgroundImage: `url(${dealboosterBG.src})`,
        }}
      >
        <div className={styles.content}>
          <div className={styles.gridContainer}>
            <div className={`${styles.gridItem} ${oswald.className}`}>
              <h2>Partner</h2>
              <p className={barlowCondensed.className}>
                <div>
                  <Image
                    src={partnerBild}
                    alt="Partner"
                    width={200}
                    className={styles.partnerImage}
                  />
                </div>
                <h3>Bli en vardagshjälte!</h3>
                Som vår samarbetspartner blir du en vardagshjälte för många på
                det sätt du och din verksamhet bidrar med i det lokala
                ekonomiska kretsloppet.
              </p>
            </div>
            <div className={`${styles.gridItem} ${oswald.className}`}>
              <h2>Hjärtefrågor</h2>
              <p className={barlowCondensed.className}>
                <div>
                  <Image
                    src={partnerBild}
                    alt="Partner"
                    width={200}
                    className={styles.partnerImage}
                  />
                </div>
                Som vår samarbetspartner blir du en vardagshjälte för många på
                det sätt du och din verksamhet bidrar med i det lokala
                ekonomiska kretsloppet.
              </p>
            </div>
            <div className={`${styles.gridItem} ${oswald.className}`}>
              <h2>Så Jobbar Vi</h2>
              <p className={barlowCondensed.className}>
                <div>
                  <Image
                    src={partnerBild}
                    alt="Partner"
                    width={200}
                    className={styles.partnerImage}
                  />
                </div>
                Som vår samarbetspartner blir du en vardagshjälte för många på
                det sätt du och din verksamhet bidrar med i det lokala
                ekonomiska kretsloppet.
              </p>
            </div>
            <div className={`${styles.gridItem} ${oswald.className}`}>
              <h2>Vem är vi?</h2>
              <p className={barlowCondensed.className}>
                <div>
                  <Image
                    src={partnerBild}
                    alt="Partner"
                    width={200}
                    className={styles.partnerImage}
                  />
                </div>
                Som vår samarbetspartner blir du en vardagshjälte för många på
                det sätt du och din verksamhet bidrar med i det lokala
                ekonomiska kretsloppet.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
