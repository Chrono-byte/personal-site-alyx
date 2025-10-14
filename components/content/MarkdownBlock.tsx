// deno-lint-ignore-file
import { remark } from "remark";
import remarkHtml from "remark-html";

export type Metadata = {
  title?: string;
  date?: string;
  tags?: string[] | string;
  [key: string]: unknown;
};

interface Props {
  markdown: string | null;
  metadata?: Metadata;
}

export default function MarkdownBlock({ markdown, metadata }: Props) {
  const content = markdown ?? "";
  const html = remark().use(remarkHtml).processSync(content).toString();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        {metadata?.title
          ? (
            <h1 className="font-bold m-0 text-3xl text-white leading-tight">
              {String(metadata.title)}
            </h1>
          )
          : null}

        <span className="text-xs font-light text-white/70">
          Last edited at: {metadata?.date
            ? <span className="text-white">{String(metadata.date)}</span>
            : ""}
        </span>
      </div>

      <div
        className="text-white text-lg leading-relaxed space-y-4
                   [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-white [&_h1]:mt-8 [&_h1]:mb-4 [&_h1]:leading-tight
                   [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-6 [&_h2]:mb-3 [&_h2]:leading-tight
                   [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-4 [&_h3]:mb-2 [&_h3]:leading-tight
                   [&_p]:text-white [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-4
                   [&_a]:text-white [&_a]:font-medium [&_a]:no-underline [&_a]:border-b [&_a]:border-white/30 hover:[&_a]:border-white
                   [&_strong]:text-white [&_strong]:font-bold
                   [&_em]:text-white [&_em]:italic
                   [&_code]:text-white [&_code]:bg-black/20 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono [&_code]:text-sm
                   [&_pre]:bg-black/10 [&_pre]:border [&_pre]:border-white/20 [&_pre]:p-4 [&_pre]:rounded [&_pre]:overflow-x-auto [&_pre]:mb-4
                   [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-sm
                   [&_blockquote]:text-white/80 [&_blockquote]:border-l-4 [&_blockquote]:border-white/30 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:mb-4
                   [&_ul]:text-white [&_ul]:space-y-1 [&_ul]:mb-4
                   [&_ol]:text-white [&_ol]:space-y-1 [&_ol]:mb-4
                   [&_li]:text-white [&_li]:leading-relaxed
                   [&_table]:w-full [&_table]:border-collapse [&_table]:mb-4
                   [&_th]:bg-black/20 [&_th]:text-white [&_th]:font-bold [&_th]:p-2 [&_th]:text-left [&_th]:border [&_th]:border-white/10
                   [&_td]:text-white [&_td]:p-2 [&_td]:border [&_td]:border-white/10
                   [&_hr]:border-white/20 [&_hr]:my-8"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
