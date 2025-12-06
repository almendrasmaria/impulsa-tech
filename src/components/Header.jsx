import { Link } from "react-router-dom";
import "../styles.css";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav container">
        <Link className="brand" to="/">
          ImpulsaTech
        </Link>

        <ul className="nav-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Oportunidades</a></li>
          <li><a href="#">Soy empresa</a></li>
        </ul>

        <Link className="btn-outline" to="/" aria-label="Ir a Ingresar">
          Ingresar
        </Link>
      </nav>

      <div className="divider" aria-hidden="true"></div>
    </header>
  );
}
