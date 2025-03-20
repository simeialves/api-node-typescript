import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";
describe("Cidades - Create", () => {
  it("Criar registro", async () => {
    const res1 = await testServer
      .post("/cidades")
      .send({ nome: "Belo Horizonte" });

    expect(res1.statusCode).toBe(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual("number");
  });

  it("Testar validação ao criar registros", async () => {
    const res1 = await testServer.post("/cidades").send({ nome: "" });

    expect(res1.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(res1.body).toEqual({
      body: {
        nome: "Deve ter pelo menos 3 caracteres",
      },
    });

    const res2 = await testServer.post("/cidades").send({});
    expect(res2.statusCode).toBe(StatusCodes.BAD_REQUEST);

    expect(res2.body).toEqual({
      body: {
        nome: "Este campo é obrigatório",
      },
    });

    const res3 = await testServer.post("/cidades").send({ nome: "BH" });
    expect(res3.statusCode).toBe(StatusCodes.BAD_REQUEST);

    expect(res3.body).toHaveProperty("body.nome");
  });
});
