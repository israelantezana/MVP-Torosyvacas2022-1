class TorosYVacasView {
  setPresenter(presenter) {
    this.presenter = presenter;
  }

  init() {
    const codigoSecretoForm = document.querySelector("#codigosecreto-form");
    const adivinarForm = document.querySelector("#adivinar-form");

    codigoSecretoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.presenter.botonCodigoSecretoPresionado();
    });

    adivinarForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.presenter.botonAdivinarPresionado();
    });
  }

  obtenerCodigoSecreto() {
    const codigoSecretoInput = document.querySelector("#codigosecreto");
    return codigoSecretoInput.value;
  }

  obtenerIntento() {
    const adivinarInput = document.querySelector("#adivinar");
    return adivinarInput.value;
  }

  mostrarPistas(pistas) {
    const div = document.querySelector("#resultado-div");
    div.innerHTML = "<p>" + pistas + "</p>";
  }
}

export default TorosYVacasView;
