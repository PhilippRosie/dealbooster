"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { barlowCondensed, oswald } from "../../layout";
import Image from "next/image";
import Link from "next/link";
import headerLogo from "../../../app/assets/images/header/dealboosterLogoCircleWhite.png";
import Modal from "../kalkylatormodal/Modal";
import KalkylatorSwitcher from "../kalkylator/KalkylatorSwitcher";
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
            src={headerLogo}
            alt="Dealbooster Logo"
            width={220}
            height={220}
            className={styles.logoImage}
            sizes="(max-width: 1024px) 70px, 96px"
          />
          
        </Link>
        <Link href="/" className={styles.logoWhite}>
          <Image
            src={headerLogo}
            alt="Dealbooster Logo"
            width={140}
            height={140}
            className={styles.logoWhiteImage}
            sizes="(max-width: 425px) 56px, 70px"
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
              <Link href="/varfordealbooster" className={oswald.className}>
                Varför Dealbooster?
              </Link>
              <Link href="/builttoperform" className={oswald.className}>
                Built to Perform
              </Link>
            </nav>
          )}
        </div>

        <button onClick={toggleMenu} className={styles.burgerButton}>
          ☰
        </button>

        <nav className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <Image
            src={headerLogo}
            alt="Dealbooster bakgrundslogga"
            className={styles.logoBG}
            width={700}
            height={700}
            sizes="(max-width: 768px) 90vw, 700px"
          />
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
              <Link
                href="/varfordealbooster"
                className={oswald.className}
                onClick={closeMenu}
              >
                Varför Dealbooster?
              </Link>
            </li>
            <li>
              <Link href="/builttoperform" className={oswald.className} onClick={closeMenu}>
                Built to Perform
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
          <KalkylatorSwitcher />
        </Modal>
      )}
    </>
  );
}
