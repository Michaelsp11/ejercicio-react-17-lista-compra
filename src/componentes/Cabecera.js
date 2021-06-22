import { NavLink } from "react-router-dom";

export const Cabecera = () => {
  return (
    <header className="cabecera espaciado bloque-superior">
      <h1>Lista de la compra</h1>
      <nav>
        <ul className="navegacion">
          <li>
            <NavLink to="/" activeClassName="actual">
              Principal
            </NavLink>
          </li>
          <li className="actual">
            <NavLink to="/lista" activeClassName="actual">
              Lista
            </NavLink>
          </li>
          <li>
            <NavLink to="/acercade" activeClassName="actual">
              Acerca de
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
