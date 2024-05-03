import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import MarkdownBlock from "../../islands/MarkdownBlock.tsx";

export default function Home() {
  return (
    <div class="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["positions"]} fileID="politics.md" />

      <div class="background-card text-white shrink text-base md:max-w-screen-xl [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">
        <MarkdownBlock src="politics.md" />
      </div>

      <Footer />
    </div>
  );
}
