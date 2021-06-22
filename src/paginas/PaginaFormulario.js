import { FaMinusCircle } from "react-icons/fa";
import { useHistory, useParams } from "react-router-dom";
import { useFormulario } from "../hooks/useFormulario";
export const PaginaFormulario = (props) => {
  const { idArticulo } = useParams();
  const id = +idArticulo;
  const {totalArticulos,articulosComprados,crearArticulo,buscarArticulo,editarArticulo} = props;
  const history = useHistory();
  const backToList = () => {
    history.push(`/lista`);
  }
  const articulo = {
    nombre: "",
    precio: 0,
    comprado: false,
  };
  const {
    datos: { nombre, precio,comprado},
    formularioInvalido,
    setDato,
  } = useFormulario(id? buscarArticulo(id) : articulo);
  const enviarArticulo = (e) => {
    e.preventDefault();
    if(!id){
      crearArticulo({nombre,precio});
    }else{
      editarArticulo({id,nombre,precio,comprado});
    }

    history.push(`/lista`);
  }
    return (
        <>
            <section className="info espaciado bloque-superior">
                <FaMinusCircle className="icono" onClick={backToList}/>
                <p className="n-articulos">{`${articulosComprados}/${totalArticulos} comprados`}</p>
            </section>
            <main className="principal espaciado">
                <h2 className="titulo-seccion">{id ? "Editar" : "Crear"} artículo</h2>
                <form className="form-crear" onSubmit={enviarArticulo}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input className="control" type="text" id="nombre" value={nombre} onChange={setDato}/>
                    <label htmlFor="precio">Precio:</label>
                    <div className="control-moneda">
                        <input className="control" type="number" id="precio" value={precio? precio : 0} onChange={setDato}/> €
                    </div>
                    <button className="enviar" type="submit" disabled={formularioInvalido}>
                        {id ? "Editar" : "Crear"}
                    </button>
                </form>
            </main>
        </>
    );
};
