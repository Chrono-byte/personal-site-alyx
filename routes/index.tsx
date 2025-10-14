import { define } from "../utils.ts";
import About from "../components/AboutPage/About.tsx";
import { readLatestPostPreviews } from "./lib/posts.ts";

export default define.page(function Home() {
  const latestPosts = readLatestPostPreviews(2);

  return (
    <>
      {latestPosts.length > 0
        ? <About postPreviews={latestPosts} />
        : <p className="text-gray-500">No recent posts available.</p>}
    </>
  );
});
