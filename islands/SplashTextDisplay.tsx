import { useSignal } from "@preact/signals";
import splashTexts, { SplashText } from "./splashTextsStore.tsx";

const seenSplashes: SplashText[] = [];

function preConHandler(splash: SplashText) {
  if (splash.preConEffects) {
    if (splash.preConEffects.rainbow) {
      return {
        "text": splash.text,
        render: (text: string) => (
          <p
            style={{
              background: "linear-gradient(90deg, #ff0000, #ff7700, #ff0, #0f0, #00f, #f0f, #ff0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {text}
          </p>
        ),
      };
    }
  }
  return splash;
}

export default function SplashTextDisplay() {
  const splash = useSignal(splashTexts[0]);

  function handleClick() {
    let nextSplash: number;

    if (seenSplashes.length < splashTexts.length) {
      do {
        nextSplash = Math.floor(Math.random() * splashTexts.length);
      } while (
        splashTexts[nextSplash] === splashTexts[0] ||
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
        className="hover:text-violet-600 list-none"
        onClick={handleClick}
      >
        {splash.value.render
          ? splash.value.render(splash.value.text)
          : splash.value.text}

          {/* flag if splash has special effects */}
          {splash.value.preConEffects && (
            <span style={{ color: "red" }}>🚩</span>
          )}
      </div>
    </>
  );
}
