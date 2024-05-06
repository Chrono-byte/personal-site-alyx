import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";
import ProfileCard from "../components/AboutPage/ProfileCard.tsx";
import About from "../components/AboutPage/About.tsx";

export default function Home() {
  return (
    <div className="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header />

      <div className="flex justify-center items-center">
        <div className="flex shrink flex-wrap gap-1 md:gap-y-0 md:gap-x-3 px-3 justify-center md:flex-nowrap">
          <ProfileCard />

          <About />
        </div>
      </div>

      <Footer />
    </div>
  );
}
