import styles from "./Counter2.module.scss";
import { calculateTimeRemaining } from "./counter.utils";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";

const initialDate = DateTime.fromISO("2025-07-26T14:00:00");

export const Counter2 = () => {
  const [remainingTime, setRemainingTime] = useState(
    calculateTimeRemaining(initialDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateTimeRemaining(initialDate));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [setRemainingTime]);
  return (
    <div className={styles.counterContainer}>
      <CounterItem count={remainingTime.months} label="mois" />
      <div className={styles.counterItemCount}>:</div>
      <CounterItem count={remainingTime.weeks} label="semaines" />
      <div className={styles.counterItemCount}>:</div>
      <CounterItem count={remainingTime.days} label="jours" />
      <div className={`${styles.counterItemCount} ${styles.desktopOnly}`}>
        :
      </div>
      <CounterItem count={remainingTime.hours} label="heures" isDesktopOnly />
      <div className={(styles.counterItemCount, styles.desktopOnly)}>:</div>
      <CounterItem
        count={remainingTime.minutes}
        label="minutes"
        isDesktopOnly
      />
    </div>
  );
};

const CounterItem = ({
  count,
  label,
  isDesktopOnly,
}: {
  count: number;
  label: string;
  isDesktopOnly?: boolean;
}) => {
  const countLabel = count < 10 ? `0${count}` : count;

  return (
    <div
      className={`${styles.counterItemContainer} ${
        isDesktopOnly ? styles.desktopOnly : ""
      }`}
    >
      <span className={styles.counterItemCount}>{countLabel}</span>
      <span className={styles.counterItemLabel}>{label}</span>
    </div>
  );
};
