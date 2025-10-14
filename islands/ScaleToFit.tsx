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

    function updateScale() {
      const o = outerRef.current;
      const i = innerRef.current;
      if (!o || !i) return;

      i.style.transform = "none";
      i.style.transformOrigin = "top center";

      const containerHeight = o.clientHeight;
      const contentHeight = i.getBoundingClientRect().height;

      if (contentHeight <= containerHeight) {
        i.style.transform = "none";
        return;
      }

      const scale = containerHeight / contentHeight;
      i.style.transform = `scale(${scale})`;
      i.style.transformOrigin = "top center";
    }

    const observer = new ResizeObserver(() => {
      requestAnimationFrame(updateScale);
    });
    observer.observe(outer);
    observer.observe(inner);

    updateScale();

    return () => {
      observer.disconnect();
      if (inner) {
        inner.style.transform = "none";
      }
    };
  }, []);

  return (
    <div ref={outerRef} className="w-full h-full overflow-hidden">
      <div ref={innerRef}>{children}</div>
    </div>
  );
}
