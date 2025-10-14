import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function useNow(updateMs = 1000) {
  const now = useSignal(new Date());

  useEffect(() => {
    const t = setInterval(() => {
      now.value = new Date();
    }, updateMs);

    return () => clearInterval(t);
  }, [updateMs]);

  return now;
}
