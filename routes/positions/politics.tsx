import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import MarkdownBlock from "../../islands/MarkdownBlock.tsx";

export default function Home() {
  return (
    <div className="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["positions"]} fileID="politics.md" />

      <div className="flex justify-center items-center">
        <div className="gap-3 md:flex-nowrap md:max-w-7xl">
          <div className="background-card text-white shrink text-base md:max-w-screen-2xl text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)">
            <MarkdownBlock src="politics.md" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
