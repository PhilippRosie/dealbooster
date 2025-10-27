import styles from "./page.module.css";
import pagesBG1 from "../assets/images/pagesBG/pagesBG1.png";
import DiplomImage from "../assets/images/kontaktaoss/dealbooster-diplom.png";
import Image from "next/image";

import aikHandboll from '../assets/images/partner/AIK-Handboll.png'
import aikInnebandy from '../assets/images/partner/AIK-INNEBANDY.png'
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
import sundsvallHockey from '../assets/images/partner/SundsvallHockey.png'
import sundsvallsDamfotboll from '../assets/images/partner/sundsvalls-dff.png'
import säffle from '../assets/images/partner/Säffle-png.png'
import torsby from '../assets/images/partner/Torsby.png'
import ulricehamn from '../assets/images/partner/Ulricehamn-png.png'
import umeåIBKDalen from '../assets/images/partner/Umeå-IBK-Dalen-png.png'
import värnamo from '../assets/images/partner/Värnamo-png.png'
import växjöNorra from '../assets/images/partner/Växjö-Norra-png.png'
import ystad from '../assets/images/partner/Ystad-png.png'
import älvsjö from '../assets/images/partner/Älvsjö-png.png'
import östersund from '../assets/images/partner/Östersund-png.png'


import {oswald, barlowCondensed } from "../layout";

export default function Partner() {
  return (
    <div className={styles.partnerPage}>
      <main
        className={styles.mainPartner}
        style={{
          backgroundImage: `url(${pagesBG1.src})`,
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
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Hammarby Fotboll</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={aikHandboll} alt="AIK Handboll" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>AIK Handboll</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={aikInnebandy} alt="AIK Innebandy" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>AIK Innebandy</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={sundsvallHockey} alt="Sundsvall Hockey" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Sundsvall Hockey</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={borstahusen} alt="Borstahusen" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Borstahusen BK</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={brommapojkarna} alt="Brommapojkarna" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Brommapojkarna</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={djurgårdensHockey} alt="Djurgårdens Hockey" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Djurgårdens Hockey</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={djurgårdensIfUngdom} alt="Djurgårdens IF Ungdom" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Djurgårdens IF Ungdom</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={dösjebro} alt="Dösjebro" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Dösjebro IF</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={fagerstaSödra} alt="Fagersta Södra" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Fagersta Södra IK</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={grums} alt="Grums" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Grums Fotboll</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={gustavsberg} alt="Gustavsberg" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Gustavsberg IF Fotboll</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={hammarbyhandboll} alt="Hammarby Handboll" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Hammarby Handboll</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={heffnersklubbans} alt="Heffners Klubban" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Heffners Klubbans</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={hertzöga} alt="Hertzöga" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Hertzöga BK</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={hässelby} alt="Hässelby" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Hässelby SK Fotboll</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={järla} alt="Järla" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Järla IF</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={karlstadFBK} alt="Karlstad FBK" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Karlstad FBK</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={karlstadNorra} alt="Karlstad Norra" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Karlstad Norra</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={kiruna} alt="Kiruna" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Kiruna Fotbollförening</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={kramforsAlliansen} alt="Kramfors Alliansen" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Kramfors Alliansen</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={kungsängen} alt="Kungsängen" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Kungsängens Sportklubb</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={linköpingFriidrott} alt="Linköping Friidrott" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Linköping Friidrott</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={linköpingInnebandy} alt="Linköping Innebandy" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Linköping Innebandy</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={lucksta} alt="Lucksta" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Lucksta IF</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={mallbacken} alt="Mallbacken" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Mallbackens IF</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={munkaLjungby} alt="Munka Ljungby" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Munka Ljungby IBK</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={mälarhöjden} alt="Mälarhöjden" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Mälarhöjden IK</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={norrköping} alt="Norrköping" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Norrköpings HK</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={nyland} alt="Nyland" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Nyland IFK</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={nynäshamn} alt="Nynäshamn" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Nynäshamns IF Fotboll</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={roslagsbro} alt="Roslagsbro" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Roslagsbro IF</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={råtorp} alt="Råtorp" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Råtorp IK</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={sandsbro} alt="Sandsbro" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Sandsbro AIK</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={sandåkerns} alt="Sandåkerns" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Sandåkerns SK</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={selånger} alt="Selånger" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Selånger SK Fotboll</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={sollefteå} alt="Sollefteå" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Sollefteå GIF</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={spånga} alt="Spånga" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Spånga/Bromstens Bandyklubb</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={storvreta} alt="Storvreta" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Storvreta Innebandy</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={strömstad} alt="Strömstad" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Strömstad IFK</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={stuvsta} alt="Stuvsta" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Stuvsta IF</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={sundsvallHandboll} alt="Sundsvall Handboll" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Sundsvall Handboll</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={sundsvallIBF} alt="Sundsvall IBF" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Sundsvalls IBF</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={sundsvallsDamfotboll} alt="Sundsvalls Damfotboll" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Sundsvalls Damfotboll</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={säffle} alt="Säffle" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Säffle Sportklubb</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={torsby} alt="Torsby" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Torsby IF</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={ulricehamn} alt="Ulricehamn" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Ulricehamns IFK</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={umeåIBKDalen} alt="Umeå IBK Dalen" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Umeå IBK Dalen</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={värnamo} alt="Värnamo" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Värnamo IFK</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={växjöNorra} alt="Växjö Norra" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Växjö Norra IF</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={ystad} alt="Ystad" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Ystads IF</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={älvsjö} alt="Älvsjö" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Älvsjö AIK Fotboll</div>
                  </div>
                </div>
                <div className={styles.foreningBox}>
                  <Image className={styles.foreningImage} src={östersund} alt="Östersund" />
                  <div className={styles.foreningOverlay}>
                    <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Östersund OPE IF</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image className={styles.diplomImage} src={DiplomImage} alt="Diplom" />
      </main>
    </div>
  );
}
