import styles from "./page.module.css";
import pagesBG from "../assets/images/pagesBG/pagesBG.png";
import Image from "next/image";

import borstahusen from '../assets/images/partner/Borstahusen-png.png'
import brommapojkarna from '../assets/images/partner/Brommapojkarna-png.png'
import djurgårdensHockey from '../assets/images/partner/Djurgårdens-Hockey-png.png'
import djurgårdensIfUngdom from '../assets/images/partner/DjurgårdensIF-Ungdom-png.png'
import dösjebro from '../assets/images/partner/Dösjebro-png.png'
import fagerstaSödra from '../assets/images/partner/Fagersta-Södra-png.png'
import grums from '../assets/images/partner/Grums-png.png'
import gustavsberg from '../assets/images/partner/Gustavsberg-png.png'
import hammarbyhandboll from '../assets/images/partner/Hammarby-Handboll.png'
import hammarby from '../assets/images/partner/Hammarby-png.png'
import heffnersklubbans from '../assets/images/partner/HeffnersKlubbans.png'
import hertzöga from '../assets/images/partner/Hertzöga.png'
import hässelby from '../assets/images/partner/Hässelby-png.png'
import järla from '../assets/images/partner/Järla-png.png'
import karlstadFBK from '../assets/images/partner/Karlstad-FBK-png.png'
import karlstadNorra from '../assets/images/partner/Karlstad-Norra-png.png'
import kiruna from '../assets/images/partner/Kiruna-png.png'
import kramforsAlliansen from '../assets/images/partner/Kramfors-Alliansen-png.png'
import kungsängen from '../assets/images/partner/Kungsängen-png.png'
import linköpingFriidrott from '../assets/images/partner/Linköping-Friidrott.png'
import linköpingInnebandy from '../assets/images/partner/Linköping-Innebandy.png'
import lucksta from '../assets/images/partner/Lucksta.png'
import mallbacken from '../assets/images/partner/Mallbacken.png'
import munkaLjungby from '../assets/images/partner/Munka-Ljungby-png.png'
import mälarhöjden from '../assets/images/partner/Mälarhöjden-png.png'
import norrköping from '../assets/images/partner/Norrköping-png.png'
import nyland from '../assets/images/partner/Nyland.png'
import nynäshamn from '../assets/images/partner/Nynäshamn-png.png'
import roslagsbro from '../assets/images/partner/Roslagsbro-png.png'
import råtorp from '../assets/images/partner/Råtorp.png'
import sandsbro from '../assets/images/partner/Sandsbro.png'
import sandåkerns from '../assets/images/partner/Sandåkerns-png.png'
import selånger from '../assets/images/partner/Selånger-png.png'
import sollefteå from '../assets/images/partner/Sollefteå-png.png'
import spånga from '../assets/images/partner/Spånga-png.png'
import storvreta from '../assets/images/partner/Storvreta-png.png'
import strömstad from '../assets/images/partner/Strömstad.png'
import stuvsta from '../assets/images/partner/Stuvsta-png.png'
import sundsvallHandboll from '../assets/images/partner/Sundsvall-Handboll-png.png'
import sundsvallIBF from '../assets/images/partner/Sundsvall-IBF-png.png'
import säffle from '../assets/images/partner/Säffle-png.png'
import torsby from '../assets/images/partner/Torsby.png'
import ulricehamn from '../assets/images/partner/Ulricehamn-png.png'
import umeåIBKDalen from '../assets/images/partner/Umeå-IBK-Dalen-png.png'
import värnamo from '../assets/images/partner/Värnamo-png.png'
import växjöNorra from '../assets/images/partner/Växjö-Norra-png.png'
import ystad from '../assets/images/partner/Ystad-png.png'
import älvsjö from '../assets/images/partner/Älvsjö-png.png'
import östersund from '../assets/images/partner/Östersund-png.png'


import {oswald } from "../layout";

export default function Partner() {
  return (
    <div className={styles.partnerPage}>
      <main
        className={styles.mainPartner}
        style={{
          backgroundImage: `url(${pagesBG.src})`,
        }}
      >
        <div className={`${styles.partnerTitle} ${oswald.className}`}>
          <h1></h1>
        </div>
        <div className={styles.partnerForeningar}>
          <div className={styles.partnerForeningarContent}>
            <div className={styles.gridSection}>
              <h2 className={`${styles.sectionTitle} ${oswald.className}`}>
                Föreningar
              </h2>
              <div className={styles.partnerForeningarGrid}>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={hammarby} alt="Hammarby" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={borstahusen} alt="Borstahusen" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={brommapojkarna} alt="Brommapojkarna" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={djurgårdensHockey} alt="Djurgårdens Hockey" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={djurgårdensIfUngdom} alt="Djurgårdens IF Ungdom" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={dösjebro} alt="Dösjebro" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={fagerstaSödra} alt="Fagersta Södra" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={grums} alt="Grums" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={gustavsberg} alt="Gustavsberg" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={hammarbyhandboll} alt="Hammarby Handboll" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={heffnersklubbans} alt="Heffners Klubban" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={hertzöga} alt="Hertzöga" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={hässelby} alt="Hässelby" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={järla} alt="Järla" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={karlstadFBK} alt="Karlstad FBK" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={karlstadNorra} alt="Karlstad Norra" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={kiruna} alt="Kiruna" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={kramforsAlliansen} alt="Kramfors Alliansen" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={kungsängen} alt="Kungsängen" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={linköpingFriidrott} alt="Linköping Friidrott" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={linköpingInnebandy} alt="Linköping Innebandy" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={lucksta} alt="Lucksta" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={mallbacken} alt="Mallbacken" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={munkaLjungby} alt="Munka Ljungby" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={mälarhöjden} alt="Mälarhöjden" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={norrköping} alt="Norrköping" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={nyland} alt="Nyland" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={nynäshamn} alt="Nynäshamn" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={roslagsbro} alt="Roslagsbro" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={råtorp} alt="Råtorp" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={sandsbro} alt="Sandsbro" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={sandåkerns} alt="Sandåkerns" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={selånger} alt="Selånger" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={sollefteå} alt="Sollefteå" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={spånga} alt="Spånga" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={storvreta} alt="Storvreta" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={strömstad} alt="Strömstad" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={stuvsta} alt="Stuvsta" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={sundsvallHandboll} alt="Sundsvall Handboll" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={sundsvallIBF} alt="Sundsvall IBF" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={säffle} alt="Säffle" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={torsby} alt="Torsby" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={ulricehamn} alt="Ulricehamn" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={umeåIBKDalen} alt="Umeå IBK Dalen" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={värnamo} alt="Värnamo" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={växjöNorra} alt="Växjö Norra" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={ystad} alt="Ystad" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={älvsjö} alt="Älvsjö" />
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={östersund} alt="Östersund" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
