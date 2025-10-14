import { join } from "$std/path/mod.ts";
import { Metadata, parseFrontmatter } from "./posts.ts";

export interface ContentItem {
  slug: string;
  title: string;
  date: Date;
  summary: string;
  tags: string[];
  content: string;
  metadata: Metadata;
}

export interface ContentItemPreview {
  slug: string;
  title: string;
  date: Date;
  summary: string;
  tags: string[];
}

/**
 * Reads a markdown file and extracts frontmatter and content
 */
export function readMarkdownFile(filePath: string): {
  content: string;
  metadata: Metadata;
} {
  const rawContent = Deno.readTextFileSync(filePath);
  const metadata = parseFrontmatter(rawContent);

  // Extract content after frontmatter
  const frontmatterMatch = rawContent.match(
    /^-{3}\s*\r?\n([\s\S]*?)\r?\n-{3}/m,
  );
  const content = frontmatterMatch
    ? rawContent.slice(frontmatterMatch[0].length).trim()
    : rawContent.trim();

  return { content, metadata };
}

/**
 * Lists markdown files in a directory with metadata
 */
export function listMarkdownFiles(
  dir: string,
): Array<{ name: string; path: string; mtime: Date | null }> {
  try {
    const entries = [...Deno.readDirSync(dir)].filter(
      (entry) => entry.isFile && entry.name.endsWith(".md"),
    );

    return entries.map((entry) => {
      const path = join(dir, entry.name);
      const stat = Deno.statSync(path);
      return {
        name: entry.name,
        path,
        mtime: stat.mtime,
      };
    }).sort((a, b) => (b.mtime?.getTime() ?? 0) - (a.mtime?.getTime() ?? 0));
  } catch {
    return [];
  }
}

/**
 * Reads content items from a directory of markdown files
 */
export function readContentItems(dir: string): ContentItem[] {
  const files = listMarkdownFiles(dir);

  const items: ContentItem[] = [];

  for (const file of files) {
    try {
      const { content, metadata } = readMarkdownFile(file.path);
      const slug = file.name.replace(/\.md$/i, "");
      const title = metadata.title || slug;
      const date = parseDate(metadata.date, file.mtime);
      const summary = metadata.summary || "";
      const tags = parseTags(metadata.tags);

      items.push({
        slug,
        title,
        date,
        summary,
        tags,
        content,
        metadata,
      });
    } catch (error) {
      console.error(`Skipping file ${file.path} due to error:`, error);
    }
  }

  return items;
}

/**
 * Parses date from metadata or falls back to file mtime
 */
function parseDate(dateStr: unknown, mtime: Date | null): Date {
  if (typeof dateStr === "string") {
    const date = new Date(dateStr);
    if (!isNaN(date.getTime())) {
      return date;
    }
  }
  return mtime || new Date();
}

/**
 * Parses tags from metadata
 */
function parseTags(tags: unknown): string[] {
  if (Array.isArray(tags)) {
    return tags.filter((tag): tag is string => typeof tag === "string");
  }
  if (typeof tags === "string") {
    return [tags];
  }
  return [];
}

/**
 * Converts ContentItem to ContentItemPreview
 */
export function toPreview(item: ContentItem): ContentItemPreview {
  return {
    slug: item.slug,
    title: item.title,
    date: item.date,
    summary: item.summary,
    tags: item.tags,
  };
}
