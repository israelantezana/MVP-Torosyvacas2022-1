#### Patron MVP (Model View Presenter)

Se refactorizó el presenter para extraer la vista y presentador de forma que la estructura del patrón este más clara.

Ver: mvp.js que se invoca desde index.html, con el siguiente código:

const view = new TorosYVacasView();
const model = new TorosYVacas();
const presenter = new TorosYVacasPresenter(view, model);
view.setPresenter(presenter);
view.init();

#### Para instalar las dependencias:

npm install

#### Comandos de uso:

Ejecutar web-sever local parcel:
npm start

Ejecutar pruebas de unidad de forma continua --watch:
npm test

Ejecutar pruebas de unidad solo una vez:
npm run test-once
