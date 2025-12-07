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
    <main className="py-[clamp(1.5rem,4vw,3rem)] page-forgot">
      <section className="w-[min(1200px,92%)] mx-auto auth">
        <div className="bg-white border border-[#D9D9D9] rounded-[20px] shadow-[0_6px_24px_rgba(16,24,40,0.06)] p-[clamp(16px,2.5vw,28px)]">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-[clamp(16px,3vw,32px)] items-center">
            <div className="form-col">
              <h1 className="text-[clamp(26px,3.2vw,35px)] font-bold tracking-[0.7px] my-7 mx-0">
                Recuperar contraseña
              </h1>
              <p className="m-0 text-sm text-[rgba(0,0,0,0.72)]">
                Ingresá tu correo y te enviaremos un enlace para que puedas
                restablecer tu contraseña.
              </p>

              <form
                className="grid gap-[18px]"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid gap-[18px]">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    className="w-full h-12 border border-[#D9D9D9] rounded-lg px-3.5 outline-none bg-white placeholder:text-[#9BA0A6] focus:border-[#B9C0FF] focus:shadow-[0_0_0_3px_rgba(24,41,219,0.12)]"
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

                <button
                  className="h-[50px] w-full border border-[#1829DB] rounded-lg bg-[#1829DB] text-white font-medium tracking-[0.32px] cursor-pointer inline-flex items-center justify-center hover:brightness-[1.02] active:translate-y-px"
                  type="submit"
                >
                  Enviar enlace
                </button>

                <p className="m-0 text-sm text-[rgba(0,0,0,0.72)]">
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
