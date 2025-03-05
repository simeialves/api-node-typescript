import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (req, res) => {
  res.send("Olá Dev!");
});

router.post("/teste/:id", (req, res) => {
  console.log(req.params.id);

  return res.status(StatusCodes.ACCEPTED).json(req.body);
});

export { router };
