import supportSentHero from "../assets/support-sent.png";

export default function SupportSent() {
  return (
    <main className="py-[clamp(1.5rem,4vw,3rem)]">
      <section className="container auth">
        <div className="card">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-[clamp(16px,3vw,32px)] items-center">
            <div className="form-col">
              <h1 className="text-[clamp(26px,3.2vw,35px)] font-bold tracking-[0.7px] my-7 mx-0">
                Mensaje enviado
              </h1>
              <p className="signup">
                ¡Gracias! Tu mensaje fue enviado. Te escribiremos a
                <strong> correoejemplo@gmail.com</strong>.
                <br />
                <br />
                ID de solicitud <strong>#A-2731</strong>
              </p>

              <div className="grid gap-[18px]" style={{ gap: "12px" }}>
                <a className="btn-primary" href="/">
                  Volver a inicio
                </a>
                <p className="signup">
                  <a className="link-primary" href="#">
                    Ver Preguntas Frecuentes
                  </a>
                </p>
              </div>
            </div>

            <div className="art-col" aria-hidden="true">
              <img
                src={supportSentHero}
                alt="support sent hero"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
