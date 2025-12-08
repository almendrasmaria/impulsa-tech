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
    <main className="py-[clamp(1.5rem,4vw,3rem)] page-support">
      <section className="w-[min(1200px,92%)] mx-auto">
        <div className="bg-white border border-[#D9D9D9] rounded-[20px] shadow-[0_6px_24px_rgba(16,24,40,0.06)] p-[clamp(16px,2.5vw,28px)]">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-[clamp(16px,3vw,32px)] items-center">
            <div className="form-col">
              <h1 className="text-[clamp(26px,3.2vw,35px)] font-bold tracking-[0.7px] my-7 mx-0">
                Contacto y soporte
              </h1>

              <form
                className="grid gap-[18px]"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid gap-[18px]">
                  <label htmlFor="name">Nombre</label>
                  <input
                    id="name"
                    className="w-full h-12 border border-[#D9D9D9] rounded-lg px-3.5 outline-none bg-white placeholder:text-[#9BA0A6] focus:border-[#B9C0FF] focus:shadow-[0_0_0_3px_rgba(24,41,219,0.12)]"
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

                <div className="grid gap-[18px]">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    className="w-full h-12 border border-[#D9D9D9] rounded-lg px-3.5 outline-none bg-white placeholder:text-[#9BA0A6] focus:border-[#B9C0FF] focus:shadow-[0_0_0_3px_rgba(24,41,219,0.12)]"
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

                <div className="grid gap-[18px]">
                  <label htmlFor="subject">Asunto</label>
                  <input
                    className="w-full h-12 border border-[#D9D9D9] rounded-lg px-3.5 outline-none bg-white placeholder:text-[#9BA0A6] focus:border-[#B9C0FF] focus:shadow-[0_0_0_3px_rgba(24,41,219,0.12)]"
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

                <div className="grid gap-[18px]">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    className="w-full min-h-[90px] border border-[#D9D9D9] rounded-lg py-2.5 px-3.5 bg-white resize-y outline-none placeholder:text-[#9BA0A6] focus:border-[#B9C0FF] focus:shadow-[0_0_0_3px_rgba(24,41,219,0.12)]"
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

                <label className="checkbox inline-flex items-center gap-2 text-[rgba(0,0,0,0.72)] select-none">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] accent-[#1829DB]"
                    checked={form.attach}
                    onChange={(e) => update("attach", e.target.checked)}
                  />
                  <span>Adjuntar archivo</span>
                </label>

                <button
                  className="h-[50px] w-full border border-[#1829DB] rounded-lg bg-[#1829DB] text-white font-medium tracking-[0.32px] cursor-pointer inline-flex items-center justify-center hover:brightness-[1.02] active:translate-y-px"
                  type="submit"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>

            <div className="grid place-items-center max-[980px]:order-first">
              <p className="text-[rgba(0,0,0,0.72)] text-base tracking-[0.32px] my-2 mb-4">
                ¿Necesitás ayuda? Contactanos por cualquier inconveniente que
                tengas.
              </p>

              <img
                src={supportHero}
                alt="support hero"
                loading="lazy"
                className="max-w-[min(474px,100%)] h-auto block rounded-xl"
              />

              <p className="text-[rgba(0,0,0,0.72)] text-base tracking-[0.32px] my-2 mb-4">
                <a
                  className="text-[#1829DB] no-underline font-medium hover:underline"
                  href="mailto:soporte@impulsatech.com"
                >
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
