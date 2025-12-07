import { useState } from "react";
import { Link } from "react-router-dom";
import loginHero from "../assets/login-hero.png";

export default function LoginCompany() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

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
    if (!password.trim()) {
      setError("La contraseña es obligatoria");
      return;
    }
    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }
    setError("");
    alert("Login válido (demo)");
  };

  return (
    <main className="py-[clamp(1.5rem,4vw,3rem)] page-login">
      <section className="container auth">
        <div className="card">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-[clamp(16px,3vw,32px)] items-center">
            <div className="form-col">
              <h1 className="text-[clamp(26px,3.2vw,35px)] font-bold tracking-[0.7px] my-7 mx-0">
                Iniciar sesión como Empresa
              </h1>

              <form
                className="grid gap-[18px]"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="field">
                  <label htmlFor="email">Correo electrónico Empresarial</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@correo.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="password">Contraseña</label>
                  <div className="password-wrapper">
                    <input
                      id="password"
                      name="password"
                      type={showPass ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                      }}
                      required
                    />

                    <svg
                      className="icon-eye"
                      viewBox="0 0 24 24"
                      onClick={() => setShowPass((v) => !v)}
                    >
                      {showPass ? (
                        <>
                          <path
                            d="M2 12s4.5-7 10-7 10 7 10 7-4.5 7-10 7S2 12 2 12Z"
                            stroke="#D9D9D9"
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            r="3"
                            stroke="#D9D9D9"
                            fill="none"
                            strokeWidth="2"
                          />
                        </>
                      ) : (
                        <>
                          <path
                            d="M2 12s4.5-7 10-7 10 7 10 7-4.5 7-10 7S2 12 2 12Z"
                            stroke="#D9D9D9"
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            r="3"
                            stroke="#D9D9D9"
                            fill="none"
                            strokeWidth="2"
                          />
                          <path
                            d="M4 4l16 16"
                            stroke="#D9D9D9"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </>
                      )}
                    </svg>
                  </div>
                </div>

                {error && <div className="field-error">{error}</div>}

                <div className="meta-row">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                    />
                    <span>Recordar sesión</span>
                  </label>

                  <Link className="link-muted" to="/forgot-password">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <button className="btn-primary" type="submit">
                  Iniciar sesión
                </button>

                <p className="signup">
                  ¿No tenés cuenta?{" "}
                  <Link className="link-primary" to="/signupCompany">
                    Crear cuenta (Empresa)
                  </Link>
                </p>
              </form>
            </div>

            <div className="art-col" aria-hidden="true">
              <img src={loginHero} alt="login hero" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
