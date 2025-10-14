import type { ComponentChildren } from "preact";

type CardProps = {
  title?: string;
  titleColor?: string;
  className?: string;
  children: ComponentChildren;
};

export default function Card(
  { title, children, className, titleColor = "" }: CardProps,
) {
  const baseClasses = "bg-[#33302a] rounded-xl border-4 border-gray-700 p-4";

  return (
    <div className={`${baseClasses} ${className}`}>
      {title && (
        <h3
          className={`mb-4 text-lg font-semibold ${
            titleColor || "text-violet-400"
          }`}
        >
          {title}
        </h3>
      )}

      <div className="text-gray-200">{children}</div>
    </div>
  );
}
