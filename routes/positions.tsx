import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

export default function Home() {
  return (
    <div class="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["positions"]} />

      {/* index all files in static/md/ */}
      {/* then parse markdown */}

      <div class="flex justify-center items-center">

        <div class="background-card text-white shrink text-sm md:max-w-screen-xl [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">
          i worky on website just go to github and look at the files for{" "}
          <a
            class="text-blue-400"
            href="https://github.com/Chrono-byte/personal-site-alyx/blob/main/static/md/politics.md"
          >
            philosophy
          </a>{" "}
          and{"  "}
          <a
            class="text-blue-400"
            href="https://github.com/Chrono-byte/personal-site-alyx/blob/main/static/md/philosophy.md"
          >
            politics
          </a>
          .
        </div>
      </div>

      <Footer />
    </div>
  );
}
