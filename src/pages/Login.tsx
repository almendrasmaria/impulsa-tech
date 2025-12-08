import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const emailOk = (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    <main className="py-[clamp(1.5rem,4vw,3rem)] m-0 font-[Poppins] bg-[#f7faff] page-login">
      <section className="w-[min(1200px,92%)] mx-auto auth">
        <div className="bg-white border border-[#D9D9D9] rounded-[20px] shadow-[0_6px_24px_rgba(16,24,40,0.06)] p-[clamp(16px,2.5vw,28px)]">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-[clamp(16px,3vw,32px)] items-center max-[980px]:grid-cols-1">
            <div className="form-col">
              <h1 className="text-[clamp(26px,3.2vw,35px)] font-bold tracking-[0.7px] my-7 mx-0">
                Iniciar sesión
              </h1>

              <form
                className="grid gap-[18px]"
                onSubmit={handleSubmit}
                noValidate
              >
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

                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer outline-none border-0 p-0.5 rounded-lg transition-all duration-150 hover:bg-black/4 Active:scale-95 focus:outline-none focus:shadow-[0_0_0_3px_rgba(24,41,219,0.18)] focus:bg-[rgba(24,41,219,0.06)] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(24,41,219,0.18)] focus-visible:bg-[rgba(24,41,219,0.06)]"
                      onClick={() => setShowPass((v) => !v)}
                      aria-label={
                        showPass ? "Ocultar contraseña" : "Mostrar contraseña"
                      }
                    >
                      
                    </button>
                  </div>
                </div>

                {error && <div className="text-red-600 text-sm">{error}</div>}

                <div className="flex items-center justify-between gap-3">
                  <label className="inline-flex items-center gap-2 text-[rgba(0,0,0,0.72)] select-none">
                    <input
                      className="w-[18px] h-[18px] accent-[#1829DB]"
                      type="checkbox"
                      name="remember"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                    />
                    <span>Recordar sesión</span>
                  </label>

                  <Link
                    className="text-[rgba(0,0,0,0.72)] no-underline hover:underline"
                    to="/forgot-password"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <button
                  className="h-[50px] w-full border border-[#1829DB] rounded-lg bg-[#1829DB] text-white font-medium tracking-[0.32px] cursor-pointer inline-flex items-center justify-center hover:brightness-[1.02] active:translate-y-px"
                  type="submit"
                >
                  Iniciar sesión
                </button>

                <p className="m-0 text-sm text-[rgba(0,0,0,0.72)] text-center">
                  ¿No tenés cuenta?{" "}
                  <Link
                    className="text-[#1829DB] no-underline font-medium hover:underline"
                    to="/signup"
                  >
                    Crear cuenta
                  </Link>
                </p>
              </form>
            </div>

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
  );
}

/*import { useState } from "react";
import { Link } from "react-router-dom";
import loginHero from "../assets/login-hero.png";

export default function Login() {
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
    <main className="py-[clamp(1.5rem,4vw,3rem)] m-0 font-[Poppins] bg-[#f7faff] page-login">
      <section className="w-[min(1200px,92%)] mx-auto auth">
        <div className="bg-white border border-[#D9D9D9] rounded-[20px] shadow-[0_6px_24px_rgba(16,24,40,0.06)] p-[clamp(16px,2.5vw,28px)]">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-[clamp(16px,3vw,32px)] items-center">
            <div className="form-col">
              <h1 className="text-[clamp(26px,3.2vw,35px)] font-bold tracking-[0.7px] my-7 mx-0">
                Iniciar sesión
              </h1>

              <form
                className="grid gap-[18px]"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid gap-2">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    className="w-full h-12 border border-[#D9D9D9] rounded-lg px-3.5 outline-none bg-white placeholder:text-[#9BA0A6] focus:border-[#B9C0FF] focus:shadow-[0_0_0_3px_rgba(24,41,219,0.12)]"
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

                <div className="grid gap-2">
                  <label htmlFor="password">Contraseña</label>
                  <div className="password-wrapper">
                    <input
                      className="w-full h-12 border border-[#D9D9D9] rounded-lg px-3.5 outline-none bg-white placeholder:text-[#9BA0A6] focus:border-[#B9C0FF] focus:shadow-[0_0_0_3px_rgba(24,41,219,0.12)]"
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
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6"
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

                <div className="flex items-center justify-between gap-3">
                  <label className="checkbox inline-flex items-center gap-2 text-[rgba(0,0,0,0.72)] select-none">
                    <input
                      className="w-[18px] h-[18px] accent-[#1829DB]"
                      type="checkbox"
                      name="remember"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                    />
                    <span>Recordar sesión</span>
                  </label>

                  <Link className="hover:underline" to="/forgot-password">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <button
                  className="h-[50px] w-full border border-[#1829DB] rounded-lg bg-[#1829DB] text-white font-medium tracking-[0.32px] cursor-pointer inline-flex items-center justify-center hover:brightness-[1.02] active:translate-y-px"
                  type="submit"
                >
                  Iniciar sesión
                </button>

                <p className="m-0 text-sm text-[rgba(0,0,0,0.72)]">
                  ¿No tenés cuenta?{" "}
                  <Link
                    className="text-[#1829DB] no-underline font-medium hover:underline"
                    to="/signup"
                  >
                    Crear cuenta
                  </Link>
                </p>
              </form>
            </div>

            <div
              className="grid place-items-center max-[980px]:order-first"
              aria-hidden="true"
            >
              <img
                src={loginHero}
                alt="login hero"
                className="max-w-[min(474px,100%)] h-auto block rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
*/
