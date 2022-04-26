class TorosYVacas {
  constructor(codigoSecreto) {
    this.codigoSecreto = codigoSecreto;
  }
  adivinar(intento) {
    if (intento === this.codigoSecreto) {
      return "Ganaste!";
    }
    let pistas = "";
    for (var i = 0; i < this.codigoSecreto.length; i++) {
      if (this.codigoSecreto[i] === intento[i]) {
        pistas += "!";
      } else {
        if (this.codigoSecreto.includes(intento[i])) {
          pistas += "*";
        }
      }
    }
    return pistas;
  }
}

export default TorosYVacas;
