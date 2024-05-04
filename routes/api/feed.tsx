import { FreshContext } from "$fresh/server.ts";
import path from "node:path";

/**
 * Represents the metadata for a post.
 */
export interface Metadata {
  "title": string; // This is used as the title of the post
  "id": string; // This is used as the file name in the breadcrumb header
  "tags": string[] | string; // This is used to categorize the post
  "date": string | Date; // This is used to display the last edited date
}

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  // prepare posts directory path
  const postsDir = path.join(Deno.cwd(), "static/md") + "/";

  // get all posts
  const posts = Deno.readDirSync(postsDir);

  // create array of posts
  const postsArray = [];
  for (const post of posts) {
    postsArray.push(post);
  }

  // sort by date
  postsArray.sort((a, b) => {
    const dateA = Deno.statSync(postsDir + a.name).mtime?.getMilliseconds();
    const dateB = Deno.statSync(postsDir + b.name).mtime?.getMilliseconds();
    if (dateA === undefined || dateB === undefined) return 0;
    return dateB - dateA;
  });

  // limit to 10
  const limitedPosts = postsArray.slice(0, 10);

  // convert obj to RSS feed
  const body = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>My RSS Feed</title>
      <link>http://${_req.headers.get("host")}/</link>
      <description></description>
      ${
    limitedPosts.map((post, i) => {
      const postContent = Deno.readFileSync(postsDir + post).toString();

      console.log(postContent);

      const metadata: Partial<Metadata> = {};
      const metadataBlock = postContent.match(/^---\n(.*?)\n---\n/s);

      if (metadataBlock) {
        const metadataLines = metadataBlock[1].split("\n");

        for (const line of metadataLines) {
          const [key, value] = line.split(": ");
          if (key && value) {
            metadata[key as keyof Metadata] = value;
          }
        }

        if (metadata.tags && typeof metadata.tags === "string") {
          metadata.tags = JSON.parse(metadata.tags);
        }

        if (metadata.date) {
          const stats = Deno.statSync(postsDir + post).mtime;

          metadata.date = stats ? stats : new Date(metadata.date);
        }

        // check that metadata fully matches the Metadata interface
        if (
          !metadata.id || !metadata.date || !metadata.title || !metadata.tags
        ) {
          throw new Error(
            `Metadata for post ${i + 1} is missing required fields.`,
          );
        }
      }

      const link = `http://${_req.headers.get("host")}/${metadata.tags[0]}/${
        metadata.id ? metadata.id.replace(".md", "") : ""
      }`;
      return `
          <item>
            <title>${metadata.title || `Post ${i + 1}`}</title>
            <link>${link}</link>
          </item>
          `;
    }).join("")
  }
    </channel>
  </rss>`;

  return new Response(body);
};
