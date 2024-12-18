import styles from "./Footer.module.css";
import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${barlowCondensed.className}`}>
      <div className={styles.content}>
        <p>Designed, Developed and Provided by Phil the Creative</p>
      </div>
    </footer>
  );
}
