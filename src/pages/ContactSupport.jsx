import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supportHero from "../assets/support-hero.png";

export default function ContactSupport() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    attach: false,
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
    if (!form.email.trim()) err.email = "El correo es obligatorio";
    else if (!emailOk(form.email)) err.email = "Correo inválido";
    if (!form.subject.trim()) err.subject = "El asunto es obligatorio";
    if (!form.message.trim()) err.message = "El mensaje es obligatorio";

    setErrors(err);

    if (Object.keys(err).length === 0) {
      navigate("/support-sent");
    }
  };

  return (
    <main className="site-main page-support">
      <section className="container auth">
        <div className="card">
          <div className="card-grid">
            <div className="form-col">
              <h1 className="title">Contacto y soporte</h1>

              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="name">Nombre</label>
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
                  <label htmlFor="email">Correo electrónico</label>
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
                  <label htmlFor="subject">Asunto</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="¿Sobre qué es tu consulta?"
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    required
                  />
                  {errors.subject && (
                    <div className="field-error">{errors.subject}</div>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    placeholder="Escribí tu mensaje..."
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    required
                  />
                  {errors.message && (
                    <div className="field-error">{errors.message}</div>
                  )}
                </div>

                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={form.attach}
                    onChange={(e) => update("attach", e.target.checked)}
                  />
                  <span>Adjuntar archivo</span>
                </label>

                <button className="btn-primary" type="submit">
                  Enviar mensaje
                </button>
              </form>
            </div>

            <div className="art-col">
              <p className="helper">
                ¿Necesitás ayuda? Contactanos por cualquier inconveniente que tengas.
              </p>

              <img src={supportHero} alt="support hero" loading="lazy" />

              <p className="helper">
                <a className="link-primary" href="mailto:soporte@impulsatech.com">
                  soporte@impulsatech.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
