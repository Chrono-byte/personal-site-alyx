// This file parses markdown and renders it as JSX
import { useEffect, useState } from "preact/hooks";
import { CSS, render } from "https://deno.land/x/gfm/mod.ts";
// Add support for TypeScript and Bash.
import "https://esm.sh/prismjs@1.29.0/components/prism-typescript?no-check";
import "https://esm.sh/prismjs@1.29.0/components/prism-bash?no-check";

export interface MarkdownBlockProps {
  "src": string;
}

interface Metadata {
  "title"?: string;
  "id"?: string;
  "tags"?: string | string[];
  "date"?: string;
}

export default function MarkdownBlock(props: MarkdownBlockProps) {
  const [markdown, setMarkdown] = useState<string | null>(null);

  // fetch markdown file
  useEffect(() => {
    fetch(`/md/${props.src}`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [props.src]);

  // markdown is null, display error message
  if (markdown === null) {
    return <div>Error: Markdown not found</div>;
  }

  const metadata: Metadata = {};
  const metadataBlock = markdown.match(/^---\n(.*?)\n---\n/s);
  let markdownBody = markdown;

  if (metadataBlock) {
    const metadataLines = metadataBlock[1].split("\n");

    for (const line of metadataLines) {
      const [key, value] = line.split(": ");
      if (key && value) {
        metadata[key as keyof Metadata] = value;
      }

      if (key === "tags") {
        metadata[key as keyof Metadata] = JSON.parse(value);
      }
    }

    // trim metadata from markdown
    markdownBody = markdown.replace(metadataBlock[0], "");
  }

  const body = render(markdownBody, {
    baseUrl: `#`,
    allowIframes: false,
  });

  return (
    <div>
      {/* Title Block */}
      <div>
        {metadata.title ? <h1>{metadata.title}</h1> : null}
        <h2>Last edited at: {metadata.date ? metadata.date : null}</h2>
      </div>
      {/* Markdown Body */}
      <style>
        {CSS}
      </style>
      <main
        data-color-mode="auto"
        data-light-theme="light"
        data-dark-theme="dark"
        className="markdown-body markdown-box [text-shadow:none]"
      >
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </main>
    </div>
  );
}
