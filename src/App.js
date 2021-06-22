import { Principal } from "./componentes/Principal";
import { Cabecera } from "./componentes/Cabecera";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { Formulario } from "./componentes/Formulario";
import { Lista } from "./componentes/Lista";
import { AcercaDe } from "./componentes/AcercaDe";

function App() {
  return (
    <>
      <Router>
        <Cabecera />
        <Switch>
          <Route path="/principal" exact>
            <Principal />
          </Route>
          <Route path="/lista" exact>
            <Lista />
          </Route>
          <Route path="/acercade" exact>
            <AcercaDe />
          </Route>
          <Route path="/" exact>
            <Redirect to="/principal" />
          </Route>
        </Switch>
      </Router>
      {/*====================FORMULARIO======================*/}
      <Formulario />
      {/*====================FORMULARIO======================*/}
    </>
  );
}

export default App;
