import styles from "./Header.module.css";
import { barlowCondensed, oswald } from "../../layout";
import Image from "next/image";
import dealboosterLogo from "../../../app/assets/images/header/dealboosterLogo.png";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={dealboosterLogo} alt="Dealbooster Logo" width={200} />
      </div>
      <div className={styles.taglineContainer}>
        <div className={`${styles.tagline} ${oswald.className}`}>
          Tjäna pengar till föreningen!
        </div>
        <div
          className={`${styles.taglineDivider} ${barlowCondensed.className}`}
        >
          -enkelt och långsiktigt.
        </div>
      </div>

      <button className={`${styles.contactButton} ${oswald.className}`}>
        Kontakta Oss
      </button>
    </header>
  );
};

export default Header;
