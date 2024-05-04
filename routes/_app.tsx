import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html lang="en-US">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Michael Gummere</title>

        <link rel="stylesheet" href="/styles.css" />
        <meta name="description" content="Hi I'm Michael." />
      </head>
      <body
        style={{
          color: "#363f47",
          backgroundColor: "#e9debb",
          fontSize: "calc(0.63rem + 0.2vw)",
          lineHeight: "calc(calc(0.63rem + 2.2vw) * .6)",
        }}
        className="font-mono"
      >
        <Component />
      </body>
    </html>
  );
}
