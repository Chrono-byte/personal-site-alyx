import { useComputed, useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

// NOTE: Temporal API requires a polyfill for full browser support.
import "@js-temporal/polyfill";

/**
 * Clock component that displays the current time in Indiana/Indianapolis timezone.
 *
 * Features:
 * - SSR-compatible: Renders a placeholder on server, preventing hydration mismatch.
 * - Automatic DST detection for the specified time zone.
 * - Accessible with proper ARIA labels and semantic markup.
 * - Updates every second on the client using signals.
 * - NOTE: Requires a polyfill for the Temporal API (e.g., @js-temporal/polyfill)
 * to work in all browsers.
 */

const TIME_ZONE = "America/Indiana/Indianapolis";
const INDIANAPOLIS_STANDARD_OFFSET = "-05:00";

// **FIX 1: Removed timeZone from options, as it's redundant**
const TIME_OPTIONS = {
  hour12: false,
  timeStyle: "medium" as const,
};

export default function Clock() {
  // Start with null to ensure server and initial client render are identical
  const now = useSignal<Temporal.Instant | null>(null);

  useEffect(() => {
    // On client mount, set the actual current time and start the timer
    now.value = Temporal.Now.instant();

    const timer = setInterval(() => {
      now.value = Temporal.Now.instant();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeData = useComputed(() => {
    if (!now.value) {
      return null;
    }

    const zonedDateTime = now.value.toZonedDateTimeISO(TIME_ZONE);

    // This call is now correct
    const timeString = zonedDateTime.toLocaleString("en-US", TIME_OPTIONS);
    const utcOffsetString = zonedDateTime.offset;

    // **FIX 2: Use your original, correct logic for this time zone**
    const isDST = zonedDateTime.offset !== INDIANAPOLIS_STANDARD_OFFSET;
    const isoString = zonedDateTime.toInstant().toString();

    return {
      timeString,
      utcOffsetString,
      isDST,
      isoString,
    };
  });

  // Render a placeholder on server and for initial client render
  if (!timeData.value) {
    return (
      <time aria-label="Loading current time...">
        --:--:--
      </time>
    );
  }

  // Once hydrated, render the dynamic time
  const { isoString, timeString, utcOffsetString, isDST } = timeData.value;

  return (
    <time
      dateTime={isoString}
      aria-label={`Current time in Indiana: ${timeString} (${utcOffsetString})`}
      title={`Eastern Time${isDST ? " (DST)" : ""}`}
    >
      {timeString} ({utcOffsetString})
    </time>
  );
}
