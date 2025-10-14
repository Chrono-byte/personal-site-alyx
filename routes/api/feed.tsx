import { Context } from "fresh";
import { join } from "$std/path/mod.ts";
import { readContentItems } from "../lib/content.ts";

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
  const items = readContentItems(postsDir).slice(0, 10);

  // Derive origin from the request URL
  const origin = _ctx.req.url ? new URL(_ctx.req.url).origin : "";

  const feedItems = items.map((item) => {
    const title = escapeXml(item.title);
    const date = escapeXml(item.date.toISOString());
    const summary = escapeXml(item.summary ?? "");
    const slug = escapeXml(item.slug);

    return `
    <item>
      <title>${title}</title>
      <link>${escapeXml(`${origin}/posts/${slug}`)}</link>
      <pubDate>${date}</pubDate>
      <description>${summary}</description>
    </item>`;
  }).join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>My RSS Feed</title>
      <link>${escapeXml(origin)}/</link>
      ${feedItems}
    </channel>
  </rss>`;

  return new Response(feed, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
