// components/AboutPage/ProfileCard.tsx

import type { ComponentChildren, FunctionalComponent } from "preact";
import { TbBuilding, TbClock, TbMapPin } from "@preact-icons/tb";
import Clock from "../../islands/Clock.tsx";
import StyledPanel from "../BackgroundCard.tsx";

// --- Constants for Styling & Defaults ---

/** Properties for the icons used in the info rows. */
const ICON_PROPS = {
  size: 16,
  color: "#f0f0f0",
} as const;

/** Default properties for the avatar image. */
const AVATAR_DEFAULTS = {
  src: "/svg/25267581.svg",
  alt: "avatar: stylized knight illustration holding a sword",
  width: 144,
  height: 144,
  className:
    "border-4 border-neutral-800 rounded-2xl w-16 h-16 md:w-32 md:h-32 object-cover",
} as const;

/** Base Tailwind classes for the main card container. */
const CARD_STYLES =
  "max-h-full w-full md:w-56 flex flex-row md:flex-col items-center md:items-start text-shadow mb-6 rounded-3xl p-3 md:p-4 [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]";

// --- Type Definitions ---

/** Defines the props accepted by the ProfileCard component. */
export type ProfileCardProps = {
  name?: string;
  handle?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  institution?: string;
  location?: string;
  className?: string;
};

// --- Helper Components ---

/**
 * A reusable list item component for displaying a piece of profile information
 * with a leading icon.
 */
const InfoRow: FunctionalComponent<{
  Icon: typeof TbBuilding; // Using the exact type of the icon components
  children: ComponentChildren;
}> = ({ Icon, children }) => (
  <li className="flex items-center gap-3">
    <Icon {...ICON_PROPS} aria-hidden="true" />
    <span className="text-base">{children}</span>
  </li>
);

/**
 * A wrapper for the avatar image to provide consistent styling and accessibility.
 */
const Avatar: FunctionalComponent<{ src: string; alt: string }> = (
  { src, alt },
) => (
  <figure className="shrink-0 mb-3 md:mb-0">
    <img
      src={src}
      alt={alt}
      width={AVATAR_DEFAULTS.width}
      height={AVATAR_DEFAULTS.height}
      className={AVATAR_DEFAULTS.className}
      loading="lazy"
      decoding="async"
    />
  </figure>
);

// --- Main Component ---

/**
 * A responsive profile card component that displays user information.
 * It's horizontal on mobile and stacks vertically on larger screens.
 */
const ProfileCard: FunctionalComponent<ProfileCardProps> = ({
  name = "Ellie",
  handle = "@chrono__",
  avatarSrc = AVATAR_DEFAULTS.src,
  avatarAlt = AVATAR_DEFAULTS.alt,
  institution = "Indiana University Indianapolis",
  location = "Indianapolis, IN, USA",
  className = "",
}) => {
  // We define the info list content once to avoid repetition.
  const infoContent = (
    <ul className="mt-3 w-full space-y-3 text-lg">
      <InfoRow Icon={TbBuilding}>{institution}</InfoRow>
      <InfoRow Icon={TbMapPin}>{location}</InfoRow>
      <InfoRow Icon={TbClock}>
        <Clock /> {/* Client-side interactive island */}
      </InfoRow>
    </ul>
  );

  return (
    <StyledPanel className={`${CARD_STYLES} ${className}`.trim()}>
      {/* Avatar: Positioned left on mobile, top on desktop */}
      <Avatar src={avatarSrc} alt={avatarAlt} />

      {/* Main content block */}
      <div className="ml-3 md:ml-0 text-left w-full">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-base text-fuchsia-200 mt-1">{handle}</p>

        {/* Mobile View: Collapsible details to save space */}
        <details open className="block md:hidden mt-3">
          <summary className="text-sm text-slate-300 cursor-pointer select-none">
            More
          </summary>
          {infoContent}
        </details>

        {/* Desktop View: Always visible */}
        <div className="hidden md:block mt-3">{infoContent}</div>
      </div>
    </StyledPanel>
  );
};

export default ProfileCard;
