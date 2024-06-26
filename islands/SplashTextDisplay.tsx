import { useSignal } from "@preact/signals";
import splashTexts, { SplashText } from "./splashTextsStore.tsx";

const seenSplashes: SplashText[] = [];

export default function SplashTextDisplay() {
  const splash = useSignal({
    "text": "Chrono",
  } as SplashText);

  function handleClick() {
    let nextSplash: number;

    if (seenSplashes.length < splashTexts.length) {
      do {
        nextSplash = Math.floor(Math.random() * splashTexts.length);
      } while (
        seenSplashes.includes(splashTexts[nextSplash])
      );
    } else if (seenSplashes.length >= splashTexts.length) {
      nextSplash = Math.floor(Math.random() * splashTexts.length);
    } else {
      return splash.value = {
        "text": "error: no splashes to display",
        render: (text: string) => <span style={{ color: "red" }}>{text}</span>,
      };
    }

    // push the current splash to the seen splashes array
    seenSplashes.push(splash.value);

    // if the splash has pre-con effects, handle them
    splash.value = splashTexts[nextSplash];
  }

  return (
    <>
      <div
        title="click this text for a new splash!"
        className="hover:text-violet-600 list-none select-none"
        onClick={handleClick}
      >
        {splash.value.render ? splash.value.render(splash.value.text) : (
          <span>
            {splash.value.text}
          </span>
        )}
      </div>
    </>
  );
}
