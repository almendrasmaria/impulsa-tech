import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupHero from "../assets/signup-hero.png";

export default function SignupCompany() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = {};

    if (!form.name.trim()) err.name = "El nombre es obligatorio";
    if (!form.lastname.trim()) err.lastname = "El apellido es obligatorio";

    if (!form.email.trim()) err.email = "El correo es obligatorio";
    else if (!emailOk(form.email)) err.email = "Correo inválido";

    if (!form.password.trim()) err.password = "La contraseña es obligatoria";
    else if (form.password.length < 8)
      err.password = "Debe tener al menos 8 caracteres";

    if (!form.password2.trim()) err.password2 = "Debés confirmar tu contraseña";
    else if (form.password2 !== form.password)
      err.password2 = "Las contraseñas no coinciden";

    setErrors(err);

    if (Object.keys(err).length === 0) {
      navigate("/verify-email");
    }
  };

  return (
    <main className="site-main page-signup">
      <section className="container auth">
        <div className="card">
          <div className="card-grid">
            <div className="form-col">
              <h1 className="title">Crear cuenta Empresarial</h1>

              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="name">Nombre de la Empresa</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    required
                  />
                  {errors.name && (
                    <div className="field-error">{errors.name}</div>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="lastname">Apellido</label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Tu apellido"
                    value={form.lastname}
                    onChange={(e) => update("lastname", e.target.value)}
                    required
                  />
                  {errors.lastname && (
                    <div className="field-error">{errors.lastname}</div>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="email">Correo Electrónico Empresarial</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@correo.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    required
                  />
                  {errors.email && (
                    <div className="field-error">{errors.email}</div>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) => update("password", e.target.value)}
                    required
                  />
                  {errors.password && (
                    <div className="field-error">{errors.password}</div>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="password2">Confirmar contraseña</label>
                  <input
                    id="password2"
                    type="password"
                    placeholder="••••••••"
                    value={form.password2}
                    onChange={(e) => update("password2", e.target.value)}
                    required
                  />
                  {errors.password2 && (
                    <div className="field-error">{errors.password2}</div>
                  )}
                </div>

                <button className="btn-primary" type="submit">
                  Crear cuenta
                </button>

                <p className="signup">
                  ¿Ya tenés cuenta?{" "}
                  <Link className="link-primary" to="/LoginCompany">
                    Iniciar sesión (Empresa)
                  </Link>
                </p>
              </form>
            </div>

            <div className="art-col" aria-hidden="true">
              <img src={signupHero} alt="signup hero" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
