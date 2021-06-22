
import { FaPlusCircle } from "react-icons/fa";
export const PaginaLista = () => {
    return (
        <>
            <section className="info espaciado bloque-superior">
                <FaPlusCircle className="icono"/>
                <p className="n-articulos">2/3 comprados</p>
            </section>
            <main className="principal espaciado">
                <ul className="articulos">
                    <li className="articulo">
                        <input type="checkbox" className="marcar"/>
                        <span className="nombre">Pan</span>
                        <span className="precio">0.75€</span>
                        <i className="borrar fas fa-times"></i>
                    </li>
                    <li className="articulo">
                        <input type="checkbox" className="marcar"/>
                        <span className="nombre">Azúcar</span>
                        <i className="borrar fas fa-times"></i>
                    </li>
                    <li className="articulo">
                        <input type="checkbox" className="marcar"/>
                        <span className="nombre">Leche</span>
                        <span className="precio">1.20€</span>
                        <i className="borrar fas fa-times"></i>
                    </li>
                </ul>
                <span className="precio-total">1.95€</span>
            </main>

        </>
    )

}
