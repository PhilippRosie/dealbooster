"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";
import { barlowCondensed, oswald } from "../../layout";
import Image from "next/image";
import Link from "next/link";
import dealboosterLogo from "../../../app/assets/images/header/dealboosterLogo.png";
import dealboosterLogoSmall from "../../../app/assets/images/header/dealboosterLogoSmall.png";
import Modal from "../kalkylatormodal/Modal";
import Kalkylator from "../kalkylator/Kalkylator";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname !== "/";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          src={isHomePage ? dealboosterLogoSmall : dealboosterLogo}
          alt="Dealbooster Logo"
          width={isHomePage ? 50 : 250}
        />
      </Link>

      {isHomePage && (
        <>
          <button onClick={toggleModal} className={styles.kalkylatorButton}>
            Öppna Kalkylator
          </button>
          {isModalOpen && (
            <Modal onClose={toggleModal}>
              <Kalkylator />
            </Modal>
          )}
        </>
      )}
      <div className={styles.navContainer}>
        <div className={styles.taglineContainer}>
          <div
            className={`${styles.tagline} ${
              isHomePage ? styles.smallTagline : ""
            } ${oswald.className}`}
          >
            Tjäna pengar till föreningen!
          </div>
          <div
            className={`${styles.taglineDivider} ${
              isHomePage ? styles.smallTaglineDivider : ""
            } ${barlowCondensed.className}`}
          >
            -enkelt och långsiktigt.
          </div>
        </div>

        {isHomePage && (
          <nav className={styles.navLinks}>
            <Link href="/partner" className={oswald.className}>
              Partners
            </Link>
            <Link href="/hjartefragor" className={oswald.className}>
              Hjärtefrågor
            </Link>
            <Link href="/sajobbarvi" className={oswald.className}>
              Så Jobbar Vi
            </Link>
            <Link href="/vemarvi" className={oswald.className}>
              Vem är vi?
            </Link>
          </nav>
        )}
      </div>

      <button className={`${styles.contactButton} ${oswald.className}`}>
        Kontakta Oss
      </button>
    </header>
  );
}
