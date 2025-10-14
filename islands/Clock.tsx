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

  const formatter = new Intl.DateTimeFormat("en-US", {
    ...timeOptions,
    timeZone: "UTC",
  });
  const utcTime = formatter.format(now.value);
  const currentLocalTime = now.value.toLocaleString("en-US", timeOptions);
  const deltaFromUTC = now.value.getTimezoneOffset() / -60;

  return (
    <span>
      {currentLocalTime}{" "}
      ({"UTC" + (deltaFromUTC >= 0 ? "+" : "") + deltaFromUTC})
    </span>
  );
}
