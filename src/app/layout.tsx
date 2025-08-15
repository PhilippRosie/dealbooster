import "./globals.css";
import styles from "./layout.module.css";
import { Oswald, Barlow_Condensed } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SocialMediaIcons from "./components/socialmediaicons/SocialmediaIcons";
import CookiePopup from "./components/cookiepopup/cookiePopup";
import PageButtons from "./components/PageButtons";

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Testing update:", new Date().toISOString());
  return (
    <html lang="sv">
      <body>
        <Header />
        <main>{children}</main>
        <div className={styles.socialMediaIconsContainer}><SocialMediaIcons /></div>
        <PageButtons />
        <Footer />
        <CookiePopup />
      </body>
    </html>
  );
}
