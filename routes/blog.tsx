import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

export default function Home() {
  return (
    <div class="flex-auto mx-8 my-4">
    <Header subdirectory={["blog"]} />

      <Footer />
    </div>
  );
}
