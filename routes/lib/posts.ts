import { join } from "$std/path/mod.ts";
import { readContentItems, toPreview } from "./content.ts";

export interface Metadata {
  title?: string;
  date?: string;
  tags?: string[] | string;
  summary?: string;
  [key: string]: unknown;
}

export interface PostPreview {
  name: string;
  title: string;
  date: Date;
  summary: string;
  tags: string[];
}

export function listMarkdownFilesSorted(
  dir: string,
): Array<{ name: string; mtime: Date | null }> {
  try {
    return [...Deno.readDirSync(dir)]
      .filter((entry) => entry.isFile && entry.name.endsWith(".md"))
      .map((entry) => ({
        name: entry.name,
        mtime: Deno.statSync(join(dir, entry.name)).mtime,
      }))
      .sort((a, b) => (b.mtime?.getTime() ?? 0) - (a.mtime?.getTime() ?? 0));
  } catch {
    return [];
  }
}

export function parseFrontmatter(content: string): Metadata {
  const metadata: Metadata = {};
  const match = content.match(/^-{3}\s*\r?\n([\s\S]*?)\r?\n-{3}/m);

  if (!match) return metadata;

  const block = match[1];
  block.split(/\r?\n/).forEach((raw) => {
    const line = raw.trim();
    if (!line || line.startsWith("#")) return;

    const idx = line.indexOf(":");
    if (idx === -1) return;

    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();

    // Strip surrounding quotes if present
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key === "tags") {
      try {
        metadata[key] = JSON.parse(value);
      } catch {
        metadata[key] = value;
      }
    } else if (key === "date") {
      metadata[key] = value; // Keep as string for flexibility
    } else {
      metadata[key] = value;
    }
  });

  return metadata;
}

export function readLatestPostPreviews(limit = 1): PostPreview[] {
  try {
    const postsDir = join(Deno.cwd(), "static", "md");
    const items = readContentItems(postsDir);
    const previews = items.slice(0, limit).map(toPreview).map((item) => ({
      name: item.slug,
      title: item.title,
      date: item.date,
      summary: item.summary,
      tags: item.tags,
    }));

    return previews;
  } catch (error) {
    console.error("Error reading latest posts:", error);
    return [];
  }
}

export function readLatestPostPreview(): PostPreview | undefined {
  const previews = readLatestPostPreviews(1);
  return previews[0];
}

export async function getAllPostPreviews(): Promise<PostPreview[]> {
  const postsDir = join(Deno.cwd(), "static", "md");
  const files = listMarkdownFilesSorted(postsDir);

  const allPreviews: PostPreview[] = [];

  for (const file of files) {
    const rawContent = await Deno.readTextFile(join(postsDir, file.name));
    const metadata = parseFrontmatter(rawContent);

    allPreviews.push({
      name: file.name.replace(/\.md$/i, ""),
      title: metadata.title ?? "Untitled Post",
      date: metadata.date ? new Date(metadata.date) : new Date(),
      summary: metadata.summary ?? "No summary available.",
      tags: Array.isArray(metadata.tags)
        ? metadata.tags
        : (typeof metadata.tags === "string" ? [metadata.tags] : []),
    });
  }

  return allPreviews;
}

export async function getPostPreviewByName(
  name: string,
): Promise<PostPreview | undefined> {
  const postsDir = join(Deno.cwd(), "static", "md");
  const filePath = join(postsDir, `${name}.md`);

  try {
    const rawContent = await Deno.readTextFile(filePath);
    const metadata = parseFrontmatter(rawContent);

    return {
      name: filePath,
      title: metadata.title ?? "Untitled Post",
      date: metadata.date ? new Date(metadata.date) : new Date(),
      summary: metadata.summary ?? "No summary available.",
      tags: Array.isArray(metadata.tags)
        ? metadata.tags
        : (typeof metadata.tags === "string" ? [metadata.tags] : []),
    };
  } catch {
    return undefined;
  }
}
