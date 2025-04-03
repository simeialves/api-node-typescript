import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadesController } from "../controllers/index.js";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Olá Dev!");
});

router.get("/ping", (_, res) => {
  return res.status(StatusCodes.OK).send("pong");
});

router.get(
  "/cidades",
  CidadesController.getAllValidation,
  CidadesController.getAll
);

router.post(
  "/cidades",
  CidadesController.createValidation,
  CidadesController.create
);

router.get(
  "/cidades/:id",
  CidadesController.getByIdValidation,
  CidadesController.getById
);

router.put(
  "/cidades/:id",
  CidadesController.updateByIdValidation,
  CidadesController.updateById
);
router.delete(
  "/cidades/:id",
  CidadesController.deleteByIdValidation,
  CidadesController.deleteById
);

export { router };
