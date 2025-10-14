import { App, staticFiles } from "fresh";
import { trailingSlashes } from "fresh";
import type { State } from "./utils.ts";

export const app = new App<State>({
  basePath: import.meta.env.BASE_PATH || "",
})
  .use(trailingSlashes("never"))
  .fsRoutes()
  .use(staticFiles());
