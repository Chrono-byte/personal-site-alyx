import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";
import ProfileCard from "../components/AboutPage/ProfileCard.tsx";
import About from "../components/AboutPage/About.tsx";

export default function Home() {
  return (
    <div class="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header />

      <div class="flex justify-center items-center">
        <div class="shrink flex flex-wrap gap-1 pl-3 pr-1 md:flex-nowrap md:gap-3 md:pl-3 md:pr-3 md:max-w-screen-xl">
          <ProfileCard />

          <About />
        </div>
      </div>

      <Footer />
    </div>
  );
}
