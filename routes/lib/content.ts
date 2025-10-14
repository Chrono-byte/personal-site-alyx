import { join } from "$std/path/mod.ts";
import { Metadata, parseFrontmatter } from "./posts.ts";

export interface ContentItem {
  slug: string;
  title: string;
  date: Date;
  summary?: string;
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
  try {
    const rawContent = Deno.readTextFileSync(filePath);
    const metadata = parseFrontmatter(rawContent);

    // Extract content after frontmatter
    const frontmatterMatch = rawContent.match(
      /^-{3}\s*\r?\n([\s\S]*?)\r?\n-{3}/m,
    );
    const content = frontmatterMatch
      ? rawContent.slice(frontmatterMatch[0].length)
      : rawContent;

    return { content, metadata };
  } catch (error) {
    console.error(`Failed to read markdown file: ${filePath}`, error);
    throw error;
  }
}

/**
 * Lists markdown files in a directory, sorted by modification time (newest first)
 */
export function listMarkdownFiles(
  dir: string,
): Array<{ name: string; path: string; mtime: Date | null }> {
  try {
    return [...Deno.readDirSync(dir)]
      .filter((entry) => entry.isFile && entry.name.endsWith(".md"))
      .map((entry) => {
        const path = join(dir, entry.name);
        const stat = Deno.statSync(path);
        return {
          name: entry.name,
          path,
          mtime: stat.mtime,
        };
      })
      .sort((a, b) => (b.mtime?.getTime() ?? 0) - (a.mtime?.getTime() ?? 0));
  } catch (error) {
    console.error(`Failed to list markdown files in ${dir}:`, error);
    return [];
  }
}

/**
 * Reads content items from a directory of markdown files
 */
export function readContentItems(dir: string): ContentItem[] {
  const files = listMarkdownFiles(dir);

  return files.map((file) => {
    const { content, metadata } = readMarkdownFile(file.path);
    const slug = file.name.replace(/\.md$/i, "");
    const title = metadata.title ?? slug;
    const date = metadata.date
      ? new Date(metadata.date)
      : (file.mtime ?? new Date());
    const summary = metadata.summary ?? "";
    const tags = Array.isArray(metadata.tags)
      ? metadata.tags
      : (typeof metadata.tags === "string" ? [metadata.tags] : []);

    return {
      slug,
      title,
      date,
      summary,
      tags,
      content,
      metadata,
    };
  });
}

/**
 * Converts ContentItem to ContentItemPreview
 */
export function toPreview(item: ContentItem): ContentItemPreview {
  return {
    slug: item.slug,
    title: item.title,
    date: item.date,
    summary: item.summary ?? "",
    tags: item.tags,
  };
}
