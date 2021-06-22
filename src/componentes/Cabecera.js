export const Cabecera = () => {
  return (
    <header className="cabecera espaciado bloque-superior">
      <h1>Lista de la compra</h1>
      <nav>
        <ul className="navegacion">
          <li>
            <a href="componentes/Principal.js">Principal</a>
          </li>
          <li className="actual">
            <a href="componentes/Lista.js">Lista</a>
          </li>
          <li>
            <a href="componentes/AcercaDe.js">Acerca de</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
