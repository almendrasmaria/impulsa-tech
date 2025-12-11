import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function VerifyEmail() {
  return (
    <div className="w-full min-h-screen bg-[#f7faff] font-[Poppins] flex flex-col">
      <Navbar />

      <main className="flex-1 py-[clamp(1.5rem,4vw,3rem)]">
        <section className="w-[min(1200px,92%)] mx-auto auth">
          <div className="bg-white border border-[#D9D9D9] rounded-[20px] 
            shadow-[0_6px_24px_rgba(16,24,40,0.06)] 
            p-[clamp(16px,2.5vw,28px)]">

            <div className="grid grid-cols-[1.05fr_0.95fr] 
              gap-[clamp(16px,3vw,32px)] items-center 
              max-[980px]:grid-cols-1">

              {/* TEXT COLUMN */}
              <div className="form-col">
                <h1
                  className="text-[clamp(26px,3.2vw,35px)] 
                  font-bold tracking-[0.7px] my-7"
                >
                  Verificá tu correo
                </h1>

                <p className="m-0 mb-6 text-sm text-[rgba(0,0,0,0.72)]">
                  Te enviamos un enlace a{" "}
                  <strong>tu correo electrónico</strong> para verificar tu
                  cuenta.
                </p>

                <div className="grid gap-[12px]">
                  <a
                    className="h-[50px] w-full border border-[#1829DB] 
                    rounded-lg bg-[#1829DB] text-white font-medium 
                    tracking-[0.32px] cursor-pointer inline-flex 
                    items-center justify-center hover:brightness-[1.02] 
                    active:translate-y-px"
                    href="#"
                  >
                    Abrir correo
                  </a>

                  <p className="m-0 text-sm text-[rgba(0,0,0,0.72)] text-center">
                    <a
                      className="text-[#1829DB] no-underline font-medium hover:underline"
                      href="#"
                    >
                      Reenviar enlace
                    </a>
                  </p>

                  <p className="m-0 text-sm text-[rgba(0,0,0,0.72)] text-center">
                    <a
                      className="text-[#1829DB] no-underline font-medium hover:underline"
                      href="/"
                    >
                      Volver al inicio
                    </a>
                  </p>
                </div>
              </div>

              {/* IMAGE */}
              <div
                className="grid place-items-center max-[980px]:order-first"
                aria-hidden="true"
              >
                <img
                  src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=474&q=80"
                  alt="verify email"
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
