import { join } from "$std/path/mod.ts";

export interface PostPreview {
  name: string;
  title: string;
  date: Date;
  summary: string;
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

export function parseFrontmatter(content: string): Partial<PostPreview> {
  const metadata: Partial<PostPreview> = {};
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

    switch (key) {
      case "title":
        metadata.title = value;
        break;
      case "date": {
        const parsedDate = new Date(value);
        if (!Number.isNaN(parsedDate.getTime())) {
          metadata.date = parsedDate;
        }
        break;
      }
      case "summary":
        metadata.summary = value;
        break;
    }
  });

  return metadata;
}

export function readLatestPostPreview(): PostPreview | undefined {
  try {
    const postsDir = join(Deno.cwd(), "static", "md");
    const files = listMarkdownFilesSorted(postsDir);

    if (files.length === 0) return undefined;

    const latestFile = files[0];
    const rawContent = Deno.readTextFileSync(join(postsDir, latestFile.name));
    const metadata = parseFrontmatter(rawContent);

    return {
      name: latestFile.name.replace(/\.md$/i, ""),
      title: metadata.title ?? "Untitled Post",
      date: metadata.date ?? new Date(),
      summary: metadata.summary ?? "No summary available.",
    };
  } catch (error) {
    console.error("Error reading latest post:", error);
    return undefined;
  }
}
