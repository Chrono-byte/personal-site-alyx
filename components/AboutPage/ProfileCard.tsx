import type { ComponentChildren, FunctionalComponent } from "preact";
import { TbLocationPlus, TbSchool, TbClock } from "@preact-icons/tb";
import Clock from "../../islands/Clock.tsx";

// --- Constants for Styling & Defaults ---

/** Default properties for the avatar image. */
const AVATAR_DEFAULTS = {
  src: "/svg/25267581.svg",
  alt: "avatar: stylized knight illustration holding a sword",
  width: 144,
  height: 144,
  className: "w-24 h-24 rounded-3xl border-4 border-white object-cover",
} as const;

/** Base Tailwind classes for the main card container. */
const CARD_STYLES = [
  "w-full",
  "mx-auto",
  "bg-[#33302a]",
  "rounded-xl",
  "border-4",
  "border-gray-700",
  "p-6",
  "[box-shadow:_0_8px_16px_-4px_rgba(0,_0,_0,_0.5),_0_4px_8px_-2px_rgba(0,_0,_0,_0.4)]",
  "[text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]",
  "text-gray-200",
].join(" ");

// --- Type Definitions ---

/** Defines the props accepted by the ProfileCard component. */
export type ProfileCardProps = {
  name?: string;
  handle?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  bannerSrc?: string;
  bio?: string;
  institution?: string;
  location?: string;
  osSystems?: string[];
  className?: string;
  pronouns?: string;
};

// --- Helper Components ---

/**
 * A reusable info block component for displaying categorized information.
 */
const InfoBlock: FunctionalComponent<{
  title: string;
  content: string;
  link?: string;
  icon?: typeof TbLocationPlus | typeof TbSchool | typeof TbClock;
  children?: ComponentChildren;
}> = ({ title, content, link, icon: Icon, children }) => (
  <div className="bg-[#2a2721] rounded-lg p-3 mb-3 border border-gray-600">
    <h3 className="text-sm font-semibold text-gray-300 tracking-wide mb-1 flex items-center gap-2">
      {Icon && <Icon size={14} className="text-gray-400" />}
      {title}
    </h3>
    <div className="flex items-center gap-1">
      {link
        ? (
          <a
            href={link}
            className="text-gray-200 hover:text-blue-400 transition-colors"
          >
            {content}
          </a>
        )
        : <span className="text-gray-200">{content}</span>}
    </div>
    {children}
  </div>
);

/**
 * A wrapper for the avatar image to provide consistent styling and accessibility.
 */
const Avatar: FunctionalComponent<{ src: string; alt: string }> = (
  { src, alt },
) => (
  <div className="relative">
    <img
      src={src}
      alt={alt}
      width={AVATAR_DEFAULTS.width}
      height={AVATAR_DEFAULTS.height}
      className={AVATAR_DEFAULTS.className}
      loading="lazy"
      decoding="async"
    />
  </div>
);

// --- Main Component ---

/**
 * A Mastodon-style profile card component that displays comprehensive user information.
 */
const ProfileCard: FunctionalComponent<ProfileCardProps> = ({
  name = "Ellie",
  handle = "@chrono__",
  avatarSrc = AVATAR_DEFAULTS.src,
  avatarAlt = AVATAR_DEFAULTS.alt,
  bannerSrc = "/svg/banner-placeholder.svg", // Placeholder - will need to add actual banner
  institution = "Indiana University Indianapolis",
  location = "Indianapolis, IN, USA",
  className = "",
}) => {
  return (
    <div className={`${CARD_STYLES} ${className}`.trim()}>
      {/* Banner Image */}
      <div className="relative h-32 bg-gradient-to-r from-purple-800 via-pink-800 to-red-800">
        {bannerSrc && (
          <img
            src={bannerSrc}
            alt="Profile banner"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Profile Picture - Overlapping Banner */}
      <div className="relative -mt-12 px-4">
        <Avatar src={avatarSrc} alt={avatarAlt} />
      </div>

      {/* Profile Content */}
      <div className="px-4 pb-4">
        {/* Name and Handle */}
        <div className="mt-2">
          <h1 className="text-xl font-bold text-gray-100">{name}</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-gray-400">{handle}</span>
          </div>
        </div>

        {/* Info Blocks */}
        <InfoBlock
          title="Institution"
          content={institution}
          icon={TbSchool}
        />

        <InfoBlock
          title="Location"
          content={location}
          icon={TbLocationPlus}
        />

        <InfoBlock
          title="Local Time"
          content=""
          icon={TbClock}
        >
          <Clock />
        </InfoBlock>
      </div>
    </div>
  );
};

export default ProfileCard;
