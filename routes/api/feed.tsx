import { Context } from "fresh";
import { join } from "$std/path/mod.ts";

/**
 * Represents the metadata for a post.
 */
export interface Metadata {
  title: string;
  id: string;
  tags: string[] | string;
  date: string | Date;
  summary?: string;
}

function escapeXml(s?: string) {
  if (!s) return "";
  return s.replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export default function handler(_ctx: Context<Record<PropertyKey, never>>) {
  const postsDir = join(Deno.cwd(), "static", "md") + "/";

  let entries: Deno.DirEntry[] = [];
  try {
    entries = [...Deno.readDirSync(postsDir)].filter((e) =>
      e.isFile && e.name.endsWith(".md")
    );
  } catch (err) {
    console.error("failed to read posts directory", err);
    return new Response("", { status: 500 });
  }

  entries.sort((a, b) => {
    const aTime = Deno.statSync(join(postsDir, a.name)).mtime?.getTime() ?? 0;
    const bTime = Deno.statSync(join(postsDir, b.name)).mtime?.getTime() ?? 0;
    return bTime - aTime;
  });

  const limited = entries.slice(0, 10);

  // Derive origin from the request URL
  const origin = _ctx.req.url ? new URL(_ctx.req.url).origin : "";

  const items = limited.map((entry) => {
    try {
      const content = Deno.readTextFileSync(join(postsDir, entry.name));
      const metadata: Partial<Metadata> = {};
      const metadataBlock = content.match(/^---\n(.*?)\n---\n/s);
      // body (markdown) is available as `content` if needed; not used here
      if (metadataBlock) {
        const lines = metadataBlock[1].split("\n");
        for (const line of lines) {
          const [key, ...rest] = line.split(": ");
          const value = rest.join(": ");
          if (!key) continue;
          if (key === "tags") {
            try {
              // store tags as unknown; higher-level code can interpret this
              (metadata as Record<string, unknown>)[key] = JSON.parse(value);
            } catch {
              (metadata as Record<string, unknown>)[key] = value;
            }
          } else {
            (metadata as Record<string, unknown>)[key] = value;
          }
        }
      }

      const title = escapeXml(String(metadata.title ?? entry.name));
      const date = escapeXml(String(metadata.date ?? ""));
      const summary = escapeXml(String(metadata.summary ?? ""));
      const slug = escapeXml(entry.name.replace(/\.md$/, ""));

      return `
      <item>
        <title>${title}</title>
        <link>${escapeXml(`${origin}/posts/${slug}`)}</link>
        <pubDate>${date}</pubDate>
        <description>${summary}</description>
      </item>`;
    } catch (err) {
      console.error("failed to read post", entry.name, err);
      return "";
    }
  }).join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>My RSS Feed</title>
      <link>${escapeXml(origin)}/</link>
      ${items}
    </channel>
  </rss>`;

  return new Response(feed, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
