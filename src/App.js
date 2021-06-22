import { Cabecera } from "./componentes/Cabecera";
import { PaginaPrincipal } from "./paginas/PaginaPrincipal";
import { PaginaFormulario } from "./paginas/PaginaFormulario";
import { PaginaLista } from "./paginas/PaginaLista";
import { PaginaAcercaDe } from "./paginas/PaginaAcercaDe";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { useCallback, useEffect, useState } from "react";


function App() {
  //URL a la api de articulos, se encuentra en el archivo .env
  const apiArticulos = process.env.REACT_APP_APP_ARTICULOS;
  const [articulos,setArticulos] = useState([]);
  const getArticulos = useCallback(async() => {
    const resp = await fetch(apiArticulos);
    const articulosAPI = await resp.json();
    setArticulos(articulosAPI);
  },[apiArticulos]);
  const articulosComprados = articulos.filter((articulo) => articulo.comprado).length;
  const precioTotal = articulos.filter((articulo) => articulo.comprado).reduce((acumulador,articulo) => acumulador + articulo.precio, 0).toFixed(2);
  useEffect(()=>{
    getArticulos();
  },[getArticulos]);
  const crearArticulo = async(articulo) => {
    const resp = await fetch(apiArticulos,
      {
      method:"POST",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(articulo),
      }
    );
    if(resp.ok){
      const nuevoArticulo = await resp.json();
      setArticulos([...articulos,nuevoArticulo]);
    }
  }
  const editarArticulo = async(nuevoArticulo) => {
    fetch(apiArticulos + nuevoArticulo.id,
      {
      method:"PUT",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(nuevoArticulo),
      }
    );
    setArticulos(
      articulos.map((articulo) =>
        articulo.id === nuevoArticulo.id ? nuevoArticulo : articulo
      )
    );

  }
  const buscarArticulo = (id) => articulos.reduce((acumulador,articulo) => {
    if(articulo.id === id){
      acumulador = articulo;
      return acumulador;
    }
    return acumulador;
  },{});
  const toogleComprado = (articuloNuevo) =>{
    fetch(apiArticulos + articuloNuevo.id,
      {
      method:"PUT",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify({...articuloNuevo,comprado: articuloNuevo.comprado ? false : true}),
      }
    );
    setArticulos(
      articulos.map((articulo) => {
        if (articulo.id === articuloNuevo.id) {
          return {
            ...articulo,
            comprado: articuloNuevo.comprado? false : true,
          };
        } else {
          return articulo;
        }
      })
    );
  }
  const borrarArticulo = (id) => {
    fetch(apiArticulos + id,
      {
      method:"DELETE",
      }
    );
    setArticulos(
      articulos.filter((articulo) =>
        articulo.id !== id
      )
    );

  }
  return (
    <>
      <Router>
        <Cabecera />
        <Switch>
          <Route path="/principal" exact>
            <PaginaPrincipal />
          </Route>
          <Route path="/lista" exact>
            <PaginaLista articulos={articulos} articulosComprados={articulosComprados} precioTotal={precioTotal} toogleComprado={toogleComprado} borrarArticulo={borrarArticulo}/>
          </Route>
          <Route path="/acercade" exact>
            <PaginaAcercaDe />
          </Route>
          <Route path="/crear-articulo" exact>
            <PaginaFormulario totalArticulos={articulos.length} articulosComprados={articulosComprados} crearArticulo={crearArticulo} editarArticulo={editarArticulo}/>
          </Route>
          <Route path="/editar-articulo/:idArticulo" exact>
            <PaginaFormulario totalArticulos={articulos.length} articulosComprados={articulosComprados} crearArticulo={crearArticulo} buscarArticulo={buscarArticulo} editarArticulo={editarArticulo}/>
          </Route>
          <Route path="/" exact>
            <Redirect to="/principal" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
