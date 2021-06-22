
import { Principal } from "./componentes/Principal";
import { Cabecera } from "./componentes/Cabecera";
import { Formulario } from "./componentes/Formulario";
import { Lista } from "./componentes/Lista";
import { AcercaDe } from "./componentes/AcercaDe";

function App() {
  return (
    <>
      {/*====================CABECERA======================*/}
      <Cabecera />
      {/*====================CABECERA======================*/}
      {/*====================PRINCIPAL======================*/}
      <Principal />
      {/*======================PRINCIPAL====================*/}
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
