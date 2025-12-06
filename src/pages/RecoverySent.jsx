import recoveryHero from "../assets/recovery-sent.png";

export default function RecoverySent() {
  return (
    <main className="site-main">
      <section className="container auth">
        <div className="card">
          <div className="card-grid">
            <div className="form-col">
              <h1 className="title">Correo de recuperación enviado</h1>
              <p className="signup">
                Te enviamos un enlace a <strong>nombrecorreo@dominio.com</strong> para restablecer tu contraseña.
              </p>

              <div className="form" style={{ gap: "12px" }}>
                <a className="btn-primary" href="#">Reenviar</a>
                <p className="signup">
                  <a className="link-primary" href="/">Volver a iniciar sesión</a>
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
