import verifyHero from "../assets/verify-hero.png";

export default function VerifyEmail() {
  return (
    <main className="site-main">
      <section className="container auth">
        <div className="card">
          <div className="card-grid">
            <div className="form-col">
              <h1 className="title">Verificá tu correo</h1>
              <p className="signup">
                Te enviamos un enlace a <strong>nombrecorreo@dominio.com</strong> para verificar tu cuenta.
              </p>

              <div className="form" style={{ gap: "12px" }}>
                <a className="btn-primary" href="#">Abrir correo</a>
                <p className="signup">
                  <a className="link-primary" href="#">Reenviar</a>
                </p>
                <p className="signup">
                  <a className="link-primary" href="/">Volver al inicio</a>
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
