import styles from "./Home.module.scss";
import { Counter2 } from "../../components/counter/Counter2";
import homeBanner from "../../assets/homeBackground.webp";
import { InfosPage } from "../infos/InfosPage";

export const Home = () => {
  return (
    <div>
      <div className={styles.homeBanner}>
        <img className={styles.img} src={homeBanner} />
        <div className={styles.overlay}>
          <OverlayContent />
        </div>
      </div>
      <div className={styles.mobileOverlay}>
        <OverlayContent />
      </div>
      <InfosPage />
    </div>
  );
};

const OverlayContent = () => {
  return (
    <div className={styles.overlayContent}>
      <span className={styles.title}>Hélène & Kévin</span>
      <Counter2 />
      <button className={styles.rsvp}>RSVP</button>
    </div>
  );
};
