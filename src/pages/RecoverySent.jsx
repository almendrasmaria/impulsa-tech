import recoveryHero from "../assets/recovery-sent.png";

export default function RecoverySent() {
  return (
    <main className="py-[clamp(1.5rem,4vw,3rem)]">
      <section className="w-[min(1200px,92%)] mx-auto bg-white py-10 auth">
        <div className="card">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-[clamp(16px,3vw,32px)] items-center">
            <div className="form-col">
              <h1 className="text-[clamp(26px,3.2vw,35px)] font-bold tracking-[0.7px] my-7 mx-0">
                Correo de recuperación enviado
              </h1>
              <p className="m-0 text-sm text-[rgba(0,0,0,0.72)]">
                Te enviamos un enlace a{" "}
                <strong>nombrecorreo@dominio.com</strong> para restablecer tu
                contraseña.
              </p>

              <div className="grid gap-[18px]" style={{ gap: "12px" }}>
                <a
                  className="h-[50px] w-full border border-[#1829DB] rounded-lg bg-[#1829DB] text-white font-medium tracking-[0.32px] cursor-pointer inline-flex items-center justify-center hover:brightness-[1.02] active:translate-y-px"
                  href="#"
                >
                  Reenviar
                </a>
                <p className="m-0 text-sm text-[rgba(0,0,0,0.72)]">
                  <a
                    className="text-[#1829DB] no-underline font-medium hover:underline"
                    href="/"
                  >
                    Volver a iniciar sesión
                  </a>
                </p>
              </div>
            </div>

            <div className="art-col" aria-hidden="true">
              <img src={recoveryHero} alt="recovery sent hero" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
