type TagProps = {
  children: string | number;
  className?: string;
};

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-200 ${className}`}
    >
      {children}
    </span>
  );
}
