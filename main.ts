import { App, staticFiles } from "fresh";
import { trailingSlashes } from "fresh";
import type { State } from "./utils.ts";

export const app = new App<State>()
  .use(trailingSlashes("never"))
  .fsRoutes()
  .use(staticFiles());
