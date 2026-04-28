import Link from 'next/link'
import { Database, Link2, Sparkles } from 'lucide-react'
import { styles } from './obra/[slug]/_styles'

const cards = [
  {
    icon: Link2,
    title: 'Una ruta por obra',
    text: 'Compartí /obra/slug con prensa, festivales o tu sello. Un solo enlace, identidad clara.',
  },
  {
    icon: Database,
    title: 'Datos en Supabase',
    text: 'La ficha lee la tabla obras_match. Visible solo lo que permitan tus políticas RLS.',
  },
  {
    icon: Sparkles,
    title: 'Listo para salir',
    text: 'Sin login en esta vitrina: pensada para circular en redes y mails como tarjeta pública.',
  },
] as const

export default function HomePage() {
  return (
    <div className={`${styles.shell} match-home relative`}>
      <div className="match-home__ambient" aria-hidden />
      <div className="match-home__noise" aria-hidden />
      <div className={styles.watermark}>SOBERANÍA</div>

      <main className={`${styles.container} relative z-10`}>
        <header className={`${styles.header} mb-12`}>
          <div className="match-home__rule" />
          <p className={styles.eyebrow}>Match editorial · vitrina</p>
          <h1 className={styles.title}>SOBERANÍA MATCH</h1>
          <p className={styles.author}>
            Fichas públicas por obra · Trelew, Patagonia, Argentina
          </p>
        </header>

        <p className="max-w-2xl text-[17px] leading-relaxed text-white/80 mb-10">
          Cada obra catalogada puede tener su propia página en este dominio: misma estética que la ficha,
          pensada para circular sin fricción.
        </p>

        <div className="grid gap-4 sm:grid-cols-3 mb-12">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="match-home__card">
              <Icon
                className="mb-3 h-6 w-6 text-[color:var(--bunker-cta)]"
                strokeWidth={1.5}
                aria-hidden
              />
              <h2 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/90 mb-2">
                {title}
              </h2>
              <p className="m-0 text-sm leading-relaxed text-white/55">{text}</p>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl border border-white/[0.09] px-6 py-8 sm:px-8"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(249,115,22,0.04) 100%)',
          }}
        >
          <p className="text-[10px] tracking-[0.22em] uppercase text-white/40 mb-4">Probar ficha</p>
          <p className="text-white/75 text-sm mb-6 max-w-lg">
            Usá un slug que exista en <span className="text-white/90 font-mono text-xs">obras_match</span>.
            El ejemplo es solo plantilla — reemplazalo por tu slug real.
          </p>
          <Link href="/obra/ejemplo" className="match-home__cta w-fit">
            Ver ficha de ejemplo
          </Link>
        </div>

        <p className="mt-10 text-xs text-white/35 max-w-xl leading-relaxed">
          El panel de autor incluye otra herramienta, «Match editorial», para recomendaciones internas de
          servicios. Esta web es independiente: solo fichas públicas por URL.
        </p>

        <footer className={styles.footer}>
          Soberanía Editorial · INPI · Patagonia
        </footer>
      </main>
    </div>
  )
}
