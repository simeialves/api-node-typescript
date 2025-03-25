import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";
describe("Cidades - Update", () => {
  it("Atualiza um registro", async () => {
    const res1 = await testServer
      .post("/cidades")
      .send({ nome: "Belo Horizonte" });
    expect(res1.statusCode).toBe(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual("number");

    const resBusca = await testServer
      .put(`/cidades/${res1.body}`)
      .send({ nome: "Beagá" });

    expect(resBusca.statusCode).toBe(StatusCodes.NO_CONTENT);
  });

  it("Atualizar registro - ID inválido", async () => {
    const res1 = await testServer
      .put("/cidades/99999")
      .send({ nome: "Belo Horizonte" });

    expect(res1.statusCode).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty("errors.default");
  });

  it("Atualizar registro - Erro de validação nome curto", async () => {
    const res1 = await testServer.put("/cidades/1").send({ nome: "BH" });

    expect(res1.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty("body.nome");
  });

  it("Atualizar registro - Erro de validação sem campo nome", async () => {
    const res1 = await testServer.put("/cidades/1").send({ nomee: "BH" });

    expect(res1.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty("body.nome");
  });
});
