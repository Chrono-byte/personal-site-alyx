import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

export default function Home() {
  return (
    <div class="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["positions"]} />

      {/* index all files in static/md/ */}
      {/* then parse markdown */}

      i worky on website just go to{" "}
      <a href="https://github.com/Chrono-byte/personal-site-alyx/blob/main/static/md/politics.md">
        github
      </a>{" "}
      and{" "}
      <a href="https://github.com/Chrono-byte/personal-site-alyx/blob/main/static/md/philosophy.md">
        look
      </a>{" "}
      at the files

      <Footer />
    </div>
  );
}
