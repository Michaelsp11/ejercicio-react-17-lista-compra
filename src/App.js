
import { Principal } from "./componentes/Principal";
import { Cabecera } from "./componentes/Cabecera";
import { Formulario } from "./componentes/Formulario";
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
      <main className="acerca-de">
        <h2>Acerca de Lista de la compra</h2>
        <p>
          Lorem ipsu dolor sit amet consectetur adipisicing elit. Autem officia
          odio reiciendis vel architecto molestiae, saepe temporibus beatae
          perferendis iste quod excepturi, sit molestias assumenda? Officia
          dolorum similique placeat enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
          eveniet, doloremque odit nobis accusamus distinctio autem architecto
          provident veritatis, odio, maiores deserunt repellat iure explicabo
          laboriosam pariatur exercitationem illum aspernatur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi,
          ullam inventore non, perspiciatis necessitatibus, quos error optio et
          dolor temporibus eaque voluptatum! Amet fugit, ad aspernatur minima
          sunt adipisci.
        </p>
      </main>
      {/*====================ACERCA DE======================*/}
      {/*====================LISTA======================*/}
      <section className="info espaciado bloque-superior">
        <i className="icono fas fa-plus-circle"></i>
        <p className="n-articulos">2/3 comprados</p>
      </section>
      <main className="principal espaciado">
        <ul className="articulos">
          <li className="articulo">
            <input type="checkbox" className="marcar" />
            <span className="nombre">Pan</span>
            <span className="precio">0.75€</span>
            <i className="borrar fas fa-times"></i>
          </li>
          <li className="articulo">
            <input type="checkbox" className="marcar" />
            <span className="nombre">Azúcar</span>
            <i className="borrar fas fa-times"></i>
          </li>
          <li className="articulo">
            <input type="checkbox" className="marcar" />
            <span className="nombre">Leche</span>
            <span className="precio">1.20€</span>
            <i className="borrar fas fa-times"></i>
          </li>
        </ul>
        <span className="precio-total">1.95€</span>
      </main>
      {/*====================LISTA======================*/}
      {/*====================FORMULARIO======================*/}
      <Formulario />
      {/*====================FORMULARIO======================*/}
    </>

  );
}

export default App;
