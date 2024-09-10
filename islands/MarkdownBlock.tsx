// This file parses markdown and renders it as JSX
import { useEffect, useState } from "preact/hooks";
import { CSS, render } from "https://deno.land/x/gfm@0.6.0/mod.ts";

// Add support for TypeScript and Bash.
// import "https://esm.sh/prismjs@1.29.0/components/prism-typescript?no-check";
// import "https://esm.sh/prismjs@1.29.0/components/prism-bash?no-check";

import type { Metadata } from "../routes/api/feed.tsx";

export interface MarkdownBlockProps {
  "src": string;
}

export default function MarkdownBlock(props: MarkdownBlockProps) {
  const [markdown, setMarkdown] = useState<string | null>(null);

  // fetch markdown file
  useEffect(() => {
    fetch(`/${props.src}`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [props.src]);

  // markdown is null, display error message
  if (markdown === null) {
    return (
      <div>
        <style>
          {CSS}
        </style>
        <div>
          <h1 className={"font-bold m-0 text-3xl"}>Error</h1>
          <span className={"text-xs font-light m-0"}>
            Loading post: {props.src}
          </span>
        </div>
        <main
          data-color-mode="auto"
          data-light-theme="light"
          data-dark-theme="dark"
          className="markdown-body markdown-box [text-shadow:none]"
        >
          <div dangerouslySetInnerHTML={{ __html: `` }} />
        </main>
      </div>
    );
  }

  const metadata: Partial<Metadata> = {};
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
      <style>
        {CSS}
      </style>
      <div>
        {metadata.title
          ? <h1 className={"font-bold m-0 text-3xl"}>{metadata.title}</h1>
          : null}

        <span className={"text-xs font-light m-0"}>
          Last edited at: {metadata.date
            ? <span className={"text-blue-200"}>{metadata.date}</span>
            : ""}
        </span>
      </div>
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
