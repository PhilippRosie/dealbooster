import styles from "./page.module.css";
import Image from "next/image";
import { oswald, barlowCondensed } from "../layout";

import abkarlhedin from '../assets/images/partner/samarbetspartners/abkarlhedin.png'
import allstar from '../assets/images/partner/samarbetspartners/allstar.png'
import apoteket from '../assets/images/partner/samarbetspartners/apoteket.png'
import apotekHjärtat from '../assets/images/partner/samarbetspartners/apotekHjärtat.png'
import apotekKronan from '../assets/images/partner/samarbetspartners/apotekKronan.png'
import arkenZoo from '../assets/images/partner/samarbetspartners/arkenZoo.png'
import bayb from '../assets/images/partner/samarbetspartners/bayb_logo_white.png'
import beijerbygg from '../assets/images/partner/samarbetspartners/beijerbygg.png'
import bergströmsSkor from '../assets/images/partner/samarbetspartners/bergstromsskor.png'
import bikbok from '../assets/images/partner/samarbetspartners/bikbok.png'
import brothers from '../assets/images/partner/samarbetspartners/brothers.png'
import burgerking from '../assets/images/partner/samarbetspartners/burgerking.png'
import carlings from '../assets/images/partner/samarbetspartners/carlings.png'
import cervera from '../assets/images/partner/samarbetspartners/cervera.png'
import circleK from '../assets/images/partner/samarbetspartners/circleK.png'
import clarion from '../assets/images/partner/samarbetspartners/clarion.png'
import colorama from '../assets/images/partner/samarbetspartners/colorama.png'
import coop from '../assets/images/partner/samarbetspartners/Coop.png'
import fluggerfarg from '../assets/images/partner/samarbetspartners/fluggerfärg.png'
import friskisochsvettis from '../assets/images/partner/samarbetspartners/friskisochsvettis.png'
import granngarden from '../assets/images/partner/samarbetspartners/granngården.png'
import grekiskaGrillOchBar from '../assets/images/partner/samarbetspartners/grekiskaGrillOchBar.png'
import gulf from '../assets/images/partner/samarbetspartners/Gulf.png'
import hemköp from '../assets/images/partner/samarbetspartners/hemköp.png'
import ICA from '../assets/images/partner/samarbetspartners/ICA.png'
import inlandet from '../assets/images/partner/samarbetspartners/inlandet.png'
import intersport from '../assets/images/partner/samarbetspartners/Intersport.png'
import jula from '../assets/images/partner/samarbetspartners/Jula.png'
import jumpYard from '../assets/images/partner/samarbetspartners/jumpyard.png'
import kappabar from '../assets/images/partner/samarbetspartners/kappabar.png'
import lionbar from '../assets/images/partner/samarbetspartners/lionbar.png'
import mcdonalds from '../assets/images/partner/samarbetspartners/McDonalds.png'
import mekonomen from '../assets/images/partner/samarbetspartners/mekonomen.png'
import MIO from '../assets/images/partner/samarbetspartners/MIO.png'
import nikitaHair from '../assets/images/partner/samarbetspartners/nikitaHair.png'
import nordicwellness from '../assets/images/partner/samarbetspartners/nordicwellness.png'
import nordsjoIdeOchDesign from '../assets/images/partner/samarbetspartners/nordsjoIdeOchDesign.png'
import OKQ8 from '../assets/images/partner/samarbetspartners/OKQ8.png'
import olearys from '../assets/images/partner/samarbetspartners/olearys.png'
import patchesNPins from '../assets/images/partner/samarbetspartners/PatchesPins.png'
import pitchers from '../assets/images/partner/samarbetspartners/pitchers.png'
import pizzahut from '../assets/images/partner/samarbetspartners/pizzahut.png'
import plantagen from '../assets/images/partner/samarbetspartners/plantagen.png'
import preem from '../assets/images/partner/samarbetspartners/preem.png'
import rasta from '../assets/images/partner/samarbetspartners/rasta.png'
import scorett from '../assets/images/partner/samarbetspartners/scorett.png'
import sibylla from '../assets/images/partner/samarbetspartners/sibylla.png'
import stadium from '../assets/images/partner/samarbetspartners/stadium.png'
import STCGym from '../assets/images/partner/samarbetspartners/STCGym.png'
import sushiYama from '../assets/images/partner/samarbetspartners/sushiyama.png'
import sveavaccin from '../assets/images/partner/samarbetspartners/sveavaccin.png'
import synsam from '../assets/images/partner/samarbetspartners/synsam.png'
import teamsportia from '../assets/images/partner/samarbetspartners/teamsportia.png'
import tejpGross from '../assets/images/partner/samarbetspartners/tejpgross.png'
import texaslonghorn from '../assets/images/partner/samarbetspartners/texaslonghorn.png'
import theLocalStore from '../assets/images/partner/samarbetspartners/TheLocalStore.png'
import veromoda from '../assets/images/partner/samarbetspartners/veromoda.png'
import vibes from '../assets/images/partner/samarbetspartners/vibes_helsingborg.png'
import vila from '../assets/images/partner/samarbetspartners/vila.png'
import wanyes from '../assets/images/partner/samarbetspartners/wanyes.png'
import xlbyggfresks from '../assets/images/partner/samarbetspartners/xlbyggfresks.png'
import XXL from '../assets/images/partner/samarbetspartners/XXL.png'
import zooSE from '../assets/images/partner/samarbetspartners/zooSE.png'


export default function Samarbetspartners() {
  return (
    <div className={styles.partnerForeningar}>
      <div className={styles.partnerForeningarContent}>
        <div className={styles.gridSection}>
          <h2 className={`${styles.sectionTitle} ${oswald.className}`}>
            Samarbetspartners
          </h2>
          <div className={styles.partnerForeningarGrid}>
          <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={jumpYard} 
                alt="Jump Yard" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>JumpYard</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={coop} 
                alt="Coop" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Coop</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={nordicwellness} 
                alt="Nordic Wellness" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Nordic Wellness</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={sushiYama} 
                alt="Sushi Yama" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Sushi Yama</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={synsam} 
                alt="Synsam" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Synsam</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={MIO} 
                alt="MIO" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>MIO</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={bayb} 
                alt="Be at your best" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>BE@YOURBEST</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={abkarlhedin} 
                alt="Ab Karl Hedin" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Ab Karl Hedin</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={allstar} 
                alt="Allstar - The Fabulous Sportsbar" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Allstar - The Fabulous Sportsbar</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={apoteket} 
                alt="Apoteket" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Apoteket</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={ICA} 
                alt="ICA" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>ICA</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={apotekHjärtat} 
                alt="Apotek Hjärtat" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Apotek Hjärtat</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={apotekKronan} 
                alt="Apotek Kronan" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Apotek Kronan</div>
              </div>
            </div>
          <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={arkenZoo} 
                alt="Arken Zoo" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Arken Zoo</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={circleK} 
                alt="Circle K" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Circle K</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={beijerbygg} 
                alt="Beijer Byggmaterial" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Beijer Byggmaterial</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={bergströmsSkor} 
                alt="Bergströms Skor" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Bergströms Skor</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={bikbok} 
                alt="Bikbok" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Bikbok</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={brothers} 
                alt="Brothers" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Brothers</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={burgerking} 
                alt="Burger King" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Burger King</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={carlings} 
                alt="Carlings" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Carlings</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={cervera} 
                alt="Cervera" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Cervera</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={clarion} 
                alt="Clarion Hotel" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Clarion Hotel</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={colorama} 
                alt="Colorama" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Colorama</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={fluggerfarg} 
                alt="Flugger Färg" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Flugger Färg</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={friskisochsvettis} 
                alt="Friskis & Svettis" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Friskis & Svettis</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={granngarden} 
                alt="Granngården" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Granngården</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={grekiskaGrillOchBar} 
                alt="Grekiska Grill & Bar" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Grekiska Grill & Bar</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={gulf} 
                alt="Gulf" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Gulf</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={hemköp} 
                alt="Hemköp" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Hemköp</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={inlandet} 
                alt="Inlandet" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Inlandet</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={intersport} 
                alt="Intersport" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Intersport</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={jula} 
                alt="Jula" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Jula</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={kappabar} 
                alt="Kappa Bar" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Kappa Bar</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={lionbar} 
                alt="Lion Bar" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Lion Bar</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={mcdonalds} 
                alt="McDonalds" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>McDonalds</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={mekonomen} 
                alt="Mekonomen" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Mekonomen</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={nikitaHair} 
                alt="Nikita Hair" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Nikita Hair</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={nordsjoIdeOchDesign} 
                alt="Nordsjö Ide & Design" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Nordsjö Ide & Design</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={OKQ8} 
                alt="OKQ8" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>OKQ8</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={olearys} 
                alt="Olearys" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Olearys</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={patchesNPins} 
                alt="Patches & Pins" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Patches & Pins</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={pitchers} 
                alt="Pitchers" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Pitchers</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={pizzahut} 
                alt="Pizza Hut" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Pizza Hut</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={plantagen} 
                alt="Plantagen" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Plantagen</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={preem} 
                alt="Preem" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Preem</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={rasta} 
                alt="Rasta" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Rasta</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={scorett} 
                alt="Scorett" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Scorett</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={sibylla} 
                alt="Sibylla" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Sibylla</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={stadium} 
                alt="Stadium" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Stadium</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={STCGym} 
                alt="STC Gym" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>STC Gym</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={sveavaccin} 
                alt="Svea Vaccin" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Svea Vaccin</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={teamsportia} 
                alt="Team Sportia" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Team Sportia</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={tejpGross} 
                alt="Tejp & Sportgrossisten" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Tejp & Sportgrossisten</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={texaslonghorn} 
                alt="Texas Longhorn" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Texas Longhorn</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={theLocalStore} 
                alt="The Local Store" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>The Local Store</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={veromoda} 
                alt="Vero Moda" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Vero Moda</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={vibes} 
                alt="Vibes Helsingborg" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Vibes Helsingborg</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={vila} 
                alt="Vila Clothes" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Vila Clothes</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={wanyes} 
                alt="Wanyes Coffee" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Wanyes Coffee</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={xlbyggfresks} 
                alt="XL Bygg Fresks" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>XL Bygg Fresks</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={XXL} 
                alt="XXL - Sports unite all" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>XXL - Sports unite all</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image 
                className={styles.foreningImage} 
                src={zooSE} 
                alt="Zoo.se" 
                width={100}
                height={100}
                loading="lazy"
                sizes="(max-width: 425px) 70px, (max-width: 768px) 70px, 100px"
              />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Zoo.se</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

