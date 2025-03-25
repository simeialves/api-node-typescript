import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";
describe("Cidades - Buscando Por ID", () => {
  it("Buscando Por ID", async () => {
    const res1 = await testServer
      .post("/cidades")
      .send({ nome: "Belo Horizonte" });
    expect(res1.statusCode).toBe(StatusCodes.CREATED);

    const resBusca = await testServer.get(`/cidades/${res1.body}`).send();

    expect(resBusca.statusCode).toBe(StatusCodes.OK);
    expect(typeof resBusca.body).toEqual("object");
  });

  it("Buscando Por ID - ID Inválido", async () => {
    const res1 = await testServer.get("/cidades/99999");

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty("errors.default");
  });
});
