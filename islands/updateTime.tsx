import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function Countdown() {
  const target = new Date();
  const now = useSignal(new Date());

  // Set up an interval to update the `now` date every second with the current
  // date as long as the component is mounted.
  useEffect(() => {
    const timer = setInterval(() => {
      if (now.value > target) {
        clearInterval(timer);
      }
      now.value = new Date();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentDate =
    now.value.toLocaleString("en-US", { timeZone: "America/Indianapolis" })
      .split(", ")[0];
  const currentTime =
    now.value.toLocaleString("en-US", {
      timeZone: "America/Indianapolis",
      hour12: false,
    }).split(", ")[1];

  // Otherwise, we render the current time in format HH:MM:SS.
  return <span>{currentTime}, {currentDate}</span>;
}
