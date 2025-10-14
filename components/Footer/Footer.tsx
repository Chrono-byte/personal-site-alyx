import { JSX } from "preact/jsx-runtime";

// Icons
import SocialIcons from "../icons/SocialIcons.tsx";

// SplashText
import SplashTextDisplay from "../../islands/SplashTextDisplay.tsx";
import FooterSection from "./FooterSection.tsx";

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
    icon: SocialIcons.Gitlab,
  },
  {
    name: "sourcehut",
    href: "https://sr.ht/~chrono/",
    icon: SocialIcons.Sourcehut,
  },
  {
    name: "GitHub",
    href: "https://github.com/Chrono-byte",
    icon: SocialIcons.Github,
  },
  {
    name: "lastfm",
    href: "https://last.fm/user/chronomly",
    icon: SocialIcons.Lastfm,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ellie-gummere",
    icon: SocialIcons.LinkedIn,
  },
];

export default function Footer() {
  const projects = socialLinks.filter((link) =>
    ["GitLab", "sourcehut", "GitHub"].includes(link.name)
  );

  const socials = socialLinks.filter((link) =>
    !["GitLab", "sourcehut", "GitHub"].includes(link.name)
  );

  // const builtWith = [
  //   {
  //     name: "Fresh",
  //     href: "https://fresh.deno.dev",
  //     icon: () => (
  //       <img
  //         src="https://fresh.deno.dev/logo.svg"
  //         alt="Fresh logo"
  //         className="w-4 h-4"
  //       />
  //     ),
  //   },
  // ];

  // FooterSection handles rendering of section title + links

  return (
    <footer className="flex justify-center items-center mt-8">
      <div className="bg-#e9debb flex flex-col w-full max-w-screen-lg gap-1 px-8 py-6 text-base md:text-xs [text-shadow:_1px_1px_0_rgba(255_255_255_/_90%)]">
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
          <FooterSection title="Projects" links={projects} />
          <FooterSection title="Socials" links={socials} />
          {/* <FooterSection title="Built with" links={builtWith} /> */}
        </div>
      </div>
    </footer>
  );
}
