import Link from 'next/link'
import { styles } from './obra/[slug]/_styles'

/**
 * Raíz del sitio: las fichas viven en /obra/[slug].
 * Sin esta página, Vercel (y cualquier host) devuelve 404 en /.
 */
export default function HomePage() {
  return (
    <div className={styles.shell}>
      <div className={styles.watermark}>SOBERANÍA</div>
      <main className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>MATCH EDITORIAL</p>
          <h1 className={styles.title}>SOBERANÍA MATCH</h1>
          <p className={styles.author}>
            Fichas públicas por obra — Trelew, Patagonia
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>Cómo funciona</h2>
          <p>
            Cada obra catalogada tiene una URL propia:{' '}
            <strong className="text-white">/obra/tu-slug</strong>
            . Los datos salen de la tabla <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm">obras_match</code> en
            Supabase.
          </p>
          <p className="text-white/70 text-base">
            Si abrís solo el dominio sin slug, no hay ficha que mostrar: por eso antes veías 404. Esta página es el
            punto de entrada.
          </p>
        </section>

        <div className={styles.statusCard}>
          <p className="m-0 text-sm text-white/80">
            Probar una ficha (reemplazá el slug por uno existente en la base):
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

        <footer className={styles.footer}>
          Soberanía Editorial · no confundir con “Match editorial” del panel de autor
        </footer>
      </main>
    </div>
  )
}
