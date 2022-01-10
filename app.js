import { Application, Router } from "https://deno.land/x/oak@v10.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

const jokes = JSON.parse(await Deno.readTextFile("jokes.json"));

const router = new Router();
router.get("/random", ({ response }) => {
  response.body = jokes[Math.floor(Math.random() * jokes.length)];
});

const app = new Application();
app.use(oakCors());
app.use(router.routes());

await app.listen({ port: 7777 });