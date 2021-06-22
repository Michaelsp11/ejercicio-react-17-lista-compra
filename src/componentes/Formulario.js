export const Formulario = () => {
    return (
        <>
            <section className="info espaciado bloque-superior">
                <i className="icono fas fa-minus-circle"></i>
                <p className="n-articulos">2/3 comprados</p>
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