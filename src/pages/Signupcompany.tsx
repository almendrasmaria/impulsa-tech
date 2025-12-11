import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignupCompany() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const emailOk = (v: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const err: Record<string, string> = {};

    if (!form.name.trim()) err.name = "El nombre de la entidad es obligatorio";

    if (!form.email.trim()) err.email = "El correo es obligatorio";
    else if (!emailOk(form.email)) err.email = "Correo inválido";

    if (!form.password.trim()) err.password = "La contraseña es obligatoria";
    else if (form.password.length < 8)
      err.password = "Debe tener al menos 8 caracteres";

    if (!form.password2.trim())
      err.password2 = "Debés confirmar tu contraseña";
    else if (form.password2 !== form.password)
      err.password2 = "Las contraseñas no coinciden";

    setErrors(err);

    if (Object.keys(err).length === 0) {
      navigate("/verify-email");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f7faff] font-[Poppins] flex flex-col">
      <Navbar />

      <main className="flex-1 py-[clamp(1.5rem,4vw,3rem)] page-signup">
        <section className="w-[min(1200px,92%)] mx-auto auth">
          <div className="bg-white border border-[#D9D9D9] rounded-[20px] shadow-[0_6px_24px_rgba(16,24,40,0.06)] p-[clamp(16px,2.5vw,28px)]">

            <div className="grid grid-cols-[1.05fr_0.95fr] items-center gap-[clamp(16px,3vw,32px)] max-[980px]:grid-cols-1">

              {/* FORM */}
              <div className="form-col">
                <h1 className="text-[clamp(26px,3.2vw,35px)] font-bold tracking-[0.7px] my-7">
                  Crear cuenta Empresarial
                </h1>

                <form className="grid gap-[18px]" onSubmit={handleSubmit} noValidate>

                  {/* Entidad */}
                  <div className="grid gap-2">
                    <label htmlFor="name">Entidad / Organización</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Nombre de la organización"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full h-12 border border-[#D9D9D9] rounded-lg px-3.5 outline-none placeholder:text-[#9BA0A6] bg-white focus:border-[#B9C0FF] focus:shadow-[0_0_0_3px_rgba(24,41,219,0.12)]"
                    />
                    {errors.name && <div className="text-red-600 text-sm">{errors.name}</div>}
                  </div>

                  {/* Email */}
                  <div className="grid gap-2">
                    <label htmlFor="email">Correo Electrónico Empresarial</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="empresa@organizacion.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full h-12 border border-[#D9D9D9] rounded-lg px-3.5 outline-none placeholder:text-[#9BA0A6] bg-white focus:border-[#B9C0FF] focus:shadow-[0_0_0_3px_rgba(24,41,219,0.12)]"
                    />
                    {errors.email && <div className="text-red-600 text-sm">{errors.email}</div>}
                  </div>

                  {/* Password */}
                  <div className="grid gap-2">
                    <label htmlFor="password">Contraseña</label>
                    <input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={form.password}
                      onChange={(e) => update("password", e.target.value)}
                      className="w-full h-12 border border-[#D9D9D9] rounded-lg px-3.5 outline-none placeholder:text-[#9BA0A6] bg-white focus:border-[#B9C0FF] focus:shadow-[0_0_0_3px_rgba(24,41,219,0.12)]"
                    />
                    {errors.password && <div className="text-red-600 text-sm">{errors.password}</div>}
                  </div>

                  {/* Confirm Password */}
                  <div className="grid gap-2">
                    <label htmlFor="password2">Confirmar contraseña</label>
                    <input
                      id="password2"
                      type="password"
                      placeholder="••••••••"
                      value={form.password2}
                      onChange={(e) => update("password2", e.target.value)}
                      className="w-full h-12 border border-[#D9D9D9] rounded-lg px-3.5 outline-none placeholder:text-[#9BA0A6] bg-white focus:border-[#B9C0FF] focus:shadow-[0_0_0_3px_rgba(24,41,219,0.12)]"
                    />
                    {errors.password2 && <div className="text-red-600 text-sm">{errors.password2}</div>}
                  </div>

                  {/* Submit */}
                  <button
                    className="h-[50px] w-full border border-[#1829DB] rounded-lg bg-[#1829DB] text-white font-medium tracking-[0.32px] cursor-pointer hover:brightness-[1.02] active:translate-y-px"
                    type="submit"
                  >
                    Crear cuenta
                  </button>

                  <p className="m-0 text-sm text-[rgba(0,0,0,0.72)]">
                    ¿Ya tenés cuenta?{" "}
                    <Link
                      to="/LoginCompany"
                      className="text-[#1829DB] no-underline font-medium hover:underline"
                    >
                      Iniciar sesión (Empresa)
                    </Link>
                  </p>
                </form>
              </div>

              {/* IMAGE */}
              <div
                className="grid place-items-center max-[980px]:order-first"
                aria-hidden="true"
              >
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=474&q=80"
                  alt="signup hero"
                  loading="lazy"
                  className="max-w-[min(474px,100%)] h-auto block rounded-xl"
                />
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
