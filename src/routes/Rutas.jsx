import { useRoutes } from "react-router-dom";
import LoginUsorCom from "../pages/LoginUsorCom";

const Rutas = () => {
  const routes = useRoutes([
    { path: "/LoginUsorCom", element: <LoginUsorCom /> },

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
