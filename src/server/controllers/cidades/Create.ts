import { Request, Response } from "express";

interface ICidade {
  nome: string;
}

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
  const { nome }: ICidade = req.body;

  if (!nome) {
    return res.status(400).json({ error: "Nome da cidade é obrigatório" });
  }

  return res.status(201).json({ message: "Cidade criada com sucesso" });
};
