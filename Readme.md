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


import "../styles.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <small>© {new Date().getFullYear()} ImpulsaTech</small>
      </div>
    </footer>
  );
}




Codigo cSS: 

.nav-links{
  margin-left: auto;
  display: flex;
  gap: 28px;
  list-style: none;
  padding: 0;
}
.nav-links a{
  color: #000;
  font-size: 13px;
  text-decoration: none;
  letter-spacing: .26px;
}
.nav-links a:hover{ text-decoration: underline; }