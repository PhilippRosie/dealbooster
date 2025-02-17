"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { barlowCondensed, oswald } from "../../layout";
import Image from "next/image";
import Link from "next/link";
import dealboosterLogo from "../../../app/assets/images/header/dealboosterLogo.png";
import dealboosterLogoSmall from "../../../app/assets/images/header/dealboosterLogoSmall.png";
import Modal from "../kalkylatormodal/Modal";
import Kalkylator from "../kalkylator/Kalkylator";
import logoBG from "../../../app/assets/images/header/dealboosterLogoSmall.png";
import logoWhite from "../../../app/assets/images/header/dealboosterLogoWhite.png";
import SocialmediaIcons from "../socialmediaicons/SocialmediaIcons";
export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname !== "/";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        setIsVisible(true);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
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
        <Link href="/" className={styles.logoWhite}>
          <Image
            src={isHomePage ? dealboosterLogoSmall : logoWhite}
            alt="Dealbooster Logo"
            width={isHomePage ? 80 : 75}
          />
          
        </Link>
    
        

        {isHomePage && (
          <>
            <button
              onClick={toggleModal}
              className={`${styles.kalkylatorButton} ${
                isScrolled ? styles.scrolledButton : ""
              } ${oswald.className}`}
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
                Föreningar
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

        <button onClick={toggleMenu} className={styles.burgerButton}>
          ☰
        </button>

        <nav className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <Image src={logoBG} alt="Close" className={styles.logoBG} />
          <button onClick={toggleMenu} className={styles.closeButton}>
            ✖
          </button>
          <ul>
            <li>
              <Link href="/partner" className={oswald.className} onClick={closeMenu}>
                Föreningar
              </Link>
            </li>
            <li>
              <Link href="/hjartefragor" className={oswald.className} onClick={closeMenu}>
                Hjärtefrågor
              </Link>
            </li>
            <li>
              <Link href="/sajobbarvi" className={oswald.className} onClick={closeMenu}>
                Så Jobbar Vi
              </Link>
            </li>
            <li>
              <Link href="/vemarvi" className={oswald.className} onClick={closeMenu}>
                Vem är vi?
              </Link>
            </li>
          </ul>
          <div className={styles.socialMediaIconsContainer}>
            <SocialmediaIcons />
          </div>
        </nav>
        <div className={styles.contactButtonContainer}>
        
        <Link
          href="/kontaktaoss"
          className={`${styles.contactButton} ${oswald.className} ${
            isScrolled ? styles.scrolledButton : ""
          }`}
        >
          Kontakta Oss
        </Link>
        </div>
      </header>

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <Kalkylator />
        </Modal>
      )}
    </>
  );
}
