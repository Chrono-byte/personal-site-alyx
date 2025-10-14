import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

const timeOptions = {
  timeZone: "America/Indiana/Indianapolis",
  hour12: false,
  timeStyle: "medium" as const,
};

export default function Clock() {
  const now = useSignal(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      now.value = new Date();
    }, 1000);

    return () => clearInterval(timer);
  }, []); // empty dependency so it runs once

  const currentLocalTime = now.value.toLocaleTimeString("en-US", timeOptions);

  // Calculate UTC offset for Indiana/Indianapolis (Eastern Time)
  const isDST = now.value.toLocaleString("en-US", {
    timeZone: "America/Indiana/Indianapolis",
    timeZoneName: "short",
  }).includes("EDT");
  const deltaFromUTC = isDST ? -4 : -5;

  return (
    <time
      dateTime={now.value.toISOString()}
      aria-label={`Current time in Indiana: ${currentLocalTime} UTC${deltaFromUTC >= 0 ? "+" : ""}${deltaFromUTC}`}
    >
      {currentLocalTime}{" "}
      ({"UTC" + (deltaFromUTC >= 0 ? "+" : "") + deltaFromUTC})
    </time>
  );
}
