import { useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      const interval = setInterval(tick, delay);
      return () => clearInterval(interval);
    }
  }, [delay]);
}
  
export default useInterval