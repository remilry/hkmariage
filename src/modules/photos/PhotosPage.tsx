import styles from "./PhotoPage.module.scss";
import appleStoreDownloadImage from "../../assets/downloadAppStore.webp";
import googlePlayDownloadImage from "../../assets/downloadPlayStore.webp";
import QRCodeImage from "../../assets/QRCode.webp";
import wedshootAppImg from "../../assets/wedshootApp.webp";

export const PhotosPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {"Retrouvez les photos du mariage et partagez\u00A0les\u00A0vôtres !"}
      </h1>
      <div className={styles.contentContainer}>
        <img
          className={styles.webshootsImage}
          src={wedshootAppImg}
          alt="Wedshoots App"
        />
        <div className={styles.textContainer}>
          <p>
            Téléchargez l'application <b>Webshoots</b>
          </p>
          <div className={styles.downloadButtonsContainer}>
            <a
              href="https://app.appsflyer.com/id660256196?pid=WP-iOS-FR&c=WP-FR-LANDINGS&s=fr"
              target="_blank"
            >
              <img
                className={styles.downloadButton}
                src={appleStoreDownloadImage}
                alt="bouton téléchargement apple store"
              />
            </a>
            <a
              href="https://app.appsflyer.com/net.bodas.android.wedshoots?pid=WP-Android-FR&c=WP-FR-LANDINGS"
              target="_blank"
            >
              <img
                className={styles.downloadButton}
                src={googlePlayDownloadImage}
                alt="bouton téléchargement google play"
              />
            </a>
          </div>
          <p className={styles.webText}>
            Ouvrez Wedshoots, ajoutez votre prénom et scannez ce QR Code.
          </p>
          <p className={styles.mobileText}>
            Ouvrez Wedshoots, ajoutez votre prénom et insérez le code
            <br />
            <b>FR4b02f574</b>
          </p>
          <div className={styles.codeContainer}>
            <img className={styles.QRCode} src={QRCodeImage} alt="QR Code" />
            <p>
              Vous pouvez aussi l'insérer manuellement.
              <br />
              <b>FR4b02f574</b>
            </p>
          </div>
          <p>
            <b>Profitez-en et publiez plein de photos 🎉</b>
          </p>
        </div>
      </div>
    </div>
  );
};
