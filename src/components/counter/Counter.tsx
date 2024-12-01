import styled from "@emotion/styled";
import { calculateTimeRemaining } from "./counter.utils";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";

const initialDate = DateTime.fromISO("2024-12-23T14:00:00");

export const Counter = () => {
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
    <CounterContainer>
      <CounterItem count={remainingTime.months} label="mois" />
      <CounterItem count={remainingTime.weeks} label="semaines" />
      <CounterItem count={remainingTime.days} label="jours" />
      <CounterItem count={remainingTime.hours} label="heures" />
      <CounterItem count={remainingTime.minutes} label="minutes" />
    </CounterContainer>
  );
};

const CounterItem = ({ count, label }: { count: number; label: string }) => {
  return (
    <CounterItemContainer>
      <CounterItemCount>{count}</CounterItemCount>
      <CounterItemLabel>{label}</CounterItemLabel>
    </CounterItemContainer>
  );
};

const CounterContainer = styled.div`
  gap: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CounterItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: RGB(222, 203, 173);
  width: 200px;
  padding: 12px;
  align-items: center;
`;

const CounterItemCount = styled.span`
  font-size: 4rem;
  color: white;
`;

const CounterItemLabel = styled.span`
  font-size: 2rem;
  color: white;
`;
