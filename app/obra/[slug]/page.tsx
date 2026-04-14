export default function Page({ params }: { params: { slug: string } }) {
  const nombreObra = params.slug.toUpperCase();

  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      color: '#e5e5e5', 
      minHeight: '100vh', 
      padding: '60px 20px', 
      fontFamily: 'serif',
      position: 'relative'
    }}>
      
      {/* MARCA DE AGUA */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(-12deg)',
        fontSize: '18vw',
        fontWeight: '900',
        color: 'white',
        opacity: '0.03',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        SOBERANÍA
      </div>

      <main style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <header style={{ borderBottom: '1px solid #262626', paddingBottom: '30px', marginBottom: '40px' }}>
          <p style={{ color: '#b45309', fontSize: '12px', fontWeight: 'bold', letterSpacing: '3px', margin: '0 0 10px 0' }}>
            SELLO EDITORIAL
          </p>
          <h1 style={{ fontSize: '5rem', margin: '0', color: 'white', fontWeight: 'bold', letterSpacing: '-3px' }}>
            {nombreObra}
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Investigación por Demián</p>
        </header>

        <section style={{ lineHeight: '1.8', fontSize: '1.3rem', color: '#d4d4d4' }}>
          <h2 style={{ fontSize: '10px', color: '#525252', letterSpacing: '2px', textTransform: 'uppercase' }}>Sinopsis</h2>
          <p>
            Esta obra representa la culminación de años de investigación en la Patagonia. 
            El sistema <strong>Soberanía Match</strong> está listo para vincular esta pieza con la industria.
          </p>
        </section>

        <div style={{ marginTop: '50px', padding: '30px', border: '1px solid #1a1a1a', borderRadius: '10px', backgroundColor: '#0f0f0f' }}>
          <p style={{ margin: 0, fontSize: '14px' }}>ESTADO: <span style={{ color: '#b45309', fontWeight: 'bold' }}>LISTO PARA MATCH</span></p>
        </div>
      </main>
    </div>
  );
}
