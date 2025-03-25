import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";
describe("Cidades - Delete", () => {
  it("Deletar registro", async () => {
    const res1 = await testServer.post("/cidades").send({
      nome: "Cidade Teste",
    });

    expect(res1.statusCode).toBe(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual("number");

    const resApagada = await testServer.delete(`/cidades/${res1.body}`).send();

    expect(resApagada.statusCode).toBe(StatusCodes.NO_CONTENT);
  });

  it("Deletar registro - ID inexistente", async () => {
    const res1 = await testServer.delete("/cidades/99999").send();

    expect(res1.statusCode).toBe(StatusCodes.NOT_FOUND);
    expect(res1.body).toHaveProperty("errors.default");
  });
});
