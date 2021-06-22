
import { FaPlusCircle,FaTimes } from "react-icons/fa";
import { useHistory } from "react-router-dom";
export const PaginaLista = (props) => {
  const {articulos,articulosComprados,precioTotal,toogleComprado,borrarArticulo} = props;
  const history = useHistory();
  const crearArticulo = () => {
    history.push(`/crear-articulo`);
  }
  const editarArticulo = (id) => {
    history.push(`/editar-articulo/${id}`);
  }
    return (
        <>
            <section className="info espaciado bloque-superior">
                <FaPlusCircle className="icono" onClick={crearArticulo}/>
                <p className="n-articulos">{`${articulosComprados}/${articulos.length} comprados`}</p>
            </section>
            <main className="principal espaciado">
                <ul className="articulos">
                  {articulos.map((articulo) =>{
                    const {id,nombre,precio,comprado} = articulo;
                    return (<li className="articulo" key={id}>
                        <input type="checkbox" className="marcar" checked={comprado} onChange={() => toogleComprado(articulo)}/>
                        <span className="nombre" onClick={() => editarArticulo(id)}>{nombre}</span>
                        <span className="precio">{precio !== null ? `${precio.toFixed(2)}€` : ""}</span>
                        <FaTimes className="borrar" onClick={() => borrarArticulo(id)}/>
                    </li>);
                  }
                  )}
                </ul>
                <span className="precio-total">{`${precioTotal}€`}</span>
            </main>
        </>
    )

}
