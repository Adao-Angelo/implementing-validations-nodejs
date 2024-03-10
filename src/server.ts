import express from "express";
import { router } from "./router";

const app = express();
app.use(express.json());

app.use(router);

app.listen(2000, () => {
  console.log("server running");
});
