import BackgroundCard from "../BackgroundCard.tsx";
import Tag from "../ui/Tag.tsx";

type Props = {
  slug: string;
  title: string;
  date: Date;
  summary: string;
  tags: string[];
  basePath?: string;
};

export default function ContentListItem({
  slug,
  title,
  date,
  summary,
  tags,
  basePath = "posts",
}: Props) {
  return (
    <article className="py-4">
      <BackgroundCard className="bg-[#272523] border-gray-700 hover:shadow-2xl transition-shadow">
        <header className="flex items-start justify-between">
          <a
            href={`/${basePath}/${slug}`}
            className="text-lg font-semibold text-blue-400 hover:text-blue-600 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {title}
          </a>
          <time
            className="text-xs text-gray-400 ml-4"
            dateTime={date.toISOString()}
          >
            {date.toLocaleDateString()}
          </time>
        </header>

        <p className="mt-2 text-gray-200 text-sm leading-relaxed">{summary}</p>

        {tags.length > 0 && (
          <footer className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => <Tag key={tag}>{`#${tag}`}</Tag>)}
          </footer>
        )}
      </BackgroundCard>
    </article>
  );
}
