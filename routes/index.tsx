import { define } from "../utils.ts";
import About from "../components/AboutPage/About.tsx";
import { type PostPreview, readLatestPostPreview } from "./lib/posts.ts";

export default define.page(function Home() {
  const latestPost = readLatestPostPreview();

  return (
    <>
      {latestPost
        ? <About postPreview={latestPost as PostPreview} />
        : <p className="text-gray-500">No recent posts available.</p>}
    </>
  );
});
