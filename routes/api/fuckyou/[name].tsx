import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div>fuck you {props.params.name}</div>;
}
