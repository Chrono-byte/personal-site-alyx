// file: src/pages/Home.tsx

import { define } from "../utils.ts";
import ProfileCard from "../components/AboutPage/ProfileCard.tsx";
import About from "../components/AboutPage/About.tsx";
import ScaleToFit from "../islands/ScaleToFit.tsx";
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

export default define.page(function Home() {
  return (
    // This root container must be a flex column that grows to fill the body.
    <div className="flex-1 flex flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header />

      {
        /* This is the main content area.
          - `flex-1` makes it grow to fill the space between the header and footer.
          - `min-h-0` is a crucial flexbox fix that allows the container to shrink
            if its content is too large, preventing overflow. */
      }
      <div className="flex-1 min-h-0 flex justify-center items-center py-4">
        <ScaleToFit>
          <div className="flex shrink flex-wrap gap-1 md:gap-y-0 md:gap-x-3 px-3 justify-center md:flex-nowrap">
            <ProfileCard />
            <About />
          </div>
        </ScaleToFit>
      </div>

      <Footer />
    </div>
  );
});
