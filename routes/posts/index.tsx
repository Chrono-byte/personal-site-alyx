import PostListItem from "../../components/Posts/PostListItem.tsx";
import { join } from "$std/path/mod.ts";

type Meta = {
  title?: string;
  date?: Date;
  summary?: string;
  tags?: string[] | string;
};

function parseFrontmatter(content: string): Partial<Meta> {
  const meta: Partial<Meta> = {};
  const m = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return meta;
  for (const raw of m[1].split(/\n/)) {
    const line = raw.trim();
    if (!line) continue;
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let val = line.slice(i + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (key === "date") {
      const d = new Date(val);
      if (!Number.isNaN(d.getTime())) meta.date = d;
    } else if (key === "title") {
      meta.title = val;
    } else if (key === "summary") {
      meta.summary = val;
    } else if (key === "tags") {
      try {
        meta.tags = JSON.parse(val);
      } catch {
        meta.tags = val.split(/,\s*/);
      }
    }
  }
  return meta;
}

import { define } from "../../utils.ts";

export default define.page(function PostsFeed() {
  const postsDir = join(Deno.cwd(), "static", "md") + "/";
  const files = [...Deno.readDirSync(postsDir)].filter((e) =>
    e.isFile && e.name.endsWith(".md")
  );
  files.sort((a, b) => {
    const aT = Deno.statSync(join(postsDir, a.name)).mtime?.getTime() ?? 0;
    const bT = Deno.statSync(join(postsDir, b.name)).mtime?.getTime() ?? 0;
    return bT - aT;
  });

  const items = files.map((f) => {
    try {
      const raw = Deno.readTextFileSync(join(postsDir, f.name));
      const meta = parseFrontmatter(raw);
      const slug = f.name.replace(/\.md$/i, "");
      const title = meta.title ?? slug;
      const date = meta.date ?? Deno.statSync(join(postsDir, f.name)).mtime ??
        new Date();
      const summary = meta.summary ?? "";
      const tags = Array.isArray(meta.tags)
        ? meta.tags
        : (typeof meta.tags === "string" ? [meta.tags] : []);

      return (
        <PostListItem
          key={f.name}
          slug={slug}
          title={title}
          date={date}
          summary={summary}
          tags={tags}
        />
      );
    } catch (err) {
      console.error("read post failed", f.name, err);
      return null;
    }
  }).filter(Boolean);

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto py-6 space-y-4">
        <header>
          <h1 className="text-2xl font-bold">Blog</h1>
          <p className="text-sm text-gray-400">
            A chronological feed of posts.
          </p>
        </header>

        <section className="flex flex-col divide-y divide-gray-700">
          {items.length
            ? items
            : <p className="text-gray-500">No posts yet.</p>}
        </section>
      </div>
    </div>
  );
});
