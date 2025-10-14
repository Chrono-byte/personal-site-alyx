import type { JSX } from "preact/jsx-runtime";
import DividerTitle from "../../ui/DividerTitle.tsx";

interface SocialLink {
  name: string;
  href: string;
  icon: (
    props: { size?: number; className?: string; title?: string },
  ) => JSX.Element;
}

export default function FooterSection(
  { title, links }: { title: string; links: SocialLink[] },
) {
  return (
    <div>
      <DividerTitle title={title} />
      <nav aria-label={`${title} links`}>
        <ul className="flex gap-4 justify-center list-none">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 underline hover:no-underline flex flex-col items-center gap-1 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={`Visit my ${link.name} profile`}
                  title={link.name}
                >
                  <Icon size={24} className="inline-block" />
                  <span className="text-xs">{link.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
