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
    <div>
      <div>
        {metadata?.title
          ? <h1 className="font-bold m-0 text-3xl">{String(metadata.title)}</h1>
          : null}

        <span className="text-xs font-light m-0">
          Last edited at: {metadata?.date
            ? <span className="text-blue-200">{String(metadata.date)}</span>
            : ""}
        </span>
      </div>

      <main
        data-color-mode="auto"
        data-light-theme="light"
        data-dark-theme="dark"
        className="background-card markdown-box [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]"
      >
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </div>
  );
}
