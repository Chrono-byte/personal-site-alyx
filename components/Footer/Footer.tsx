import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";

export default function Footer() {
  const menus = [
    {
      title: "Find my projects here!",
      children: [
        { name: "sourcehut", href: "#" },
        { name: "GitHub", href: "#" },
      ],
    },
    {
      title: "Socials",
      children: [
        { name: "Discord", href: "#" },
        { name: "Email", href: "mailto:me@michaelgummere.com" },
        { name: "Twitter (X)", href: "https://twitter.com/chronobyte_" },
        { name: "Mastodon", href: "https://mastodon.social/@chronomly" },
      ],
    },
  ];

  return (
    <div>
      <div class="bg-#e9debb flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-base md:text-xs [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)]">
        <div class="flex-1">
          <div class="flex items-center gap-1">
            {/* <CMark class="inline-block" aria-hidden="true" /> */}
            {/* <LemonIcon class="inline-block" aria-hidden="true" /> */}
            <div class="font-bold text-2xl">
              Michael Gummere
            </div>
          </div>
          <div class="text-gray-900">
            Chrono
            <br />
            Stack-less Developer.
          </div>
        </div>

        {menus.map((item) => (
          <div class="mb-4" key={item.title}>
            <div class="font-bold">{item.title}</div>
            <ul class="mt-2">
              {item.children.map((child) => (
                <li class="mt-2" key={child.name}>
                  <a
                    class="text-gray-700 hover:text-violet-400"
                    href={child.href}
                  >
                    {child.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div class="text-black space-y-2">
          <div class="text-xs">
            Copyright © {new Date().getFullYear()} Michael Gummere<br />
            All right reserved.
          </div>

          <a
            href="https://github.com/Chrono-byte/personal-site-alyx"
            class="inline-block hover:text-black"
            aria-label="GitHub"
          >
            <BrandGithub aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
