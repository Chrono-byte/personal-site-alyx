import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ellie Alyx</title>
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
});
