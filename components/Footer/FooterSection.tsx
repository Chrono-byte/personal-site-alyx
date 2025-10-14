import type { JSX } from "preact/jsx-runtime";
import DividerTitle from "../ui/DividerTitle.tsx";

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
}
