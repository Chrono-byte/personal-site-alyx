// file: src/pages/Home.tsx

import { define } from "../utils.ts";
import ProfileCard from "../components/AboutPage/ProfileCard.tsx";
import About from "../components/AboutPage/About.tsx";
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

export default define.page(function Home() {
  return (
    // This root container must be a flex column that grows to fill the body.
    <div className="flex-1 flex flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header />

      <div className="flex-1 min-h-0 flex justify-center py-0">
        <div className="flex flex-wrap gap-4 px-4 justify-center md:gap-6 md:px-6 md:flex-nowrap">
          <ProfileCard />
          <About />
        </div>
      </div>

      <Footer />
    </div>
  );
});
