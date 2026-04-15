export default function OliMaiStoreLandingPage() {
  const products = [
    {
      title: "Cuadros personalizados",
      description: "Diseños únicos para regalos, recuerdos y decoración con entrega coordinada.",
      icon: "🖼️",
    },
    {
      title: "Impresiones especiales",
      description: "Soluciones creativas para fechas importantes, celebraciones y detalles con valor emocional.",
      icon: "✨",
    },
    {
      title: "Atención por WhatsApp",
      description: "Cotiza rápido, resuelve dudas y confirma tus pedidos desde nuestro canal directo.",
      icon: "💬",
    },
  ];

  const socials = [
    { name: "Instagram", href: "https://www.instagram.com/olimai_store/" },
    { name: "TikTok", href: "https://www.tiktok.com/@olimai_store" },
    { name: "WhatsApp", href: "https://wa.me/56929933458" },
    { name: "Correo", href: "mailto:ventas@olimaistore.cl" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.20),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.18),_transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-8">
          <header className="mb-16 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <div>
              <p className="text-lg font-semibold tracking-wide">OliMai Store</p>
              <p className="text-sm text-slate-300">Tecnología y recuerdos en un solo clic</p>
            </div>
            <a
              href="https://wa.me/56929933458"
              className="rounded-full bg-fuchsia-600 px-5 py-2 text-sm font-semibold shadow-lg shadow-fuchsia-600/30 transition hover:bg-fuchsia-500"
            >
              Comprar por WhatsApp
            </a>
          </header>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                Tienda online en crecimiento
              </span>
              <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Regalos personalizados y soluciones creativas para cada ocasión.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                En OliMai Store transformamos ideas en detalles memorables. Diseños personalizados, atención directa y una experiencia de compra simple desde redes sociales, web y WhatsApp.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/56929933458"
                  className="rounded-2xl bg-fuchsia-600 px-6 py-3 text-base font-semibold shadow-xl shadow-fuchsia-700/30 transition hover:scale-[1.02] hover:bg-fuchsia-500"
                >
                  Hacer un pedido
                </a>
                <a
                  href="mailto:ventas@olimaistore.cl"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-slate-100 transition hover:bg-white/10"
                >
                  Escribir al correo
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-cyan-300">100%</p>
                  <p className="mt-1 text-sm text-slate-300">Atención personalizada</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-cyan-300">+1</p>
                  <p className="mt-1 text-sm text-slate-300">Canal directo de ventas</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-cyan-300">24/7</p>
                  <p className="mt-1 text-sm text-slate-300">Presencia digital</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-fuchsia-600/30 to-cyan-400/20 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] border border-fuchsia-500/20 bg-gradient-to-b from-slate-950 to-slate-900 p-6 text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-fuchsia-600/10 text-5xl shadow-inner shadow-fuchsia-500/20">
                    🛍️
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Canal oficial
                  </p>
                  <h2 className="mt-3 text-4xl font-black text-fuchsia-400">OliMai Store</h2>
                  <p className="mt-4 text-slate-300">
                    Tecnología y recuerdos en un solo clic.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold transition hover:border-fuchsia-400/40 hover:bg-fuchsia-500/10"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Qué hacemos</p>
          <h3 className="mt-3 text-3xl font-bold">Una presentación más profesional para tu marca</h3>
          <p className="mt-4 text-slate-300">
            Tu sitio debe mostrar confianza, claridad y una forma simple de contactarte. Esta estructura está pensada para vender mejor y verse más sólida.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
            >
              <div className="text-4xl">{item.icon}</div>
              <h4 className="mt-4 text-xl font-semibold">{item.title}</h4>
              <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-fuchsia-600/15 to-cyan-500/10 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contacto</p>
          <h3 className="mt-3 text-3xl font-bold">¿Listo para hacer tu pedido?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Escríbenos por WhatsApp o correo y te ayudamos a cotizar tu idea, personalizar tu diseño y coordinar tu pedido.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/56929933458"
              className="rounded-2xl bg-fuchsia-600 px-6 py-3 font-semibold transition hover:bg-fuchsia-500"
            >
              WhatsApp
            </a>
            <a
              href="mailto:ventas@olimaistore.cl"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              ventas@olimaistore.cl
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
