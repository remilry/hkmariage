import styled from "@emotion/styled";
import styles from "./InfosPages.module.scss";
export const InfosPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Le planning</h1>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          flex: 1,
        }}
      >
        <div className={styles.leftColumn}>
          <h3>Mariage civil</h3>
          <span>10h - Marie d'Auzat-la-Combelle</span>
          <br />
          <span>12 Pl. du Coudert, 63570 Auzat-la-Combelle</span>
        </div>
        <div className={styles.middleColumn}>
          <Round />
          <Line />
        </div>
        <div className={styles.rightColumn}></div>
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          flex: 1,
        }}
      >
        <div className={styles.leftColumn}></div>
        <div className={styles.middleColumn}>
          <Round />
          <Line />
        </div>
        <div className={styles.rightColumn}>
          <h3>Mariage regilieux</h3>
          <span>11h30 - Abbatiale Saint-Austremoine d'Issoire</span>
          <br />
          <span>63500 Pl. Saint-Paul, 63500 Issoire</span>
        </div>
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          flex: 1,
        }}
      >
        <div className={styles.leftColumn}>
          <h3>Vin d'honneur</h3>
          <span>14h30 - Le clos du fort</span>
          <br />
          <span>2 Rue du Château, 63340 Collanges</span>
        </div>
        <div className={styles.middleColumn}>
          <Round />
          <Line />
        </div>
        <div className={styles.rightColumn}></div>
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          flex: 1,
        }}
      >
        <div className={styles.leftColumn}></div>
        <div className={styles.middleColumn}>
          <Round />
          <Line />
          <Round />
        </div>
        <div className={styles.rightColumn}>
          <h3>Soirée</h3>
          <span>19h - Le clos du fort</span>
          <br />
          <span>2 Rue du Château, 63340 Collanges</span>
        </div>
      </div>
    </div>
  );
};

const Round = styled.div({
  backgroundColor: "transparent",
  width: 5,
  height: 5,
  borderRadius: 999,
  border: "2px solid black",
});

const Line = styled.div({
  backgroundColor: "black",
  width: 2,
  minHeight: 150,
  height: "100%",
});
