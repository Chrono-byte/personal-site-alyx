import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";
import ProfileCard from "../components/ProfileCard.tsx";
import About from "../components/About.tsx";

export default function Home() {
  return (
    <div class="flex-1 mx-8 my-4">
      <Header />

      <div class="shrink flex gap-2 pl-6 pr-6">
          <ProfileCard />

          <About />
      </div>

      <Footer />
    </div>
  );
}
