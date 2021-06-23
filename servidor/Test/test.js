const request = require("supertest");

const app = require("../dist/index");

/**
 * Testing get all user endpoint
 */
describe("GET /usuarios", () => {
  it("respond with json containing a list of all users", (done) => {
    request(app)
      .get("/usuarios")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});