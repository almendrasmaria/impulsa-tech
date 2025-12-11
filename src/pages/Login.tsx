import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const emailOk = (v: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
    <div className="w-full min-h-screen bg-[#f7faff] font-[Poppins] flex flex-col">
      <Navbar />

      <main className="flex-1 py-[clamp(1.5rem,4vw,3rem)] page-login">
        <section className="w-[min(1200px,92%)] mx-auto auth">
          <div className="bg-white border border-[#D9D9D9] rounded-[20px] shadow-[0_6px_24px_rgba(16,24,40,0.06)] p-[clamp(16px,2.5vw,28px)]">
            <div className="grid grid-cols-[1.05fr_0.95fr] gap-[clamp(16px,3vw,32px)] items-center max-[980px]:grid-cols-1">
              
              {/* FORM */}
              <div className="form-col">
                <h1 className="text-[clamp(26px,3.2vw,35px)] font-bold tracking-[0.7px] my-7 mx-0">
                  Iniciar sesión
                </h1>

                <form className="grid gap-[18px]" onSubmit={handleSubmit} noValidate>
                  
                  {/* EMAIL */}
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-[rgba(0,0,0,0.72)] text-base tracking-[0.32px]"
                    >
                      Correo electrónico
                    </label>

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
                  </div>

                  {/* PASSWORD */}
                  <div className="grid gap-2">
                    <label
                      htmlFor="password"
                      className="text-[rgba(0,0,0,0.72)] text-base tracking-[0.32px]"
                    >
                      Contraseña
                    </label>

                    <div className="relative">
                      <input
                        className="w-full h-12 border border-[#D9D9D9] rounded-lg px-3.5 outline-none bg-white placeholder:text-[#9BA0A6] focus:border-[#B9C0FF] focus:shadow-[0_0_0_3px_rgba(24,41,219,0.12)]"
                        id="password"
                        type={showPass ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setError("");
                        }}
                        required
                      />

                      {/* OJITO */}
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer p-0.5 rounded-lg hover:bg-black/5 transition"
                        onClick={() => setShowPass((v) => !v)}
                        aria-label={
                          showPass ? "Ocultar contraseña" : "Mostrar contraseña"
                        }
                      >
                        <svg
                          className="w-5 h-5 text-[#9BA0A6]"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          {showPass ? (
                            <>
                              <path
                                d="M2 12s4.5-7 10-7 10 7 10 7-4.5 7-10 7S2 12 2 12Z"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                              <path d="M4 4l16 16" stroke="currentColor" strokeWidth="2" />
                            </>
                          ) : (
                            <>
                              <path
                                d="M2 12s4.5-7 10-7 10 7 10 7-4.5 7-10 7S2 12 2 12Z"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                            </>
                          )}
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* ERROR */}
                  {error && <div className="text-red-600 text-sm">{error}</div>}

                  {/* RECORDAR / OLVIDASTE */}
                  <div className="flex items-center justify-between gap-3">
                    <label className="inline-flex items-center gap-2 text-[rgba(0,0,0,0.72)]">
                      <input
                        type="checkbox"
                        className="w-[18px] h-[18px] accent-[#1829DB]"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                      />
                      <span>Recordar sesión</span>
                    </label>

                    <Link
                      className="text-[rgba(0,0,0,0.72)] hover:underline"
                      to="/forgot-password"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>

                  {/* BOTÓN LOGIN */}
                  <button
                    className="h-[50px] w-full border border-[#1829DB] bg-[#1829DB] text-white rounded-lg font-medium tracking-[0.32px] hover:brightness-105 active:translate-y-px transition"
                    type="submit"
                  >
                    Iniciar sesión
                  </button>

                  {/* SIGNUP */}
                  <p className="m-0 text-sm text-[rgba(0,0,0,0.72)] text-center">
                    ¿No tenés cuenta?{" "}
                    <Link
                      className="text-[#1829DB] font-medium hover:underline"
                      to="/signup"
                    >
                      Crear cuenta
                    </Link>
                  </p>
                </form>
              </div>

              {/* IMAGEN SIN IMPORT, USANDO UNSPLASH */}
              <div
                className="grid place-items-center max-[980px]:order-first"
                aria-hidden="true"
              >
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=474&q=80"
                  alt="login hero"
                  className="max-w-[min(474px,100%)] h-auto block rounded-xl"
                  loading="lazy"
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
