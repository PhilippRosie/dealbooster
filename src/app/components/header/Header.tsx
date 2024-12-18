"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setIsVisible(false);
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 200); // Tiden i millisekunder innan headern dyker upp igen
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
          isVisible ? styles.visible : styles.hidden
        }`}
      >
        <Link href="/" className={styles.logo}>
          <Image
            src={isHomePage ? dealboosterLogoSmall : dealboosterLogo}
            alt="Dealbooster Logo"
            width={isHomePage ? 70 : 250}
          />
        </Link>

        {isHomePage && (
          <>
            <button
              onClick={toggleModal}
              className={`${styles.kalkylatorButton} ${
                isScrolled ? styles.scrolledButton : ""
              }`}
            >
              Öppna Kalkylator
            </button>
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

        <Link
          href="/kontaktaoss"
          className={`${styles.contactButton} ${oswald.className} ${
            isScrolled ? styles.scrolledButton : ""
          }`}
        >
          Kontakta Oss
        </Link>
      </header>

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <Kalkylator />
        </Modal>
      )}
    </>
  );
}
