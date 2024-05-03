import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-github.tsx";
import BrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-twitter.tsx";
import SplashTextDisplay from "../../islands/SplashTextDisplay.tsx";

export default function Footer() {
  const menus = [
    {
      title: "Find my projects here!",
      children: [
        { name: "sourcehut", href: "https://sr.ht/~chrono/" },
        { name: "GitHub", href: "https://github.com/Chrono-byte" },
      ],
    },
    {
      title: "Socials",
      children: [
        { name: "Twitch", href: "https://twitch.tv/chronobyte_" },
      ],
    },
  ];

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
            Chrono
            <br />
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

          <a
            href="https://github.com/Chrono-byte"
            className="inline-block hover:text-black"
            aria-label="GitHub"
          >
            <BrandGithub aria-hidden="true" />
          </a>
          <a
            href="https://twitter.com/chronobyte_"
            className="inline-block hover:text-black"
            aria-label="Twitter"
          >
            <BrandTwitter aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
