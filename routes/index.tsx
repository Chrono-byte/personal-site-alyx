import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";
import ProfileCard from "../components/ProfileCard.tsx";
import About from "../components/About.tsx";

export default function Home() {
  return (
    <div class="flex-col mx-8 my-4">
      <Header />

      <div class="shrink flex flex-row flex-wrap gap-3 pl-3 pr-3">
          <ProfileCard />

          <About />
      </div>

      <Footer />
    </div>
  );
}
