import { useEffect, useLayoutEffect, useRef } from "react";

export const useInterval = (cb: () => void, intervalMs: number) => {
  const savedCallback = useRef(cb);

  // Remember the latest callback if it changes.
  useLayoutEffect(() => {
    savedCallback.current = cb;
  }, [cb]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!intervalMs && intervalMs !== 0) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), intervalMs);

    return () => clearInterval(id);
  }, [intervalMs]);
};
