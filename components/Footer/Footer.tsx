import { JSX } from "preact/jsx-runtime";

// Icons
import BrandGitHub from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-github.tsx";
import BrandGitLab from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-gitlab.tsx";
import BrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-twitter.tsx";
import BrandTwitch from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-twitch.tsx";
import BrandDiscord from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-discord.tsx";
import BrandLinkedIn from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-linkedin.tsx";
import BrandLastFM from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-lastfm.tsx";
import BrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-instagram.tsx";
import BrandYouTube from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-youtube.tsx";
import BrandSourcehut from "./BrandSourcehut.tsx";

// SplashText
import SplashTextDisplay from "../../islands/SplashTextDisplay.tsx";

const iconMap = {
  github: BrandGitHub,
  gitlab: BrandGitLab,
  discord: BrandDiscord,
  sourcehut: BrandSourcehut,
  linkedin: BrandLinkedIn,
  lastfm: BrandLastFM,
  twitter: BrandTwitter,
  twitch: BrandTwitch,
  instagram: BrandInstagram,
  youtube: BrandYouTube,
};

export default function Footer() {
  let menus = [
    {
      title: "Projects",
      children: [
        { name: "GitLab", href: "https://gitlab.com/Chrono-byte" },
        { name: "sourcehut", href: "https://sr.ht/~chrono/" },
        { name: "GitHub", href: "https://github.com/Chrono-byte" },
      ],
    },
    {
      title: "Socials",
      children: [
        { name: "Twitch", href: "https://twitch.tv/chronobyte_" },
        { name: "YouTube", href: "https://youtube.com/@chronobyte_" },
        { name: "Twitter", href: "https://twitter.com/chronobyte_" },
        {
          name: "Discord",
          href: "https://discord.com/users/251383432331001856",
        },
        {
          name: "Instagram",
          href: "https://instagram.com/chrono.1.1.1/",
        },
        {
          name: "LinkedIn",
          href: "https://linkedin.com/in/michael-gummere/",
        },
        {
          name: "lastfm",
          href: "https://last.fm/user/chronomly",
        },
      ],
    },
  ];

  const iconsDisplay: {
    [key: string]: JSX.Element[];
  } = {};

  // only display the socials that are enabled
  const enabledSocials: string[] = [
    "gitlab",
    "sourcehut",
    "github",
    "twitch",
    // "twitter",
    "discord",
    // "instagram",
    // "youtube",
    "linkedin",
    "lastfm",
  ];

  // sort the categories by title
  menus.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  menus.forEach((menu) => {
    // filter out the socials that are not enabled
    menu.children = menu.children.filter((child) => {
      return child.name &&
        enabledSocials.includes(child.name.toLocaleLowerCase());
    });

    // sort the socials by name
    menu.children.sort((a, b) => {
      if (menu.title === "Projects") return 0;
      return (b.name && a.name) ? a.name.localeCompare(b.name) : 0;
    });

    // add the menu to the iconsDisplay object
    iconsDisplay[menu.title] = [];

    // if social exists, add the icon name to the array
    menu.children.forEach(({ name, href }) => {
      if (name) {
        if (iconMap[name.toLowerCase() as keyof typeof iconMap]) {
          const Icon = iconMap[name.toLowerCase() as keyof typeof iconMap];

          iconsDisplay[menu.title].push(
            (
              <a
                className={`text-gray-700 hover:text-violet-400`}
                aria-label={`Visit my ${name} profile`}
                title={`Visit my ${name} profile`}
                href={href}
              >
                <Icon size={24} />
              </a>
            ),
          );

          // remove the social from the list menu
          menu.children = menu.children.filter((child) => {
            return child.name !== name;
          });
        }
      }
    });
  });

  // shake out empty menus
  menus = menus.filter((menu) => {
    return menu.children.length > 0;
  });

  return (
    <div className="flex justify-center items-center">
      <div className="bg-#e9debb flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-base md:text-xs [text-shadow:_.3px_.75px_0_rgb(255_255_255_/_90%)]">
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <div className="font-bold text-2xl">
              Michael Gummere
            </div>
          </div>
          <div className="text-gray-900">
            <SplashTextDisplay />
          </div>
        </div>

        {/* handle rest of entries */}
        {menus.map((item) => (
          <div className="mb-4" key={item.title}>
            <div className="font-bold">{item.title}</div>
            <ul className="mt-2">
              {item.children.map((child) => (
                <li className="mt-2" key={child.name}>
                  <a
                    className="text-gray-700 hover:text-violet-400"
                    href={child.href}
                  >
                    {child.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Handle apps with icons  */}
        {Object.entries(iconsDisplay).map(([title, item]) => (
          <div className="mb-4" key={title}>
            {/* <div className="font-extrabold mb-1.5">{title}</div> */}
            <div className="flex items-center">
              <hr className="border-stone-400 border-b-2 w-1/6" />
              <h2 className="mx-2 text-xs font-bold w-4/6">{title}</h2>
              <hr className="border-stone-400 border-b-2 w-1/6" />
            </div>
            <div className="grid gap-3 row-auto grid-cols-3 w-fit">
              {Object.entries(item).map(([child, Icon]) => (
                <div class="">
                  {Icon}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-black space-y-2">
          <div className="text-xs">
            Copyright © {new Date().getFullYear()} Michael Gummere<br />
            All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
