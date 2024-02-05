import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer/Footer.tsx";
import Header from "../components/Header/Header.tsx";

export default function Error404() {
  return (
    <div class="flex-auto mx-8 my-4">
      <Head>
        <title>404 - Page not found</title>
      </Head>

      <Header />

      <div class="px-4 py-8 mx-auto col-span-3 row-span-1">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">404 - Page not found</h1>
          <p class="my-4">
            The page you were looking for doesn't exist.
          </p>
          <a href="/" class="underline">Go back home</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
