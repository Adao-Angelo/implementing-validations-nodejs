import { Router } from "express";
import { validate } from "./validation";

const router = Router();

router.post("/users", validate({}), (request, response) => {
  response.json(request.body).status(201);
});

export { router };
