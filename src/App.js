import { Cabecera } from "./componentes/Cabecera";
import { PaginaPrincipal } from "./paginas/PaginaPrincipal";
import { PaginaFormulario } from "./paginas/PaginaFormulario";
import { PaginaLista } from "./paginas/PaginaLista";
import { PaginaAcercaDe } from "./paginas/PaginaAcercaDe";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Cabecera />
        <Switch>
          <Route path="/principal" exact>
            <PaginaPrincipal />
          </Route>
          <Route path="/lista" exact>
            <PaginaLista />
          </Route>
          <Route path="/acercade" exact>
            <PaginaAcercaDe />
          </Route>
          <Route path="/crear-articulo" exact>
            <PaginaFormulario />
          </Route>
          <Route path="/" exact>
            <Redirect to="/principal" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
