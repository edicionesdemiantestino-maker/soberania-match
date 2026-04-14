import { createClient } from '@supabase/supabase-js';

// Conexión con las llaves que pusimos en Vercel
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default async function Page({ params }: { params: { slug: string } }) {
  // 1. Buscamos los datos de la obra en Supabase usando el slug (ej: kaukel)
  const { data: obra, error } = await supabase
    .from('obras_match')
    .select('*')
    .eq('slug', params.slug)
    .single();

  // Si no existe la obra en la base de datos, mostramos un mensaje elegante
  if (!obra || error) {
    return (
      <div style={{ backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'serif' }}>
        <p style={{ opacity: 0.5 }}>Obra en proceso de catalogación...</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#e5e5e5', minHeight: '100vh', padding: '60px 20px', fontFamily: 'serif', position: 'relative' }}>
      
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-12deg)', fontSize: '18vw', fontWeight: '900', color: 'white', opacity: '0.03', pointerEvents: 'none', zIndex: 0 }}>
        SOBERANÍA
      </div>

      <main style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <header style={{ borderBottom: '1px solid #262626', paddingBottom: '30px', marginBottom: '40px' }}>
          <p style={{ color: '#b45309', fontSize: '12px', fontWeight: 'bold', letterSpacing: '3px', margin: '0 0 10px 0' }}>SELLO EDITORIAL</p>
          <h1 style={{ fontSize: '5rem', margin: '0', color: 'white', fontWeight: 'bold', letterSpacing: '-3px', lineHeight: '1' }}>
            {obra.titulo.toUpperCase()}
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Por {obra.autor_nombre || 'Demián'}</p>
        </header>

        <section style={{ lineHeight: '1.8', fontSize: '1.3rem', color: '#d4d4d4' }}>
          <h2 style={{ fontSize: '10px', color: '#525252', letterSpacing: '2px', textTransform: 'uppercase' }}>Sinopsis Editorial</h2>
          <p>{obra.sinopsis || 'Sinopsis en preparación...'}</p>
        </section>

        <div style={{ marginTop: '50px', padding: '30px', border: '1px solid #1a1a1a', borderRadius: '10px', backgroundColor: '#0f0f0f' }}>
          <p style={{ margin: 0, fontSize: '14px' }}>ESTADO: <span style={{ color: '#b45309', fontWeight: 'bold' }}>LISTO PARA MATCH</span></p>
        </div>

        <footer style={{ marginTop: '100px', opacity: 0.2, fontSize: '10px', textAlign: 'center', letterSpacing: '2px' }}>
          TRELEW, CHUBUT - PATAGONIA ARGENTINA
        </footer>
      </main>
    </div>
  );
}
