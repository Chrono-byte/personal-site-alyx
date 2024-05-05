import { JSX } from "preact/jsx-runtime";

import BrandGitHub from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-github.tsx";
import BrandGitLab from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-gitlab.tsx";
import BrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-twitter.tsx";
import BrandTwitch from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-twitch.tsx";
import BrandDiscord from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-discord.tsx";
import BrandSourcehut from "./BrandSourcehut.tsx";

import SplashTextDisplay from "../../islands/SplashTextDisplay.tsx";

const iconMap = {
  github: BrandGitHub,
  gitlab: BrandGitLab,
  // twitter: BrandTwitter,
  // twitch: BrandTwitch,
  discord: BrandDiscord,
  sourcehut: BrandSourcehut,
};

export default function Footer() {
  let menus = [
    {
      title: "Find my projects here!",
      children: [
        { name: "GitLab", href: "https://gitlab.com/Chrono-byte" },
        { name: "GitHub", href: "https://github.com/Chrono-byte" },
        { name: "sourcehut", href: "https://sr.ht/~chrono/" },
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
          href: "https://www.instagram.com/chrono.1.1.1/",
        },
      ],
    },
  ];

  const iconsDisplay: JSX.Element[] = [];

  // only display the socials that are enabled
  const enabledSocials: string[] = [
    "gitlab",
    "sourcehut",
    "github",
    "twitch",
    "twitter",
    "discord",
    "instagram",
    "youtube",
  ];

  menus.forEach((menu) => {
    // filter out the socials that are not enabled
    menu.children = menu.children.filter((child) => {
      return child.name &&
        enabledSocials.includes(child.name.toLocaleLowerCase());
    });

    // sort the socials
    menu.children.sort((a, b) => {
      return (a.name && b.name) ? a.name.localeCompare(b.name) : 0;
    });

    // if social exists, add the icon name to the array
    menu.children.forEach(({ name, href }) => {
      if (name) {
        if (iconMap[name.toLowerCase() as keyof typeof iconMap]) {
          const Icon = iconMap[name.toLowerCase() as keyof typeof iconMap];

          // push the icon, add alt text for link
          iconsDisplay.push(
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

  // sort the menus
  menus.sort((a, b) => {
    return a.title.localeCompare(b.title);
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

        <div className="text-black space-y-2">
          <div className="text-xs">
            Copyright © {new Date().getFullYear()} Michael Gummere<br />
            All right reserved.
          </div>

          <div className="flex gap-2">
            {/* display array */}
            {iconsDisplay.map((icon) => {
              return icon;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
