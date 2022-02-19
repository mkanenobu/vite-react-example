import { useState } from "react";
import { useInterval } from "./interval-helper";

export const useDate = (intervalMs: number) => {
  const [date, setDate] = useState(new Date());

  useInterval(() => {
    setDate(new Date());
  }, intervalMs);

  return date;
};
