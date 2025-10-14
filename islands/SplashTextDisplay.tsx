import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { SplashText } from "./splashTextsStore.tsx";

export default function SplashTextDisplay() {
  const splash = useSignal({
    "text": "Chrono",
  } as SplashText);
  const seenSplashes = useSignal<SplashText[]>([]);
  const splashTexts = useSignal<SplashText[]>([]);

  useEffect(() => {
    // Lazy load splash texts
    import("./splashTextsStore.tsx").then((module) => {
      splashTexts.value = module.default;
    });
  }, []);

  function handleClick() {
    if (splashTexts.value.length === 0) return; // Not loaded yet

    let nextSplash: number;

    if (seenSplashes.value.length < splashTexts.value.length) {
      do {
        nextSplash = Math.floor(Math.random() * splashTexts.value.length);
      } while (
        seenSplashes.value.includes(splashTexts.value[nextSplash])
      );
    } else if (seenSplashes.value.length >= splashTexts.value.length) {
      nextSplash = Math.floor(Math.random() * splashTexts.value.length);
    } else {
      return splash.value = {
        "text": "error: no splashes to display",
        render: (text: string) => <span style={{ color: "red" }}>{text}</span>,
      };
    }

    // push the current splash to the seen splashes array
    seenSplashes.value = [...seenSplashes.value, splash.value];

    // if the splash has pre-con effects, handle them
    splash.value = splashTexts.value[nextSplash];
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
