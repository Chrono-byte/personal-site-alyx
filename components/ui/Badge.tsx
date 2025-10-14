import type { ComponentChildren } from "preact";

type BadgeProps = {
  children?: ComponentChildren;
  variant?: "level" | "tag";
  level?: "Expert" | "Advanced" | "Intermediate" | "Familiar" | "Beginner";
  className?: string;
};

function levelClasses(level: BadgeProps["level"]) {
  switch (level) {
    case "Expert":
      return "bg-blue-600 text-white border border-blue-400";
    case "Advanced":
      return "bg-orange-600 text-white border border-orange-400";
    case "Intermediate":
      return "bg-indigo-600 text-white border border-indigo-400";
    default:
      return "bg-gray-600 text-white border border-gray-500";
  }
}

export default function Badge(
  { children, variant = "tag", level, className = "" }: BadgeProps,
) {
  if (variant === "level") {
    const cls = levelClasses(level);
    return (
      <span
        className={`px-2 py-0.5 text-xs font-semibold rounded ${cls} ${className}`}
      >
        {children ?? level}
      </span>
    );
  }

  // default: tag/pill
  return (
    <span
      className={`px-1.5 py-0.5 text-xs rounded bg-gray-700 text-white border border-gray-600 ${className}`}
    >
      {children}
    </span>
  );
}
