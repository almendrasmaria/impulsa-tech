import { useRoutes } from "react-router-dom";
import Terminoscondiciones from "../../pages/Terminoscondiciones";


const Rutas = () => {
  const routes = useRoutes([
    { path: "/Terminos", element: <Terminoscondiciones /> },
    {
      path: "*",
      element: (
        <div style={{ padding: "4rem", textAlign: "center" }}>
          Página no encontrada
        </div>
      ),
    },
  ]);
  return routes;
};

export default Rutas;
