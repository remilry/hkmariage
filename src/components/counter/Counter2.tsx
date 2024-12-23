import styled from "@emotion/styled";
import { calculateTimeRemaining } from "./counter.utils";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";

const initialDate = DateTime.fromISO("2024-12-23T14:00:00");

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
    <CounterContainer>
      <CounterItem count={remainingTime.months} label="mois" />
      <CounterItemCount>:</CounterItemCount>
      <CounterItem count={remainingTime.weeks} label="semaines" />
      <CounterItemCount>:</CounterItemCount>
      <CounterItem count={remainingTime.days} label="jours" />
      <CounterItemCount>:</CounterItemCount>
      <CounterItem count={remainingTime.hours} label="heures" />
      <CounterItemCount>:</CounterItemCount>
      <CounterItem count={remainingTime.minutes} label="minutes" />
    </CounterContainer>
  );
};

const CounterItem = ({ count, label }: { count: number; label: string }) => {
  const countLabel = count < 10 ? `0${count}` : count;

  return (
    <CounterItemContainer>
      <CounterItemCount>{countLabel}</CounterItemCount>
      <CounterItemLabel>{label}</CounterItemLabel>
    </CounterItemContainer>
  );
};

const CounterContainer = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: row;
`;

const CounterItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CounterItemCount = styled.span`
  font-size: 3rem;
  color: white;
  display: flex;
  justify-content: center;
`;

const CounterItemLabel = styled.span`
  font-size: 2rem;
  color: white;
`;
