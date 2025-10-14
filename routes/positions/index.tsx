import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import BackgroundCard from "../../components/BackgroundCard.tsx";

const linkStyle = "text-md font-bold text-violet-300 hover:text-white";

export default function Home() {
  return (
    <div className="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["positions"]} />

      <div className="flex justify-center items-center">
        <BackgroundCard>
          <h1 className="font-bold">
            Here you can find my thoughts and positions on various topics:
          </h1>

          <a href="/positions/philosophy" className={linkStyle}>
            Philosophy
          </a>
          <br />
          <a href="/positions/politics" className={linkStyle}>
            Politics
          </a>
        </BackgroundCard>
      </div>

      <Footer />
    </div>
  );
}
