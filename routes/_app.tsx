import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html lang="en-US">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="/styles.css" />

        {/* check page url, if in api, remove */}
        <title>unknownhost.name</title>
        {/* <meta name="description" content="Hi I'm Ellie." /> */}
      </head>
      <body
        style={{
          color: "#363f47",
          backgroundColor: "#e9debb",
          // fontSize: "calc(0.63rem + 0.2vw)",
          lineHeight: "calc(calc(0.63rem + 2.2vw) * .6)",
        }}
        className="font-mono md:test-sm"
      >
        <Component />
      </body>
    </html>
  );
}
