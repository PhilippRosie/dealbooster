import styles from "./page.module.css";
import pagesBG from "../assets/images/pagesBG/pagesBG.png";
import Jonas from "../assets/images/kontaktaoss/Jonas.jpg";
import Kim from "../assets/images/kontaktaoss/Kim.jpg";
import Anna from "../assets/images/kontaktaoss/Anna.jpg";
import { barlowCondensed, oswald } from "../layout";

export default function Kontaktaoss() {
  return (
    <div className={styles.kontaktaossPage}>
      <main
        className={styles.mainKontaktaoss}
        style={{
          backgroundImage: `url(${pagesBG.src})`,
        }}
      >
        <div className={`${styles.kontaktaossTitle} ${oswald.className}`}>
          <h1 className={styles.kontaktaossHeading}>
            Hör av dig – vi är bara ett samtal bort!
          </h1>
          <p
            className={`${styles.kontaktaossSubheading} ${barlowCondensed.className}`}
          >
            Oavsett om du har frågor, idéer eller bara vill säga hej, är vi här
            för att hjälpa. Låt oss göra skillnad tillsammans.
          </p>
        </div>
        <div className={styles.kontaktaossContainer}>
          <div className={`${styles.kontaktBox} ${oswald.className}`}>
            <div className={styles.kontaktBoxTextContainer}>
              <p
                className={`${styles.kontaktBoxEmail} ${barlowCondensed.className}`}
              >
                VD & Grundare
              </p>
              <h2 className={styles.kontaktBoxName}>Jonas Orgmets</h2>
              <p
                className={`${styles.kontaktBoxEmail} ${barlowCondensed.className}`}
              >
                jonas@vemarvi.se
              </p>
              <p className={styles.kontaktBoxPhone}>+46 70 707 07 07</p>
            </div>
            <div className={styles.kontaktBoxImageContainer}>
              <img
                className={styles.kontaktBoxImage}
                src={Jonas.src}
                alt="Jonas"
              />
            </div>
          </div>
          <div className={`${styles.kontaktBox} ${oswald.className}`}>
            <div className={styles.kontaktBoxTextContainer}>
              <p
                className={`${styles.kontaktBoxEmail} ${barlowCondensed.className}`}
              >
                Partner och produktansvarig
              </p>
              <h2 className={styles.kontaktBoxName}>Kim Walfridsson</h2>
              <p
                className={`${styles.kontaktBoxEmail} ${barlowCondensed.className}`}
              >
                kim@vemarvi.se
              </p>
              <p className={styles.kontaktBoxPhone}>+46 70 707 07 07</p>
            </div>
            <div className={styles.kontaktBoxImageContainer}>
              <img className={styles.kontaktBoxImage} src={Kim.src} alt="Kim" />
            </div>
          </div>
          <div className={`${styles.kontaktBox} ${oswald.className}`}>
            <div className={styles.kontaktBoxTextContainer}>
              <p
                className={`${styles.kontaktBoxEmail} ${barlowCondensed.className}`}
              >
                Partner och produktansvarig
              </p>
              <h2 className={styles.kontaktBoxName}>Anna Elfner</h2>
              <p
                className={`${styles.kontaktBoxEmail} ${barlowCondensed.className}`}
              >
                anna@vemarvi.se
              </p>
              <p className={styles.kontaktBoxPhone}>+46 70 707 07 07</p>
            </div>
            <div className={styles.kontaktBoxImageContainer}>
              <img
                className={styles.kontaktBoxImage}
                src={Anna.src}
                alt="Anna"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
