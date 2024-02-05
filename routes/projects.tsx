import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

export default function Home() {
  return (
    <div class="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["projects"]} />

      <Footer />
    </div>
  );
}
