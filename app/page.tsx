import Link from 'next/link'

/**
 * Raíz del sitio: las fichas viven en /obra/[slug].
 * Sin esta página, el deploy devuelve 404 en /.
 */
export default function HomePage() {
  return (
    <div className="min-h-dvh px-5 py-14 text-foreground relative overflow-hidden">
      <div className="pointer-events-none select-none fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 text-[18vw] font-black tracking-tight text-white/5">
        SOBERANÍA
      </div>
      <main className="mx-auto max-w-3xl relative z-10">
        <header className="border-b border-white/10 pb-8 mb-10">
          <p className="text-[12px] font-semibold tracking-[0.3em] uppercase text-[color:var(--bunker-cta)]">
            MATCH EDITORIAL
          </p>
          <h1 className="mt-3 text-5xl md:text-6xl font-black tracking-[-0.06em] leading-[0.9]">
            SOBERANÍA MATCH
          </h1>
          <p className="mt-3 text-base text-white/60">
            Fichas públicas por obra — Trelew, Patagonia
          </p>
        </header>

        <section className="space-y-3 text-[18px] leading-relaxed text-white/85">
          <h2 className="text-[10px] tracking-[0.2em] uppercase text-white/45">Cómo funciona</h2>
          <p>
            Cada obra catalogada tiene una URL propia:{' '}
            <strong className="text-white">/obra/tu-slug</strong>
            . Los datos salen de la tabla{' '}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm">obras_match</code> en Supabase.
          </p>
          <p className="text-white/70 text-base">
            Si abrís solo el dominio sin slug, antes no había página en /: por eso veías 404. Esta es la entrada.
          </p>
        </section>

        <div className="mt-12 rounded-xl border border-white/10 bg-white/5 px-6 py-5">
          <p className="m-0 text-sm text-white/80">
            Probar una ficha (usá un slug que exista en <code className="text-xs">obras_match</code>):
          </p>
          <p className="mt-3 mb-0">
            <Link
              href="/obra/ejemplo"
              className="font-semibold text-[color:var(--bunker-cta)] underline-offset-4 hover:underline"
            >
              /obra/ejemplo
            </Link>
          </p>
        </div>

        <footer className="mt-20 text-center text-[10px] tracking-[0.2em] uppercase text-white/30">
          Soberanía Editorial · distinto del “Match editorial” del panel de autor
        </footer>
      </main>
    </div>
  )
}
