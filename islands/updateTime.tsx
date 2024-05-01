import { useSignal } from "@preact/signals";
import { useCallback, useEffect } from "preact/hooks";

const timeOptions = {
  timeZone: "America/Indiana/Indianapolis",
  hour12: false,
  timeStyle: "medium" as const,
};

export default function Countdown() {
  const now = useSignal(new Date());

  const updateTime = useCallback(() => {
    now.value = new Date();
  }, [now]);

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [updateTime]);

  const currentLocalTime = now.value.toLocaleString("en-US", timeOptions);
  const currentLocalHours = parseInt(currentLocalTime.split(":")[0]);
  const offsetFromUTC = now.value.getUTCHours() - currentLocalHours;

  return (
    <li>
      {currentLocalTime} ({"UTC-" + offsetFromUTC})
    </li>
  );
}
