import { App, staticFiles } from "fresh";
import { define, type State } from "./utils.ts";

export const app = new App<State>({
  basePath: import.meta.env.BASE_PATH || "",
});

app.use(staticFiles());

// // this can also be defined via a file. feel free to delete this!
// const exampleLoggerMiddleware = define.middleware((ctx) => {
//   console.log(`${ctx.req.method} ${ctx.req.url}`);
//   return ctx.next();
// });
// app.use(exampleLoggerMiddleware);

app.fsRoutes();
