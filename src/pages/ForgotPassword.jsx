import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import forgotHero from "../assets/forgot-hero.png";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("El correo es obligatorio");
      return;
    }
    if (!emailOk(email)) {
      setError("Ingresá un correo válido");
      return;
    }
    setError("");
    navigate("/recovery-sent");
  };

  return (
    <main className="site-main page-forgot">
      <section className="container auth">
        <div className="card">
          <div className="card-grid">
            <div className="form-col">
              <h1 className="title">Recuperar contraseña</h1>
              <p className="signup">
                Ingresá tu correo y te enviaremos un enlace para que puedas
                restablecer tu contraseña.
              </p>

              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@correo.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    required
                  />
                  {error && <div className="field-error">{error}</div>}
                </div>

                <button className="btn-primary" type="submit">
                  Enviar enlace
                </button>

                <p className="signup">
                  <Link className="link-primary" to="/">
                    Volver a iniciar sesión
                  </Link>
                </p>
              </form>
            </div>

            <div className="art-col" aria-hidden="true">
              <img src={forgotHero} alt="forgot password hero" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
