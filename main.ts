import { App, staticFiles } from "fresh";
import { trailingSlashes } from "fresh";
import type { State } from "./utils.ts";

export const app = new App<State>({
  // Use Deno.env.get() with a fallback to prevent crashing
  basePath: Deno.env.get("BASE_PATH") || "",
})
  .use(trailingSlashes("never"))
  .fsRoutes()
  .use(staticFiles());
