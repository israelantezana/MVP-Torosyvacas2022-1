class TorosYVacas {
  constructor(codigoSecreto) {
    this.codigoSecreto = codigoSecreto;
  }
  adivinar(intento) {
    let output = "";
    if (intento === this.codigoSecreto) {
      return "Ganaste!";
    }
    for (var i = 0; i < this.codigoSecreto.length; i++) {
      if (this.codigoSecreto.includes(intento[i])) {
        output += "*";
      }
    }
    return output;
  }
}

export default TorosYVacas;
