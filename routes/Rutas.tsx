import { useRoutes } from "react-router-dom";
import Cookie from "../pages/Cookie";

const Rutas = () => {
  const routes = useRoutes([
    { path: "/cookie", element: <Cookie /> },
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