import { JSX } from "preact/jsx-runtime";

// Icons
import {
  TbBrandGithub,
  TbBrandGitlab,
  TbBrandLastfm,
  TbBrandLinkedin,
} from "@preact-icons/tb";
import BrandSourcehut from "./BrandSourcehut.tsx";

// SplashText
import SplashTextDisplay from "../../islands/SplashTextDisplay.tsx";

interface SocialLink {
  name: string;
  href: string;
  icon: (
    props: { size?: number; className?: string; title?: string },
  ) => JSX.Element;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitLab",
    href: "https://gitlab.com/Chrono-byte",
    icon: TbBrandGitlab,
  },
  {
    name: "sourcehut",
    href: "https://sr.ht/~chrono/",
    icon: BrandSourcehut,
  },
  {
    name: "GitHub",
    href: "https://github.com/Chrono-byte",
    icon: TbBrandGithub,
  },
  {
    name: "lastfm",
    href: "https://last.fm/user/chronomly",
    icon: TbBrandLastfm,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ellie-gummere",
    icon: TbBrandLinkedin,
  },
];

export default function Footer() {
  const projects = socialLinks.filter((link) =>
    ["GitLab", "sourcehut", "GitHub"].includes(link.name)
  );

  const socials = socialLinks.filter((link) =>
    !["GitLab", "sourcehut", "GitHub"].includes(link.name)
  );

  const renderSection = (title: string, links: SocialLink[]) => (
    <div>
      <div className="flex items-center mb-3">
        <hr className="border-stone-400 border-b-2 flex-1" />
        <h2 className="mx-3 text-xs font-bold whitespace-nowrap">{title}</h2>
        <hr className="border-stone-400 border-b-2 flex-1" />
      </div>
      <div className="flex gap-4 justify-center">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-violet-400 flex flex-col items-center gap-1 text-xs transition-colors"
              aria-label={`Visit my ${link.name} profile`}
              title={link.name}
            >
              <Icon size={24} className="inline-block" />
              <span className="text-xs">{link.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );

  return (
    <footer className="flex justify-center items-center mt-8">
      <div className="bg-#e9debb flex flex-col w-full max-w-screen-lg gap-1 px-8 py-6 text-base md:text-xs [text-shadow:_.3px_.75px_0_rgb(255_255_255_/_90%)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex-1">
            <div className="font-bold text-2xl mb-1">Ellie</div>
            <div className="text-gray-900">
              <SplashTextDisplay />
            </div>
          </div>

          <div className="text-black text-xs">
            Copyright © {new Date().getFullYear()} Ellie<br />
            All rights reserved.
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center">
          {renderSection("Projects", projects)}
          {renderSection("Socials", socials)}
        </div>
      </div>
    </footer>
  );
}
