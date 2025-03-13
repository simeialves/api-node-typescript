import { Router } from "express";
import { CidadesController } from "../controllers/index.js";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Olá Dev!");
});

router.post(
  "/cidades",
  CidadesController.createBodyValidator,
  CidadesController.createQueryValidator,
  CidadesController.create
);

export { router };
