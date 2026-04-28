import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { styles } from './_styles'

function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url?.trim() || !key?.trim()) return null
  return createClient(url, key)
}

export default async function Page({ params }: { params: { slug: string } }) {
  const supabase = getSupabase()
  if (!supabase) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyText}>
          Configurá NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY (p. ej. en Vercel o .env.local).
        </p>
      </div>
    )
  }

  const { data: obra, error } = await supabase
    .from('obras_match')
    .select('*')
    .eq('slug', params.slug)
    .single();

  // Si no existe la obra en la base de datos, mostramos un mensaje elegante
  if (!obra || error) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyText}>Obra en proceso de catalogación…</p>
      </div>
    );
  }

  return (
    <div className={styles.shell}>
      <div className={styles.watermark}>SOBERANÍA</div>

      <main className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>SELLO EDITORIAL</p>
          <h1 className={styles.title}>{String(obra.titulo ?? '').toUpperCase()}</h1>
          <p className={styles.author}>Por {obra.autor_nombre || 'Demián'}</p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>Sinopsis Editorial</h2>
          <p>{obra.sinopsis || 'Sinopsis en preparación...'}</p>
        </section>

        <div className={styles.statusCard}>
          <p className="m-0 text-sm">
            ESTADO:{' '}
            <span className="font-semibold text-[color:var(--bunker-cta)]">
              LISTO PARA MATCH
            </span>
          </p>
        </div>

        <footer className={styles.footer}>
          TRELEW, CHUBUT - PATAGONIA ARGENTINA
        </footer>
      </main>
    </div>
  );
}
