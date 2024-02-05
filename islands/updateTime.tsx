import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function Countdown() {
  const now = useSignal(new Date());

  // Set up an interval to update the `now` date every second with the current
  // date as long as the component is mounted.
  useEffect(() => {
    const timer = setInterval(() => {
      now.value = new Date();
    }, 1000);
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
  return <span class="inline-block align-middle">{currentTime}, {currentDate}</span>;
}
