import BackgroundCard from "../BackgroundCard.tsx";
import Tag from "../ui/Tag.tsx";

type Props = {
  slug: string;
  title: string;
  date: Date;
  summary: string;
  tags: string[];
};

export default function PostListItem(
  { slug, title, date, summary, tags }: Props,
) {
  return (
    <article className="py-4">
      <BackgroundCard className="bg-[#272523] border-gray-700 hover:shadow-2xl transition-shadow">
        <div className="flex items-start justify-between">
          <a
            href={`/posts/${slug}`}
            className="text-lg font-semibold text-white hover:underline"
          >
            {title}
          </a>
          <time
            className="text-xs text-gray-400 ml-4"
            dateTime={date.toISOString()}
          >
            {date.toLocaleString()}
          </time>
        </div>

        <p className="mt-2 text-gray-200 text-sm leading-relaxed">{summary}</p>

        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => <Tag key={t}>{`#${String(t)}`}</Tag>)}
          </div>
        )}
      </BackgroundCard>
    </article>
  );
}
