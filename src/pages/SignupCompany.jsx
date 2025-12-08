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
    <main className="py-[clamp(1.5rem,4vw,3rem)] page-signup">
      <section className="w-[min(1200px,92%)] mx-auto auth">
        <div className="bg-white border border-[#D9D9D9] rounded-[20px] shadow-[0_6px_24px_rgba(16,24,40,0.06)] p-[clamp(16px,2.5vw,28px)]">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-[clamp(16px,3vw,32px)] items-center">
            <div className="form-col">
              <h1 className="text-[clamp(26px,3.2vw,35px)] font-bold tracking-[0.7px] my-7 mx-0">
                Crear cuenta Empresarial
              </h1>

              <form
                className="grid gap-[18px]"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid gap-2">
                  <label htmlFor="name">Entidad</label>
                  <input
                    className="w-full h-12 border border-[#D9D9D9] rounded-lg px-3.5 outline-none bg-white placeholder:text-[#9BA0A6] focus:border-[#B9C0FF] focus:shadow-[0_0_0_3px_rgba(24,41,219,0.12)]"
                    id="name"
                    type="text"
                    placeholder="Nombre de la organización"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    required
                  />
                  {errors.name && (
                    <div className="field-error">{errors.name}</div>
                  )}
                </div>

                <div className="grid gap-2">
                  <label htmlFor="email">Correo Electrónico Empresarial</label>
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

                <div className="grid gap-2">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    className="w-full h-12 border border-[#D9D9D9] rounded-lg px-3.5 outline-none bg-white placeholder:text-[#9BA0A6] focus:border-[#B9C0FF] focus:shadow-[0_0_0_3px_rgba(24,41,219,0.12)]"
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

                <div className="grid gap-2">
                  <label htmlFor="password2">Confirmar contraseña</label>
                  <input
                    className="w-full h-12 border border-[#D9D9D9] rounded-lg px-3.5 outline-none bg-white placeholder:text-[#9BA0A6] focus:border-[#B9C0FF] focus:shadow-[0_0_0_3px_rgba(24,41,219,0.12)]"
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

                <button
                  className="h-[50px] w-full border border-[#1829DB] rounded-lg bg-[#1829DB] text-white font-medium tracking-[0.32px] cursor-pointer inline-flex items-center justify-center hover:brightness-[1.02] active:translate-y-px"
                  type="submit"
                >
                  Crear cuenta
                </button>

                <p className="m-0 text-sm text-[rgba(0,0,0,0.72)]">
                  ¿Ya tenés cuenta?{" "}
                  <a href="/LoginCompany" className="text-blue-800">
                    Iniciar sesión (Empresa)
                  </a>
                </p>
              </form>
            </div>

            <div
              className="grid place-items-center max-[980px]:order-first"
              aria-hidden="true"
            >
              <img
                src={signupHero}
                alt="signup hero"
                loading="lazy"
                className="max-w-[min(474px,100%)] h-auto block rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
