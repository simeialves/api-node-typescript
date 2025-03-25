import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";
describe("Cidades - Buscar Todos", () => {
  it("Buscando Todos os registros", async () => {
    const res1 = await testServer
      .post("/cidades")
      .send({ nome: "Belo Horizonte" });
    expect(res1.statusCode).toBe(StatusCodes.CREATED);
    expect(typeof res1.body).toBe("number");

    const resBusca = await testServer.get("/cidades");

    expect(Number(resBusca.headers["x-total-count"])).toBeGreaterThan(0);
    expect(resBusca.statusCode).toBe(StatusCodes.OK);
    expect(resBusca.body.length).toBeGreaterThan(0);
  });
});
