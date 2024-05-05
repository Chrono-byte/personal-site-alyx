import { JSX } from "preact/jsx-runtime";

export interface SplashText {
  "text": string;
  "render"?: (text: string) => JSX.Element;
}

const splashTexts: SplashText[] = [
  {
    "text": "Fully Stack-less Developer",
  },
  {
    "text": "hi chat\nbye chat\nhi again chat",
    render: (text: string) => (
      <div>
        {text.split("\n").map((line, index) => <p key={index}>{line}</p>)}
      </div>
    ),
  },
  {
    "text":
      "i changed my major to engineering technology because i hate programming",
    render: (text: string) => (
      <span title="oops i changed it back to compsci">{text}</span>
    ),
  },
  {
    "text": "soon™",
    render: (text: string) => {
      // make it so soontm strobes colors css
      return <span className="animate-pulse">{text}</span>;
    },
  },
  {
    "text": "if i'm not running down mid it's not me playing",
  },
  {
    "text": "programming 😎",
  },
  {
    "text": "i hate programming",
  },
];

export default splashTexts;
