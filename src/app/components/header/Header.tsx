import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>dealbooster</div>

      <div className={styles.tagline}>
        Tjäna pengar till föreningen! -enkelt och långsiktigt.
      </div>

      <button className={styles.contactButton}>Kontakta Oss</button>
    </header>
  );
};

export default Header;
