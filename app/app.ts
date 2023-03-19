// initialize application

import express, { Express, Request, Response } from "express";

import { mustInitSettings } from "./config";

const app: Express = express();
const settings = mustInitSettings();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(settings.appPort, () => {
  console.log(`⚡️ Example app listening on port ${settings.appPort}`);
});
