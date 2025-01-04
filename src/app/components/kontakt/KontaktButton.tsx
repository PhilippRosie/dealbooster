import Link from "next/link";
import styles from "./KontaktButton.module.css";
import { oswald, barlowCondensed } from "../../layout";



export default function ContactButton() {
  return (
    <Link
      href="/kontaktaoss"
      className={`${styles.newContactButton} ${oswald.className}`}
    >
      Kontakta Oss
    </Link>
  );
}
