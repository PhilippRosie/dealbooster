import styles from "./page.module.css";

import { oswald, barlowCondensed } from "../layout";



const CookiePolicy = () => {
  return (
    <div className={styles.cookiePolicyPage}>
         <main
        className={styles.mainCookiePolicy}
      >
      <h1 className={`${oswald.className} ${styles.cookiePolicyTitle}`}>Cookie Policy</h1>
      <div className={`${styles.cookiePolicyTextContainer} ${barlowCondensed.className}`}>
      <p className={`${barlowCondensed.className} ${styles.cookiePolicyText}`}>
        Denna cookiepolicy förklarar hur vi använder cookies och liknande teknologier på vår webbplats.
      </p>
      <h2>Vad är cookies?</h2>
      <p className={`${barlowCondensed.className} ${styles.cookiePolicyTextContent}`}>
        Cookies är små textfiler som lagras på din enhet när du besöker en webbplats. De används för att förbättra din upplevelse genom att komma ihåg dina preferenser och besöksinformation.
      </p>
      <h2>Vilka typer av cookies använder vi?</h2>
      <ul>
        <li><strong>Nödvändiga cookies:</strong> Dessa cookies är avgörande för att webbplatsen ska fungera korrekt.</li>
        <li><strong>Analytiska cookies:</strong> Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen genom att samla in anonym information.</li>
        <li><strong>Funktionella cookies:</strong> Dessa cookies gör det möjligt för webbplatsen att komma ihåg dina val (t.ex. språk eller region).</li>
      </ul>
      <h2>Hur kan du hantera cookies?</h2>
      <p className={`${barlowCondensed.className} ${styles.cookiePolicyTextContent}`}>
        Du kan hantera cookies genom att ändra inställningarna i din webbläsare. Observera att om du inaktiverar cookies kan vissa funktioner på vår webbplats påverkas.
      </p>
      <h2>Kontakta oss</h2>
      <p className={`${barlowCondensed.className} ${styles.cookiePolicyTextContent}`}>
        Om du har frågor om vår användning av cookies, vänligen kontakta oss. Vår kontakt information hittar du <a href="/kontaktaoss"><u>HÄR</u></a>.
      </p>
      </div>
      </main>
    </div>
  );
};

export default CookiePolicy;
