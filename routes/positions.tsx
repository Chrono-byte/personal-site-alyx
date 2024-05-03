import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

export default function Home() {
  return (
    <div className="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["positions"]} />

      <div className="flex justify-center items-center">
        <div className="background-card text-white shrink text-sm md:[max-w-screen-3xl min-w-2xl] [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">
          <div className="intro">
            <p>
              Here you can find my thoughts and positions on various topics:
            </p>
          </div>

          <div className={"items-center pt-3"}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-4">
                <a href="/positions/philosophy" className="text-md">
                  Philosophy
                </a>
                <a href="/positions/politics" className="text-md">
                  Politics
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
