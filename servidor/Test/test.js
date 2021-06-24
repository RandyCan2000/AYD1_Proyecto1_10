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

/**
 * Testing endpoint get que devuelve todos los empleados
 */
 describe("GET /empleados", () => {
    it("Responde con un json que contiene todos los usuarios", (done) => {
      request(app)
        .get("/empleados")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
    
 
  });
/**
 * Testing endpoint post para un reporte
 */
  describe("POST /reporte",() =>{
    it("Responder con un 400 si no se creo el reporte", (done) => {
        const reporte = {
            zona:"",
            fechaReporte:"",
            horaReporte:"",
            fechaProblema:"",
            horaProblema:"",
            descripcion:"",
            idTipoProblema:"",
            idUsuario:""
        };
        request(app)
          .post("/reporte")
          .send(reporte)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(400)
          .expect('"No se creo el reporte"')
          .end((err) => {
            if (err) return done(err);
            done();
          });
      });
  })
/**
 * Testing endpoint post para un mensaje
 */
  
  describe("POST /mensaje",() =>{
    it("Responder con un 400 si no se creo el mensaje", (done) => {
        const reporte = {
            descripcion:"",
            idReporte:"",
            idEmpleado:""
        };
        request(app)
          .post("/mensaje")
          .send(reporte)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(400)
          .expect('"No se creo el mensaje"')
          .end((err) => {
            if (err) return done(err);
            done();
          });
      });
  })
