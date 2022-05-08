import fs from "fs";
describe("Toros y Vacas UI", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });

  it("deberia mostrar el titulo del juego", () => {
    const titulo = document.querySelector("h1");
    expect(titulo.innerHTML).toEqual("Toros Y Vacas");
  });

  it("deberia empezar sin ninguna pista ni mensaje", () => {
    verificarResultado("");
  });

  it("deberia mostrar un toro cuando se intenta con un numero que coincide", () => {
    ingresarCodigoSecreto("21");
    adivinar("24");
    verificarResultado("<p>!</p>");
  });

  function ingresarCodigoSecreto(codigo) {
    const codigoSecreto = document.querySelector("#codigosecreto");
    const empezarBtn = document.querySelector("#empezarBtn");
    codigoSecreto.value = codigo;
    empezarBtn.click();
  }

  function adivinar(codigoIntento) {
    const intento = document.querySelector("#adivinar");
    const adivinarBtn = document.querySelector("#adivinarBtn");
    intento.value = codigoIntento;
    adivinarBtn.click();
  }

  function verificarResultado(cadenaResultante) {
    const resultado = document.querySelector("#resultado-div");
    console.log(resultado.innerHTML);

    expect(resultado.innerHTML).toEqual(cadenaResultante);
  }
});
