import { FaMinusCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
export const PaginaFormulario = (props) => {
  const {totalArticulos,articulosComprados} = props;
  const history = useHistory();
  const backToList = () => {
    history.push(`/lista`);
  }
    return (
        <>
            <section className="info espaciado bloque-superior">
                <FaMinusCircle className="icono" onClick={backToList}/>
                <p className="n-articulos">{`${articulosComprados}/${totalArticulos} comprados`}</p>
            </section>
            <main className="principal espaciado">
                <h2 className="titulo-seccion">Editar artículo</h2>
                <form className="form-crear">
                    <label htmlFor="nombre">Nombre:</label>
                    <input className="control" type="text" id="nombre" />
                    <label htmlFor="precio">Precio:</label>
                    <div className="control-moneda">
                        <input className="control" type="number" id="precio" /> €
                    </div>
                    <button className="enviar" type="submit">
                        Modificar
                    </button>
                </form>
            </main>
        </>
    );
};
