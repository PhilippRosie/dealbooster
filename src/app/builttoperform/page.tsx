"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import perfomanceGripSocksBlack from "../assets/images/builttoperform/perfomanceGripSocksBlack.png";
import perfomanceGripSocksWhite from "../assets/images/builttoperform/perfomanceGripSocksWhite.png";
import shinGuardsBlack from "../assets/images/builttoperform/shinGuardsBlack.png";
import shinGuardsWhite from "../assets/images/builttoperform/shinGuardsWhite.png";
import sportSocksBlack from "../assets/images/builttoperform/sportSocksBlack.png";
import sportSocksWhite from "../assets/images/builttoperform/sportSocksWhite.png";
import sneakerSocksBlack from "../assets/images/builttoperform/sneakerSocksBlack.png";
import sneakerSocksWhite from "../assets/images/builttoperform/sneakerSocksWhite.png";
import produktBilderB2P1 from "../assets/images/builttoperform/produktBilderB2P1.png";
import produktBilderB2P2 from "../assets/images/builttoperform/produktBilderB2P2.png";

import { barlowCondensed, oswald } from "../layout";

export default function BuiltToPerform() {
  const [isVideoOpen, setIsVideoOpen] = useState(true);
  const [isVideoClosing, setIsVideoClosing] = useState(false);

  useEffect(() => {
    setIsVideoOpen(true);
    setIsVideoClosing(false);
  }, []);

  const closeVideo = () => {
    setIsVideoClosing(true);
    window.setTimeout(() => setIsVideoOpen(false), 500);
  };

  return (
    <div className={styles.builttoperformPage}>
      <main className={`${styles.mainBuilttoperform} ${barlowCondensed.className}`}>
        {isVideoOpen && (
          <div
            className={`${styles.videoModal} ${isVideoClosing ? styles.videoModalClosing : ""}`}
            role="dialog"
            aria-modal="true"
          >
            <button
              className={styles.videoBackdrop}
              onClick={closeVideo}
              aria-label="Stäng video"
              type="button"
            />
            <div className={styles.videoDialog}>
              <button
                className={styles.videoClose}
                onClick={closeVideo}
                type="button"
              >
                ✕
              </button>
              <video
                className={styles.videoPlayer}
                src="/builttoperform/builtToPerformPromo.mp4"
                autoPlay
                muted
                playsInline
                controls
                onEnded={closeVideo}
              />
            </div>
          </div>
        )}
        <section className={styles.hero}>
          <h2 className={`${styles.builttoperformTextTitle} ${oswald.className}`}>
            Produkter som föreningen faktiskt vill sälja
          </h2>
          <p className={`${styles.heroSubtitle} ${barlowCondensed.className}`}>
            Built 2 Perform är framtaget för föreningar som vill skapa intäkter
            genom produkter som känns moderna, användbara och enkla att sälja.
          </p>
          <Link href="/kontaktaoss" className={`${styles.ctaButton} ${oswald.className}`}>
            Kom igång idag
          </Link>
        </section>

        <section className={styles.builttoperformContent1}>
          <div className={`${styles.builttoperformTextContent1} ${barlowCondensed.className}`}>
            <div className={styles.builttoperformTextContent1Text}>
              <h3 className={oswald.className}>En intäktskälla som faktiskt levererar</h3>
              <p>
                Vi på Dealbooster hjälper föreningar att skapa stabila intäkter
                utan krångel och utan risk.
              </p>
              <p>
                Med Built 2 Perform får föreningen tillgång till stilrena
                sportprodukter som medlemmar, föräldrar och supportrar faktiskt
                har användning för.
              </p>
              <p>
                Det gör försäljningen enklare, mer naturlig och betydligt
                roligare.
              </p>
            </div>
            <div className={styles.sectionImageWrapper}>
              <Image
                className={styles.sectionImage}
                src={produktBilderB2P1}
                alt="Built 2 Perform produktbild"
                width={420}
                height={320}
                loading="lazy"
                sizes="(max-width: 768px) 80vw, 420px"
              />
            </div>
          </div>
        </section>

        <section className={styles.builttoperformContent2}>
          <div className={styles.sectionHeading}>
            <h3 className={oswald.className}>Varför Built 2 Perform?</h3>
          </div>
          <div className={styles.cardGrid}>
            <div className={styles.infoCard}>
              <h4 className={oswald.className}>Enkelt att sälja</h4>
              <p>Produkterna är tydliga, användbara och lätta att förstå direkt.</p>
            </div>
            <div className={styles.infoCard}>
              <h4 className={oswald.className}>Användbart för många</h4>
              <p>
                Strumpor och benskydd passar både aktiva spelare, ungdomar,
                föräldrar och supportrar.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h4 className={oswald.className}>Snyggt och modernt</h4>
              <p>
                Designen är stilren, sportig och känns mer premium än klassiska
                föreningsprodukter.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h4 className={oswald.className}>Bygger lagkassan</h4>
              <p>
                Varje såld produkt hjälper föreningen närmare sina mål – cuper,
                träningsläger, utrustning eller nya matchställ.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.builttoperformContent2}>
          <div className={styles.sectionHeading}>
            <h3 className={oswald.className}>Produkterna</h3>
            <p className={barlowCondensed.className}>
              Ett sortiment framtaget för att vara enkelt att sälja, självklart
              att använda och lätt att tycka om.
            </p>
          </div>
          <div className={styles.productGrid}>
            <div className={styles.productCard}>
              <div className={styles.productImageRow}>
                <div className={styles.productImageWrapper}>
                  <Image
                    className={styles.productImage}
                    src={perfomanceGripSocksBlack}
                    alt="Performance Grip Socks svart"
                    width={220}
                    height={220}
                    loading="lazy"
                    sizes="(max-width: 768px) 45vw, 220px"
                  />
                </div>
                <div className={styles.productImageWrapper}>
                  <Image
                    className={styles.productImage}
                    src={perfomanceGripSocksWhite}
                    alt="Performance Grip Socks vit"
                    width={220}
                    height={220}
                    loading="lazy"
                    sizes="(max-width: 768px) 45vw, 220px"
                  />
                </div>
              </div>
              <h4 className={oswald.className}>Performance Grip Socks</h4>
              <p>
                Maximal kontroll i varje steg. Grepp där det behövs och komfort
                hela vägen. Utvecklade för prestation – utan kompromisser.
              </p>
              <ul className={styles.productFeatures}>
                <li className={styles.productFeatureTitle}>Egenskaper</li>
                <li>Riktad akilleshäl för stabilitet.</li>
                <li>B2P‑grepp med förbättrat fäste som hjälper mot blåsor.</li>
                <li>Graduerad kompression som förbättrar cirkulationen.</li>
                <li>Fukttransporterande material för komfort hela dagen.</li>
                <li>Grepp där du behöver det – konstruerad för prestation.</li>
                <li className={styles.productFeatureTitle}>Material</li>
                <li>43% bomull för mjuk komfort hela dagen.</li>
                <li>22% elastan för hög elasticitet.</li>
                <li>25% nylon för långvarig prestanda.</li>
                <li>10% polyester för snabbtorkande material.</li>
              </ul>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productImageRow}>
                <div className={styles.productImageWrapper}>
                  <Image
                    className={styles.productImage}
                    src={shinGuardsBlack}
                    alt="Shin Guards svarta"
                    width={220}
                    height={220}
                    loading="lazy"
                    sizes="(max-width: 768px) 45vw, 220px"
                  />
                </div>
                <div className={styles.productImageWrapper}>
                  <Image
                    className={styles.productImage}
                    src={shinGuardsWhite}
                    alt="Shin Guards vita"
                    width={220}
                    height={220}
                    loading="lazy"
                    sizes="(max-width: 768px) 45vw, 220px"
                  />
                </div>
              </div>
              <h4 className={oswald.className}>Shin Guards</h4>
              <p>
                Lätta, följsamma och gjorda för att sitta där de ska. En
                avskalad design med exakt den funktion spelaren behöver.
              </p>
              <ul className={styles.productFeatures}>
                <li className={styles.productFeatureTitle}>Egenskaper</li>
                <li>Impact protection: Hex-skydd med stötdämpande EVA‑foam.</li>
                <li>Secure fit: Låst stabilitet som sitter säkert.</li>
                <li>Lightweight design: Skydd utan bulk.</li>
                <li>Comfort &amp; flexibility: Rör dig fritt, spela orädd.</li>
                <li>Skydd där du behöver det – frihet i varje rörelse.</li>
                <li>Byggt för prestation – utan kompromisser.</li>
                <li className={styles.productFeatureTitle}>Material</li>
                <li>85% polyamid för slitstyrka, lätt känsla, ventilation &amp; komfort.</li>
                <li>15% spandex för stretch, flexibilitet &amp; säker passform.</li>
                <li>EVA‑foam för stötdämpning och skydd.</li>
              </ul>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productImageRow}>
                <div className={styles.productImageWrapper}>
                  <Image
                    className={styles.productImage}
                    src={sportSocksBlack}
                    alt="Premium Sportstrumpor svarta"
                    width={220}
                    height={220}
                    loading="lazy"
                    sizes="(max-width: 768px) 45vw, 220px"
                  />
                </div>
                <div className={styles.productImageWrapper}>
                  <Image
                    className={styles.productImage}
                    src={sportSocksWhite}
                    alt="Premium Sportstrumpor vita"
                    width={220}
                    height={220}
                    loading="lazy"
                    sizes="(max-width: 768px) 45vw, 220px"
                  />
                </div>
              </div>
              <h4 className={oswald.className}>Premium Sportstrumpor</h4>
              <p>
                Ren design, hög kvalitet och en känsla som märks direkt.
                Slitstarka nog för träning och stilrena nog för vardagen.
              </p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productImageRow}>
                <div className={styles.productImageWrapper}>
                  <Image
                    className={styles.productImage}
                    src={sneakerSocksBlack}
                    alt="Sneakerstrumpor svarta"
                    width={220}
                    height={220}
                    loading="lazy"
                    sizes="(max-width: 768px) 45vw, 220px"
                  />
                </div>
                <div className={styles.productImageWrapper}>
                  <Image
                    className={styles.productImage}
                    src={sneakerSocksWhite}
                    alt="Sneakerstrumpor vita"
                    width={220}
                    height={220}
                    loading="lazy"
                    sizes="(max-width: 768px) 45vw, 220px"
                  />
                </div>
              </div>
              <h4 className={oswald.className}>Sneakerstrumpor</h4>
              <p>
                Diskreta, bekväma och gjorda för vardagen. Perfekt passform,
                varje gång.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.builttoperformContent2}>
          <div className={styles.sectionHeading}>
            <h3 className={oswald.className}>Så fungerar försäljningen</h3>
          </div>
          <div className={styles.stepGrid}>
            <div className={styles.infoCard}>
              <h4 className={oswald.className}>Föreningen får material</h4>
              <p>
                Vi hjälper er med tydligt säljmaterial, produktinformation och
                orderunderlag.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h4 className={oswald.className}>Medlemmarna säljer</h4>
              <p>
                Spelare och medlemmar säljer produkterna till familj, vänner,
                kollegor och supportrar.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h4 className={oswald.className}>Beställningar samlas in</h4>
              <p>
                Orderlistan gör det enkelt att samla namn, kontaktuppgifter,
                storlekar och produkter.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h4 className={oswald.className}>Föreningen tjänar pengar</h4>
              <p>
                Försäljningen blir en konkret intäktskälla som stärker
                lagkassan.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.builttoperformContent1}>
          <div className={`${styles.builttoperformTextContent1} ${barlowCondensed.className}`}>
            <div className={styles.sectionImageWrapper}>
              <Image
                className={styles.sectionImage}
                src={produktBilderB2P2}
                alt="Built 2 Perform i spelmiljö"
                width={420}
                height={320}
                loading="lazy"
                sizes="(max-width: 768px) 80vw, 420px"
              />
            </div>
            <div className={styles.builttoperformTextContent1Text}>
              <h3 className={oswald.className}>
                Perfekt för föreningar som vill sälja något mer attraktivt
              </h3>
              <p>
                Istället för produkter som känns svåra att sälja får föreningen
                ett sortiment som människor faktiskt behöver.
              </p>
              <p>
                Sportstrumpor, grip socks, sneakerstrumpor och benskydd är
                produkter som används på riktigt – både på planen, i hallen och
                i vardagen.
              </p>
              <p>
                När produkterna känns relevanta blir försäljningen enklare, och
                när försäljningen blir enklare ökar resultaten.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.builttoperformContent2}>
          <div className={`${styles.builttoperformTextContent2} ${barlowCondensed.className}`}>
            <div className={styles.builttoperformTextContent2Text}>
              <h3>Vill ni börja sälja Built 2 Perform i er förening?</h3>
              <p>
                Vi hjälper er att komma igång med upplägg, material och
                försäljning så att ni kan fokusera på det viktigaste – att
                bygga en starkare lagkassa.
              </p>
              <Link
                href="/kontaktaoss"
                className={`${styles.ctaButton} ${oswald.className}`}
              >
                Kontakta oss
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
