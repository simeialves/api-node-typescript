import { Router } from "express";
import { CidadesController } from "../controllers/index.js";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Olá Dev!");
});

router.post(
  "/cidades",
  CidadesController.createValidation,
  CidadesController.create
);

export { router };
