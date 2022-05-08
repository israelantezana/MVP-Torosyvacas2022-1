import TorosYVacas from "./torosyvacas";
import TorosYVacasView from "./torosyvacas-view";
import TorosYVacasPresenter from "./torosyvacas-presenter";

const view = new TorosYVacasView();
const model = new TorosYVacas();
const presenter = new TorosYVacasPresenter(view, model);
view.setPresenter(presenter);
view.init();
