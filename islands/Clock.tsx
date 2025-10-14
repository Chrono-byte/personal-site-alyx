import { useSignal } from "@preact/signals";
import { useEffect, useMemo } from "preact/hooks";

/**
 * Clock component that displays the current time in Indiana/Indianapolis timezone.
 *
 * Features:
 * - SSR-compatible with proper hydration
 * - Automatic DST detection
 * - Accessible with proper ARIA labels and semantic markup
 * - Updates every second on the client
 * - Error handling for timezone formatting issues
 */

const TIME_ZONE = "America/Indiana/Indianapolis";
const TIME_OPTIONS = {
  timeZone: TIME_ZONE,
  hour12: false,
  timeStyle: "medium" as const,
};

// More robust DST detection using timezone offset comparison
function isDaylightSavingTime(date: Date): boolean {
  const jan = new Date(date.getFullYear(), 0, 1);
  const jul = new Date(date.getFullYear(), 6, 1);
  const stdOffset = Math.max(
    jan.getTimezoneOffset(),
    jul.getTimezoneOffset(),
  );
  return date.getTimezoneOffset() < stdOffset;
}

export default function Clock() {
  const now = useSignal(new Date());

  useEffect(() => {
    // Update time every second on client
    // Note: Server renders with server time, client hydrates and updates immediately
    const timer = setInterval(() => {
      now.value = new Date();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Memoize expensive calculations to avoid unnecessary re-computations
  const timeData = useMemo(() => {
    try {
      const currentLocalTime = now.value.toLocaleTimeString(
        "en-US",
        TIME_OPTIONS,
      );
      const isDST = isDaylightSavingTime(now.value);
      const utcOffset = isDST ? -4 : -5;
      const utcOffsetString = `UTC${utcOffset >= 0 ? "+" : ""}${utcOffset}`;

      return {
        timeString: currentLocalTime,
        utcOffsetString,
        isDST,
        isoString: now.value.toISOString(),
      };
    } catch (error) {
      // Fallback for any timezone formatting errors
      console.warn("Clock: Error formatting time:", error);
      return {
        timeString: now.value.toLocaleTimeString(),
        utcOffsetString: "UTC-5",
        isDST: false,
        isoString: now.value.toISOString(),
      };
    }
  }, [now.value]);

  return (
    <time
      dateTime={timeData.isoString}
      aria-label={`Current time in Indiana: ${timeData.timeString} (${timeData.utcOffsetString})`}
      title={`Eastern Time${timeData.isDST ? " (DST)" : ""}`}
    >
      {timeData.timeString} ({timeData.utcOffsetString})
    </time>
  );
}
