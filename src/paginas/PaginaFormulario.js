import { FaMinusCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useFormulario } from "../hooks/useFormulario";
export const PaginaFormulario = (props) => {
  const {articulo,totalArticulos,articulosComprados,crearArticulo} = props;
  const history = useHistory();
  const backToList = () => {
    history.push(`/lista`);
  }
  const {
    datos: { nombre, precio},
    formularioInvalido,
    setDato,
  } = useFormulario(articulo);
  const enviarArticulo = (e) => {
    e.preventDefault();
    crearArticulo({nombre,precio});
    history.push(`/lista`);
  }
    return (
        <>
            <section className="info espaciado bloque-superior">
                <FaMinusCircle className="icono" onClick={backToList}/>
                <p className="n-articulos">{`${articulosComprados}/${totalArticulos} comprados`}</p>
            </section>
            <main className="principal espaciado">
                <h2 className="titulo-seccion">Crear artículo</h2>
                <form className="form-crear" onSubmit={enviarArticulo}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input className="control" type="text" id="nombre" value={nombre} onChange={setDato}/>
                    <label htmlFor="precio">Precio:</label>
                    <div className="control-moneda">
                        <input className="control" type="number" id="precio" value={precio} onChange={setDato}/> €
                    </div>
                    <button className="enviar" type="submit" disabled={formularioInvalido}>
                        Crear
                    </button>
                </form>
            </main>
        </>
    );
};
