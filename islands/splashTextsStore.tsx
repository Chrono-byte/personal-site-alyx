import { JSX } from "preact/jsx-runtime";

export interface SplashText {
  "text": string;
  "render"?: (text: string) => JSX.Element;
  "preConEffects"?: {
    "rainbow": boolean
  };
}

const splashTexts: SplashText[] = [
  {
    "text": "Stack-less Developer",
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
    "text": "i hate programming",
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
    "preConEffects": {
      "rainbow": true,
    },
  },
  {
    "text": "if i'm not running down mid it's not me playing",
  },
  {
    "text": "programming 😎",
  },
  {
    "text": "I'm going full silly",
  },
];

export default splashTexts;
