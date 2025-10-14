import { define } from "../utils.ts";
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

export default define.page(function App({ Component }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Personal website of Ellie, a software developer and computer science student."
        />
        <meta name="author" content="Ellie" />
        <title>Ellie</title>
      </head>
      <body
        style={{
          color: "#363f47",
          backgroundColor: "#f3dfc1",
          // fontSize: "calc(0.63rem + 0.2vw)",
          lineHeight: "calc(calc(0.63rem + 2.2vw) * .6)",
        }}
        className="font-mono md:text-sm min-h-screen flex flex-col [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>
        <div className="flex-1 flex flex-col px-4 pt-4 md:px-8 lg:px-16">
          <Header />
          <div className="flex-1 min-h-0 flex justify-center py-0">
            <main id="main-content" className="w-full max-w-6xl">
              <Component />
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
});
