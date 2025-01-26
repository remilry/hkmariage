import styles from "./Home.module.scss";
import { Counter2 } from "../../components/counter/Counter2";
import homeBanner from "../../assets/homeBackground.webp";

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
    </div>
  );
};

const OverlayContent = () => {
  return (
    <div className={styles.overlayContent}>
      <span className={styles.title}>Hélène & Kévin</span>
      <Counter2 />
      <a
        className={styles.rsvp}
        href="https://docs.google.com/forms/d/e/1FAIpQLScikf7RMM8mpalBohEjb8-4VQzhWbHWLFB_kXwVU-40DyEmzA/viewform"
        target="_blank"
      >
        RSVP
      </a>
    </div>
  );
};
