import recoveryHero from "../assets/recovery-sent.png";

export default function RecoverySent() {
  return (
    <main className="py-[clamp(1.5rem,4vw,3rem)]">
      <section className="container auth">
        <div className="card">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-[clamp(16px,3vw,32px)] items-center">
            <div className="form-col">
              <h1 className="text-[clamp(26px,3.2vw,35px)] font-bold tracking-[0.7px] my-7 mx-0">
                Correo de recuperación enviado
              </h1>
              <p className="signup">
                Te enviamos un enlace a{" "}
                <strong>nombrecorreo@dominio.com</strong> para restablecer tu
                contraseña.
              </p>

              <div className="form" style={{ gap: "12px" }}>
                <a className="btn-primary" href="#">
                  Reenviar
                </a>
                <p className="signup">
                  <a className="link-primary" href="/">
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
