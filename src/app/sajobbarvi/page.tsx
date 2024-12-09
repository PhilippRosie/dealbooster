import styles from "./page.module.css";
import pagesBG from "../assets/images/pagesBG/pagesBG.png";
import { barlowCondensed, oswald } from "../layout";

console.log("styles:", styles);

export default function Sajobbarvi() {
  return (
    <div className={styles.sajobbarviPage}>
      <main
        className={styles.mainSajobbarvi}
        style={{
          backgroundImage: `url(${pagesBG.src})`,
        }}
      >
        <div className={`${styles.sajobbarviTitle} ${oswald.className}`}>
          <h1>Så jobbar vi</h1>
        </div>
      </main>
    </div>
  );
}
