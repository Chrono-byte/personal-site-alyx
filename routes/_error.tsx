import { HttpError } from "fresh";
import { State } from "../utils.ts";

// this function generates random noise to display on error pages
function createRandomNoiseForError() {
  const noiseLines = [];
  const noiseChars = [".", ",", ":", ";", "*", "+", "%", "#", "@"];
  let line = "";
  for (let j = 0; j < 15; j++) {
    const char = noiseChars[Math.floor(Math.random() * noiseChars.length)];
    line += char;
  }
  noiseLines.push(line);
  return noiseLines.join("\n");
}

export default function ErrorPage(props: { error: Error; state: State }) {
  const error = props.error; // Contains the thrown Error or HTTPError
  if (error instanceof HttpError) {
    const status = error.status; // HTTP status code

    // Render a 404 not found page
    if (status === 404) {
      props.state.breadcrumb = {
        subdirectory: ["../.."],
        fileID: createRandomNoiseForError(),
      };

      return (
        <main className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Page not found</h1>
            <p className="text-gray-600">
              The page you're looking for doesn't exist.
            </p>
            <a
              href="/"
              className="text-blue-600 hover:text-blue-800 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 inline-block"
            >
              Go back home
            </a>
          </div>
        </main>
      );
    }
  }

  props.state.breadcrumb = {
    subdirectory: ["../.."],
    fileID: createRandomNoiseForError(),
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Oh no...</h1>
        <p className="text-gray-600">Something went wrong.</p>
        <a
          href="/"
          className="text-blue-600 hover:text-blue-800 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 inline-block"
        >
          Go back home
        </a>
      </div>
    </main>
  );
}
