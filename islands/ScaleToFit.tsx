// file: src/islands/ScaleToFit.tsx

import { useLayoutEffect, useRef } from "preact/hooks";

export default function ScaleToFit(
  { children }: { children: preact.ComponentChildren },
) {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    // A minimum scale prevents content from becoming unreadably small.
    const MIN_SCALE = 0.6;

    function updateScale() {
      const o = outerRef.current;
      const i = innerRef.current;
      if (!o || !i) return;

      // Reset transforms to measure the content's natural, unscaled height.
      i.style.transform = "none";
      i.style.transformOrigin = "top center";

      const containerHeight = o.clientHeight;
      const contentHeight = i.getBoundingClientRect().height;

      // If content already fits or the container has no height, do nothing.
      if (!containerHeight || contentHeight <= containerHeight) {
        i.style.transform = "none";
        return;
      }

      // Calculate the scale factor and apply the minimum.
      let scale = containerHeight / contentHeight;
      if (scale < MIN_SCALE) scale = MIN_SCALE;

      i.style.transform = `scale(${scale})`;
      i.style.transformOrigin = "top center";
    }

    // A single ResizeObserver on both elements is the most robust way
    // to detect changes in either the available space or the content's size.
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(updateScale);
    });
    observer.observe(outer); // Watches for changes in the container's size.
    observer.observe(inner); // Watches for changes in the content's size.

    // Run once on mount.
    updateScale();

    return () => {
      observer.disconnect();
      // Only need to clean up styles on the inner element.
      if (inner) {
        inner.style.transform = "none";
        inner.style.transformOrigin = "";
      }
    };
  }, []);

  return (
    // This component now uses Tailwind classes to fill its parent.
    // The parent's layout is what's most important.
    <div ref={outerRef} className="w-full h-full">
      <div ref={innerRef}>{children}</div>
    </div>
  );
}
