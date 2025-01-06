import styled from "@emotion/styled";
import styles from "./InfosPages.module.scss";
import { useMemo } from "react";
export const InfosPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Le planning</h1>
      <Step
        side="left"
        title="Cérémonie civile"
        body1="14h - Marie d'Auzat-la-Combelle"
        body2="12 Pl. du Coudert, 63570 Auzat-la-Combelle"
      />
      <Step
        side="right"
        title="Cérémonie religieuse"
        body1="16h - Abbatiale Saint-Austremoine d'Issoire"
        body2="Pl. Saint-Paul, 63500 Issoire"
      />
      <Step
        side="left"
        title="Cortège"
        body1="17h - Départ de l'abbatiale"
        body2="Pl. Saint-Paul, 63500 Issoire"
      />
      <Step
        side="right"
        title="Photos de groupe"
        body1="17h30 - Le clos du fort"
        body2="2 Rue du Château, 63340 Collanges"
      />
      <Step
        side="left"
        title="Vin d'honneur"
        body1="18h - Le clos du fort"
        body2="2 Rue du Château, 63340 Collanges"
      />
      <Step
        side="right"
        title="Soirée"
        body1="20h - Le clos du fort"
        body2="2 Rue du Château, 63340 Collanges"
        end
      />
    </div>
  );
};

const Step = ({
  side,
  title,
  body1,
  body2,
  end,
}: {
  side: "left" | "right";
  title: string;
  body1: string;
  body2?: string;
  end?: boolean;
}) => {
  const content = useMemo(
    () => (
      <>
        <h3>{title}</h3>
        <span>{body1}</span>
        <br />
        <span>{body2}</span>
      </>
    ),
    [title, body1, body2]
  );

  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        flex: 1,
      }}
    >
      <div className={styles.leftColumn}>{side === "left" && content}</div>
      <div className={styles.middleColumn}>
        <Round />
        <Line />
        {end && <Round />}
      </div>
      <div className={styles.rightColumn}>{side === "right" && content}</div>
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
