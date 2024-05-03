import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

export default function Home() {
  return (
    <div class="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["positions"]} />

      <div class="flex justify-center items-center">
        <div class="background-card text-white shrink text-sm md:max-w-screen-xl [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">
          <a href="/positions/politics" class="hover:underline">
            politics.md
          </a>
          <br />
          <br />
          <a href="/positions/philosophy" class="hover:underline">
            philosophy.md
          </a>
        </div>
2      </div>

      <Footer />
    </div>
  );
}
