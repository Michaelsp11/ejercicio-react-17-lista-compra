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
      <Cabecera />
      <Router>
        <Switch>
          <Route path="/principal" exact>
            <Principal />
          </Route>
          <Route path="/" exact>
            <Redirect to="/principal" />
          </Route>
          <Route path="**" exact>
            <Redirect to="/principal" />
          </Route>
        </Switch>
      </Router>
      {/*====================ACERCA DE======================*/}
      <AcercaDe />
      {/*====================ACERCA DE======================*/}
      {/*====================LISTA======================*/}
      <Lista />
      {/*====================LISTA======================*/}
      {/*====================FORMULARIO======================*/}
      <Formulario />
      {/*====================FORMULARIO======================*/}
    </>
  );
}

export default App;
