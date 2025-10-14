import { define } from "../utils.ts";
import ProfileCard from "../components/AboutPage/ProfileCard.tsx";
import About from "../components/AboutPage/About.tsx";
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";
import { join } from "$std/path/mod.ts";

export interface PostPreview {
  name: string;
  title: string;
  date: Date;
  summary: string;
}

function listMarkdownFilesSorted(dir: string) {
  try {
    const entries = [...Deno.readDirSync(dir)]
      .filter((e) => e.isFile && e.name.endsWith(".md"))
      .map((e) => ({ name: e.name, mtime: Deno.statSync(join(dir, e.name)).mtime }))
      .sort((a, b) => (b.mtime?.getTime() ?? 0) - (a.mtime?.getTime() ?? 0));
    return entries;
  } catch (_err) {
    // Directory missing or unreadable
    return [] as Array<{ name: string; mtime: Date | null }>;
  }
}

function parseFrontmatter(content: string): Partial<PostPreview> {
  const metadata: Partial<PostPreview> = {};
  const match = content.match(/^-{3}\s*\r?\n([\s\S]*?)\r?\n-{3}/m);
  if (!match) return metadata;

  const block = match[1];
  const lines = block.split(/\r?\n/);
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    // strip surrounding quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (key === "title") metadata.title = value;
    else if (key === "date") {
      const d = new Date(value);
      if (!Number.isNaN(d.getTime())) metadata.date = d;
    } else if (key === "summary") metadata.summary = value;
  }

  return metadata;
}

function readLatestPostPreview(): PostPreview | undefined {
  try {
    const postsDir = join(Deno.cwd(), "static", "md");
    const files = listMarkdownFilesSorted(postsDir);
    if (files.length === 0) return undefined;

    const latest = files[0];
    const raw = Deno.readTextFileSync(join(postsDir, latest.name));
    const meta = parseFrontmatter(raw);

    return {
      name: latest.name.replace(/\.md$/i, ""),
      title: meta.title ?? "Untitled Post",
      date: meta.date ?? new Date(),
      summary: meta.summary ?? "No summary available.",
    };
  } catch (err) {
    console.error("Error reading latest post:", err);
    return undefined;
  }
}

export default define.page(function Home() {
  const latestPost = readLatestPostPreview();

  return (
    // This root container must be a flex column that grows to fill the body.
    <div className="flex-1 flex flex-col px-4 pt-4 md:px-8 lg:px-16">
      <Header />

      <div className="flex-1 min-h-0 flex justify-center py-0">
        <main className="flex flex-col md:flex-row gap-4 md:gap-6 px-2 justify-center items-start">
          <ProfileCard />
          {latestPost
            ? <About latestPost={latestPost} />
            : <p className="text-gray-500">No recent posts available.</p>}
        </main>
      </div>

      <Footer />
    </div>
  );
});
