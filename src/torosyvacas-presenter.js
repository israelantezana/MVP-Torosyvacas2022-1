class TorosYVacasPresenter {
  constructor(view, model) {
    this.view = view;
    this.torosyvacas = model;
  }

  botonCodigoSecretoPresionado() {
    const codigo = this.view.obtenerCodigoSecreto();
    this.torosyvacas.setCodigoSecreto(codigo);
  }

  botonAdivinarPresionado() {
    const intento = this.view.obtenerIntento();
    const pistas = this.torosyvacas.adivinar(intento);
    this.view.mostrarPistas(pistas);
  }
}

export default TorosYVacasPresenter;
