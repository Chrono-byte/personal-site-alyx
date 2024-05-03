import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import MarkdownBlock from "../../islands/MarkdownBlock.tsx";

export default function Home() {
  return (
    <div className="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["positions"]} fileID="philosophy.md" />

      <div className="flex justify-center items-center">
        <div className="flex flex-wrap gap-3 px-3 justify-center md:flex-nowrap md:gap-x-3 md:w-fit">
          <div className="gap-3 justify-center md:flex-nowrap md:max-w-7xl background-card text-white text-base md:[max-w-screen-2xl min-w-full] [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">
            <MarkdownBlock src="philosophy.md" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
