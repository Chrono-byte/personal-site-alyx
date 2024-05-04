import BrandGitHub from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-github.tsx";
import BrandGitLab from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-gitlab.tsx";
import BrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-twitter.tsx";
import BrandTwitch from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-twitch.tsx";

import SplashTextDisplay from "../../islands/SplashTextDisplay.tsx";
import { JSX } from "preact/jsx-runtime";

const iconMap: {
  [key: string]: (props: {
    size: number;
  }) => JSX.Element;
} = {
  github: BrandGitHub,
  gitlab: BrandGitLab,
  twitter: BrandTwitter,
  twitch: BrandTwitch,
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
        { name: "Twitter", href: "https://twitter.com/chronobyte_" },
      ],
    },
  ];
  const iconsDisplay: JSX.Element[] = [];

  // only display the socials that are enabled
  const enabledSocials: string[] = [
    "gitlab",
    // "sourcehut",
    "github",
    "twitch",
    "twitter",
  ];

  menus.forEach((menu) => {
    // filter out the socials that are not enabled
    menu.children = menu.children.filter((child) => {
      return enabledSocials.includes(child.name.toLocaleLowerCase());
    });

    // sort the socials
    menu.children.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });

    // if social exists, add the icon name to the array
    menu.children.forEach((child) => {
      if (iconMap[child.name.toLowerCase()]) {
        const Icon = iconMap[child.name.toLowerCase()];

        // push the icon add alt text for link
        iconsDisplay.push(
          (
            <a
              className={`text-gray-700 hover:text-violet-400`}
              aria-label={`Visit my ${child.name} profile`}
              href={child.href}
            >
              <Icon size={24} />
            </a>
          ),
        );

        // trim the child out of the menu
        menu.children = menu.children.filter((item) => {
          return item !== child;
        });
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
