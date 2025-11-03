import styles from "./page.module.css";
import Image from "next/image";
import { oswald, barlowCondensed } from "../layout";

import bayb from '../assets/images/partner/samarbetspartners/bayb_logo_white.png'
import bikbok from '../assets/images/partner/samarbetspartners/bikbok.png'
import burgerking from '../assets/images/partner/samarbetspartners/burgerking.png'
import carlings from '../assets/images/partner/samarbetspartners/carlings.png'
import coop from '../assets/images/partner/samarbetspartners/Coop.png'
import ICA from '../assets/images/partner/samarbetspartners/ICA.png'
import inlandet from '../assets/images/partner/samarbetspartners/inlandet.png'
import jula from '../assets/images/partner/samarbetspartners/Jula.png'
import jumpYard from '../assets/images/partner/samarbetspartners/jumpyard.png'
import nikitaHair from '../assets/images/partner/samarbetspartners/nikitaHair.png'
import nordicwellness from '../assets/images/partner/samarbetspartners/nordicwellness.png'
import patchesNPins from '../assets/images/partner/samarbetspartners/PatchesPins.png'
import pizzahut from '../assets/images/partner/samarbetspartners/pizzahut.png'
import scorett from '../assets/images/partner/samarbetspartners/scorett.png'
import sushiYama from '../assets/images/partner/samarbetspartners/sushiyama.png'
import sveavaccin from '../assets/images/partner/samarbetspartners/sveavaccin.png'
import synsam from '../assets/images/partner/samarbetspartners/synsam.png'
import theLocalStore from '../assets/images/partner/samarbetspartners/TheLocalStore.png'
import vila from '../assets/images/partner/samarbetspartners/vila.png'
import wanyes from '../assets/images/partner/samarbetspartners/wanyes.png'


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
              <Image className={styles.foreningImage} src={bayb} alt="Be at your best" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>BE@YOURBEST</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={bikbok} alt="Bikbok" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Bikbok</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={burgerking} alt="Burger King" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Burger King</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={carlings} alt="Carlings" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Carlings</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={coop} alt="Coop" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Coop</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={ICA} alt="ICA" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>ICA</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={inlandet} alt="Inlandet" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Inlandet</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={jula} alt="Jula" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Jula</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={jumpYard} alt="Jump Yard" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>JumpYard</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={nikitaHair} alt="Nikita Hair" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Nikita Hair</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={nordicwellness} alt="Nordic Wellness" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Nordic Wellness</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={patchesNPins} alt="Patches & Pins" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Patches & Pins</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={pizzahut} alt="Pizza Hut" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Pizza Hut</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={scorett} alt="Scorett" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Scorett</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={sushiYama} alt="Sushi Yama" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Sushi Yama</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={sveavaccin} alt="Svea Vaccin" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Svea Vaccin</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={synsam} alt="Synsam" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Synsam</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={theLocalStore} alt="The Local Store" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>The Local Store</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={vila} alt="Vila Clothes" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Vila Clothes</div>
              </div>
            </div>
            <div className={styles.foreningBox}>
              <Image className={styles.foreningImage} src={wanyes} alt="Wanyes Coffee" />
              <div className={styles.foreningOverlay}>
                <div className={`${styles.foreningOverlayText} ${barlowCondensed.className}`}>Wanyes Coffee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

