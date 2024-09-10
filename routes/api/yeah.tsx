import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <div>
      <img id="image" src="../yeah.png" />
    </div>
  );
}
