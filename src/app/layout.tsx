import "./globals.css";
import { Oswald, Barlow_Condensed } from "next/font/google";
import styles from "./layout.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
