const request = require("supertest");

const app = require("../dist/index");

/**
 * Testing endpoint get que devuelve todos los usuarios
 */
describe("GET /usuarios", () => {
  it("Responde con un json que contiene todos los usuarios", (done) => {
    request(app)
      .get("/usuarios")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});