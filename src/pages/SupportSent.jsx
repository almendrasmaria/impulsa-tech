import supportSentHero from "../assets/support-sent.png";

export default function SupportSent() {
  return (
    <main className="py-[clamp(1.5rem,4vw,3rem)]">
      <section className="w-[min(1200px,92%)] mx-auto auth">
        <div className="bg-white border border-[#D9D9D9] rounded-[20px] shadow-[0_6px_24px_rgba(16,24,40,0.06)] p-[clamp(16px,2.5vw,28px)]">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-[clamp(16px,3vw,32px)] items-center">
            <div className="form-col">
              <h1 className="text-[clamp(26px,3.2vw,35px)] font-bold tracking-[0.7px] my-7 mx-0">
                Mensaje enviado
              </h1>
              <p className="m-0 text-sm text-[rgba(0,0,0,0.72)]">
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
                <p className="m-0 text-sm text-[rgba(0,0,0,0.72)]">
                  <a
                    className="text-[#1829DB] no-underline font-medium hover:underline-primary"
                    href="#"
                  >
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
