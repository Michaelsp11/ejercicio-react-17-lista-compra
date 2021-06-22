function App() {
  return (
    <>
      {/*====================CABECERA======================*/}
      <header class="cabecera espaciado bloque-superior">
        <h1>Lista de la compra</h1>
        <nav>
          <ul class="navegacion">
            <li>
              <a href="principal">Principal</a>
            </li>
            <li class="actual">
              <a href="lista">Lista</a>
            </li>
            <li>
              <a href="acerca-de">Acerca de</a>
            </li>
          </ul>
        </nav>
      </header>
      {/*====================CABECERA======================*/}
      {/*====================PRINCIPAL======================*/}
      <main class="home">
        <h2>Bienvenido a la lista de la compra</h2>
      </main>
      {/*======================PRINCIPAL====================*/}
      {/*====================ACERCA DE======================*/}
      <main class="acerca-de">
        <h2>Acerca de Lista de la compra</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia
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
      <section class="info espaciado bloque-superior">
        <i class="icono fas fa-plus-circle"></i>
        <p class="n-articulos">2/3 comprados</p>
      </section>
      <main class="principal espaciado">
        <ul class="articulos">
          <li class="articulo">
            <input type="checkbox" class="marcar" />
            <span class="nombre">Pan</span>
            <span class="precio">0.75€</span>
            <i class="borrar fas fa-times"></i>
          </li>
          <li class="articulo">
            <input type="checkbox" class="marcar" />
            <span class="nombre">Azúcar</span>
            <i class="borrar fas fa-times"></i>
          </li>
          <li class="articulo">
            <input type="checkbox" class="marcar" />
            <span class="nombre">Leche</span>
            <span class="precio">1.20€</span>
            <i class="borrar fas fa-times"></i>
          </li>
        </ul>
        <span class="precio-total">1.95€</span>
      </main>
      {/*====================LISTA======================*/}
      {/*====================FORMULARIO======================*/}
      <section class="info espaciado bloque-superior">
        <i class="icono fas fa-minus-circle"></i>
        <p class="n-articulos">2/3 comprados</p>
      </section>
      <main class="principal espaciado">
        <h2 class="titulo-seccion">Editar artículo</h2>
        <form class="form-crear">
          <label for="nombre">Nombre:</label>
          <input class="control" type="text" id="nombre" />
          <label for="precio">Precio:</label>
          <div class="control-moneda">
            <input class="control" type="number" id="precio" /> €
          </div>
          <button class="enviar" type="submit">
            Modificar
          </button>
        </form>
      </main>
      {/*====================FORMULARIO======================*/}
    </>
  );
}

export default App;
