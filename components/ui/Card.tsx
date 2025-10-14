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
  const baseClasses = "bg-[#33302a] rounded-xl border-4 border-gray-700 p-4 [box-shadow:_0_8px_16px_-4px_rgba(0,_0,_0,_0.5),_0_4px_8px_-2px_rgba(0,_0,_0,_0.4)] [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]";

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
