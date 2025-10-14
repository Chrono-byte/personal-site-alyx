export default function AvatarIcon({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className="rounded-full ring-2 ring-gray-800 bg-[#0f1724]"
      aria-hidden
    >
      <circle cx="24" cy="14" r="8" fill="#111827" />
      <rect x="6" y="28" width="36" height="12" rx="6" fill="#111827" />
    </svg>
  );
}
