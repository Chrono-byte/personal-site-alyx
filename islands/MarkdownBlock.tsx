// This file parses markdown and renders it as JSX
import { useEffect, useState } from "preact/hooks";
import Markdown from "https://esm.sh/react-markdown@9.0.1";
import remarkGfm from "https://esm.sh/remark-gfm@4.0.0";

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
  }

  console.log(metadata);
  console.log(test);

  return (
    <div>
      {/* Title Block */}
      <div>
        {metadata.title ? <h1>{metadata.title}</h1> : null}
        <h2>Last edited at: {metadata.date ? metadata.date : null}</h2>
      </div>

      {/* tags display */}
      <div>
        {metadata.tags
          ? (
            <ul>
              {metadata.tags.map((tag: string) => <li key={tag}>{tag}</li>)}
            </ul>
          )
          : null}
      </div>

      {/* Markdown Body */}
      <br />
      <div>
        Markdown should appear here:
      </div>
    </div>
  );
}
