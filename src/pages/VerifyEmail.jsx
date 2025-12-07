import verifyHero from "../assets/verify-hero.png";

export default function VerifyEmail() {
  return (
    <main className="py-[clamp(1.5rem,4vw,3rem)]">
      <section className="container auth">
        <div className="card">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-[clamp(16px,3vw,32px)] items-center">
            <div className="form-col">
              <h1 className="text-[clamp(26px,3.2vw,35px)] font-bold tracking-[0.7px] my-7 mx-0">
                Verificá tu correo
              </h1>
              <p className="signup">
                Te enviamos un enlace a{" "}
                <strong>nombrecorreo@dominio.com</strong> para verificar tu
                cuenta.
              </p>

              <div className="grid gap-[18px]" style={{ gap: "12px" }}>
                <a className="btn-primary" href="#">
                  Abrir correo
                </a>
                <p className="signup">
                  <a className="link-primary" href="#">
                    Reenviar
                  </a>
                </p>
                <p className="signup">
                  <a className="link-primary" href="/">
                    Volver al inicio
                  </a>
                </p>
              </div>
            </div>

            <div className="art-col" aria-hidden="true">
              <img src={verifyHero} alt="verify hero" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
