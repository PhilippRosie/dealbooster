'use client'
import { useState } from 'react';
import styles from './CookiePopup.module.css';
import { oswald, barlowCondensed } from '../../layout';

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    document.cookie = "cookiesAccepted=true; path=/; max-age=31536000";
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.cookiePopup}>
      <p className={oswald.className}>
        Vi använder cookies för att förbättra din upplevelse. Läs vår 
        <a href="/cookiePolicy" target="_blank" rel="noopener noreferrer"> cookiepolicy</a>.
      </p>
      <div className={styles.buttonContainer}>
        <button className={oswald.className} onClick={handleAccept}>Acceptera</button>
        <button className={oswald.className} onClick={handleDecline}>Acceptera inte</button>
      </div>
    </div>
  );
};

export default CookiePopup;
