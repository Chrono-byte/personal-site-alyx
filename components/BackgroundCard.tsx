// file: src/components/StyledPanel.tsx
import type { ComponentChildren } from "preact";

type StyledPanelProps = {
  // The title is optional. If you don't provide it, the header won't render.
  title?: string;
  // Allows you to pass other div props like `id` or `style` if needed
  className?: string;
  children: ComponentChildren;
};

export default function StyledPanel(
  { title, children, className = "" }: StyledPanelProps,
) {
  // Harmonized base classes for cohesive panels across the site.
  // Slightly thinner border and consistent padding so different cards align.
  const baseClasses = "bg-[#33302a] rounded-xl border-4 border-gray-700 p-4";

  return (
    <div className={`${baseClasses} ${className}`}>
      {title && (
        <h3 className="mb-4 text-lg font-semibold text-violet-400">
          {title}
        </h3>
      )}

      <div className="text-gray-200">
        {children}
      </div>
    </div>
  );
}
