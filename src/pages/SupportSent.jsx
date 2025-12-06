import supportSentHero from "../assets/support-sent.png";

export default function SupportSent() {
  return (
    <main className="site-main">
      <section className="container auth">
        <div className="card">
          <div className="card-grid">
            <div className="form-col">
              <h1 className="title">Mensaje enviado</h1>
              <p className="signup">
                ¡Gracias! Tu mensaje fue enviado. Te escribiremos a
                <strong> correoejemplo@gmail.com</strong>.
                <br /><br />
                ID de solicitud <strong>#A-2731</strong>
              </p>

              <div className="form" style={{ gap: "12px" }}>
                <a className="btn-primary" href="/">Volver a inicio</a>
                <p className="signup">
                  <a className="link-primary" href="#">Ver Preguntas Frecuentes</a>
                </p>
              </div>
            </div>

            <div className="art-col" aria-hidden="true">
              <img src={supportSentHero} alt="support sent hero" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
