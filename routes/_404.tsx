import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer/Footer.tsx";
import Header from "../components/Header/Header.tsx";

export default function Error404() {
  return (
    <div className="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Head>
        <title>404 - Page not found</title>
      </Head>

      <Header />

      <div className="px-4 py-8 mx-auto col-span-3 row-span-1">
        <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            className="my-6"
            src="/svg/logo.svg"
            width="128"
            height="128"
            alt="stylized letter C emblem"
          />
          <h1 className="text-4xl font-bold">404 - Page not found</h1>
          <p className="my-4">
            The page you were looking for doesn't exist.
          </p>
          <a href="/" className="underline">Go back home</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
