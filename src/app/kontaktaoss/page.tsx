import styles from "./page.module.css";
import Jonas from "../assets/images/kontaktaoss/Jonas.jpg";
import Kim from "../assets/images/kontaktaoss/Kim.jpg";
import Anna from "../assets/images/kontaktaoss/Anna.jpg";
import Conny from "../assets/images/kontaktaoss/Conny.png";
import Philipp from "../assets/images/kontaktaoss/Philipp.jpg";
import Elliot from "../assets/images/kontaktaoss/Elliot.jpg";
import Poppy from "../assets/images/kontaktaoss/Poppy.jpg";
import dbDiplom from "../assets/images/kontaktaoss/dealbooster-diplom.png";
import { barlowCondensed, oswald } from "../layout";
import Image from "next/image";

import PhoneIcon from "../assets/images/kontaktaoss/telephone.svg";
import EmailIcon from "../assets/images/kontaktaoss/envelope.svg";

export default function Kontaktaoss() {
  return (
    <div className={styles.kontaktaossPage}>
      <main
        className={styles.mainKontaktaoss}
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
            <div className={styles.kontaktBoxLeftContainer}>
              <div className={styles.kontaktBoxTextContainer}>
              <h2 className={styles.kontaktBoxName}>Jonas Orgmets</h2>
                <p
                  className={`${styles.kontaktBoxTitel} ${barlowCondensed.className}`}
                >
                  Grundare <br />
                  Klubb & Sponsoransvarig
                </p>
                {/*<p
                  className={`${styles.kontaktBoxEmail} ${barlowCondensed.className}`}
                >
                  <a href="mailto:jonas@dealbooster.nu">
                    jonas@dealbooster.nu <EmailIcon className={styles.icon} />
                  </a>
                </p>
                <p className={styles.kontaktBoxPhone}>
                  <a href="tel:+46706170878">
                    +46 70 617 08 78 <PhoneIcon className={styles.icon} />
                  </a>
                </p>*/}
              </div>
              <Image
                className={styles.kontaktBoxDiplom}
                src={dbDiplom}
                alt="Diplom"
                width={200}
                height={80}
                loading="lazy"
                sizes="(max-width: 768px) 200px, 200px"
              />
            </div>
            <div className={styles.kontaktBoxImageContainer}>
              <Image
                className={styles.kontaktBoxImage}
                src={Jonas}
                alt="Jonas"
                width={200}
                height={200}
                loading="lazy"
                sizes="(max-width: 768px) 250px, 200px"
              />
            </div>
          </div>
          <div className={`${styles.kontaktBox} ${oswald.className}`}>
            <div className={styles.kontaktBoxLeftContainer}>
              <div className={styles.kontaktBoxTextContainer}>
              <h2 className={styles.kontaktBoxName}>Kim Walfridsson</h2>
                <p
                  className={`${styles.kontaktBoxTitel} ${barlowCondensed.className}`}
                >
                  VD <br /> Klubb- Sponsor- & Affärsutvecklingsansvarig
                </p>
                <p
                  className={`${styles.kontaktBoxEmail} ${barlowCondensed.className}`}
                >
                  <a href="mailto:kim@dealbooster.nu">
                    kim@dealbooster.nu <EmailIcon className={styles.icon} />
                  </a>
                </p>
                <p className={styles.kontaktBoxPhone}>
                  <a href="tel:+46721500909">
                    +46 72 150 09 09 <PhoneIcon className={styles.icon} />
                  </a>
                </p>
              </div>
              <Image
                className={styles.kontaktBoxDiplom}
                src={dbDiplom}
                alt="Diplom"
                width={200}
                height={80}
                loading="lazy"
                sizes="(max-width: 768px) 200px, 200px"
              />
            </div>
            <div className={styles.kontaktBoxImageContainer}>
              <Image
                className={styles.kontaktBoxImage}
                src={Kim}
                alt="Kim"
                width={200}
                height={200}
                loading="lazy"
                sizes="(max-width: 768px) 250px, 200px"
              />
            </div>
          </div>
          <div className={`${styles.kontaktBox} ${oswald.className}`}>
            <div className={styles.kontaktBoxLeftContainer}>
              <div className={styles.kontaktBoxTextContainer}>
              <h2 className={styles.kontaktBoxName}>Anna-Karin Elfner</h2>
                <p
                  className={`${styles.kontaktBoxTitel} ${barlowCondensed.className}`}
                >
                  Partner & Produktansvarig
                </p>
                <p
                  className={`${styles.kontaktBoxEmail} ${barlowCondensed.className}`}
                >
                  <a href="mailto:anna@dealbooster.nu">
                    anna@dealbooster.nu <EmailIcon className={styles.icon} />
                  </a>
                </p>
                <p className={styles.kontaktBoxPhone}>
                  <a href="tel:+46738110903">
                    +46 73 811 09 03 <PhoneIcon className={styles.icon} />
                  </a>
                </p>
              </div>
              <Image
                className={styles.kontaktBoxDiplom}
                src={dbDiplom}
                alt="Diplom"
                width={200}
                height={80}
                loading="lazy"
                sizes="(max-width: 768px) 200px, 200px"
              />
            </div>
            <div className={styles.kontaktBoxImageContainer}>
              <Image
                className={styles.kontaktBoxImage}
                src={Anna}
                alt="Anna"
                width={200}
                height={200}
                loading="lazy"
                sizes="(max-width: 768px) 250px, 200px"
              />
            </div>
          </div>
          <div className={`${styles.kontaktBox} ${oswald.className}`}>
            <div className={styles.kontaktBoxLeftContainer}>
              <div className={styles.kontaktBoxTextContainer}>
              <h2 className={styles.kontaktBoxName}>Conny Nilsson</h2>
                <p
                  className={`${styles.kontaktBoxTitel} ${barlowCondensed.className}`}
                >
                  Ekonomi & Utveckling<br /> Webbutvecklare
                </p>
                <p
                  className={`${styles.kontaktBoxEmail} ${barlowCondensed.className}`}
                >
                  <a href="mailto:conny@dealbooster.nu">
                    conny@dealbooster.nu <EmailIcon className={styles.icon} />
                  </a>
                </p>
                <p className={styles.kontaktBoxPhone}>
                  <a href="tel:+46701454588">
                    +46 70 145 45 88 <PhoneIcon className={styles.icon} />
                  </a>
                </p>
              </div>
              <Image
                className={styles.kontaktBoxDiplom}
                src={dbDiplom}
                alt="Diplom"
                width={200}
                height={80}
                loading="lazy"
                sizes="(max-width: 768px) 200px, 200px"
              />
            </div>
            <div className={styles.kontaktBoxImageContainer}>
              <Image
                className={styles.kontaktBoxImage}
                src={Conny}
                alt="Conny"
                width={200}
                height={200}
                loading="lazy"
                sizes="(max-width: 768px) 250px, 200px"
              />
            </div>
          </div>
          <div className={`${styles.kontaktBox} ${oswald.className}`}>
            <div className={styles.kontaktBoxLeftContainer}>
              <div className={styles.kontaktBoxTextContainer}>
              <h2 className={styles.kontaktBoxName}>Philipp Rosie</h2>
                <p
                  className={`${styles.kontaktBoxTitel} ${barlowCondensed.className}`}
                >
                Partner och Produktansvarig <br /> Klubb- & Sponsoransvarig <br /> Marknadsansvarig <br /> Webbutvecklare & Grafiker
                </p>
                <p
                  className={`${styles.kontaktBoxEmail} ${barlowCondensed.className}`}
                >
                  <a href="mailto:philipp@dealbooster.nu">
                    philipp@dealbooster.nu <EmailIcon className={styles.icon} />
                  </a>
                </p>
                <p className={styles.kontaktBoxPhone}>
                  <a href="tel:+46768769490">
                    +46 76 876 94 90 <PhoneIcon className={styles.icon} />
                  </a>
                </p>
              </div>
              <Image
                className={styles.kontaktBoxDiplom}
                src={dbDiplom}
                alt="Diplom"
                width={200}
                height={80}
                loading="lazy"
                sizes="(max-width: 768px) 200px, 200px"
              />
            </div>
            <div className={styles.kontaktBoxImageContainer}>
              <Image
                className={styles.kontaktBoxImage}
                src={Philipp}
                alt="Philipp"
                width={200}
                height={200}
                loading="lazy"
                sizes="(max-width: 768px) 250px, 200px"
              />
            </div>
          </div>
          <div className={`${styles.kontaktBox} ${oswald.className}`}>
            <div className={styles.kontaktBoxLeftContainer}>
              <div className={styles.kontaktBoxTextContainer}>
              <h2 className={styles.kontaktBoxName}>Elliot Leijonberg</h2>
                <p
                  className={`${styles.kontaktBoxTitel} ${barlowCondensed.className}`}
                >
                  Säljare
                </p>
                <p
                  className={`${styles.kontaktBoxEmail} ${barlowCondensed.className}`}
                >
                  <a href="mailto:elliot@dealbooster.nu">
                    elliot@dealbooster.nu <EmailIcon className={styles.icon} />
                  </a>
                </p>
                <p className={styles.kontaktBoxPhone}>
                  <a href="tel:+46733680813">
                    +46 73 368 08 13 <PhoneIcon className={styles.icon} />
                  </a>
                </p>
              </div>
              <Image
                className={styles.kontaktBoxDiplom}
                src={dbDiplom}
                alt="Diplom"
                width={200}
                height={80}
                loading="lazy"
                sizes="(max-width: 768px) 200px, 200px"
              />
            </div>
            <div className={styles.kontaktBoxImageContainer}>
              <Image
                className={styles.kontaktBoxImage}
                src={Elliot}
                alt="Elliot"
                width={200}
                height={200}
                loading="lazy"
                sizes="(max-width: 768px) 250px, 200px"
              />
            </div>
          </div>
          <div className={`${styles.kontaktBox} ${oswald.className}`}>
            <div className={styles.kontaktBoxLeftContainer}>
              <div className={styles.kontaktBoxTextContainer}>
              <h2 className={styles.kontaktBoxName}>Poppy Elfner Orgmets</h2>
                <p
                  className={`${styles.kontaktBoxTitel} ${barlowCondensed.className}`}
                >
                  Social Media Manager
                </p>
                <div className={styles.kontaktBoxPhoneEmpty}></div>
              </div>
              <Image
                className={styles.kontaktBoxDiplom}
                src={dbDiplom}
                alt="Diplom"
                width={200}
                height={80}
                loading="lazy"
                sizes="(max-width: 768px) 200px, 200px"
              />
            </div>
            
            <div className={styles.kontaktBoxImageContainer}>
              <Image
                className={styles.kontaktBoxImage}
                src={Poppy}
                alt="Poppy"
                width={200}
                height={200}
                loading="lazy"
                sizes="(max-width: 768px) 250px, 200px"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
