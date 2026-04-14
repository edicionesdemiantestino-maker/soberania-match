import React from 'react';

export default function Page({ params }: { params: { slug: string } }) {
  const obraId = params.slug.toUpperCase();

  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      color: '#e5e5e5', 
      minHeight: '100vh', 
      padding: '60px 20px', 
      fontFamily: 'serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* MARCA DE AGUA GIGANTE DE FONDO */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(-12deg)',
        fontSize: '20vw',
        fontWeight: '900',
        color: 'white',
        opacity: '0.03',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        zIndex: 0,
        letterSpacing: '-0.05em'
      }}>
        SOBERANÍA
      </div>

      <main style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* CABECERA */}
        <header style={{ borderBottom: '1px solid #262626', paddingBottom: '40px', marginBottom: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
            <span style={{ 
              backgroundColor: '#b45309', 
              color: 'white', 
              fontSize: '11px', 
              padding: '5px 10px', 
              fontWeight: 'bold', 
              borderRadius: '2px', 
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Sello de Soberanía
            </span>
            <span style={{ color: '#525252', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '2px' }}>
              REF: {obraId}
            </span>
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            margin: '0 0 15px 0', 
            color: 'white', 
            fontWeight: 'bold',
            letterSpacing: '-2px',
            lineHeight: '1'
          }}>
            {obraId}
          </h1>
          
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <p style={{ fontSize: '1.4rem', color: '#a3a3a3', margin: 0, fontWeight: '300' }}>
              Un proyecto de <strong style={{ color: 'white', fontWeight: '500' }}>Demián</strong>
            </p>
            <span style={{ color: '#262626' }}>|</span>
            <p style={{ fontSize: '0.9rem', color: '#525252', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
              Patagonia Argentina
            </p>
          </div>
        </header>

        {/* CONTENIDO */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
          
          <section>
            <h2 style={{ fontSize: '12px', color: '#b45309', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '25px', fontWeight: 'bold' }}>
              Sinopsis Editorial
            </h2>
            <p style={{ fontSize: '1.3rem', color: '#d4d4d4', lineHeight: '1.8', fontWeight: '300' }}>
              Esta obra representa la culminación de años de investigación y recopilación de historias. 
              Es el nexo entre la memoria regional y la potencia de la nueva narrativa latinoamericana. 
              Pronto, este espacio se sincronizará con tu base de datos para mostrar el contenido dinámico.
            </p>
          </section>

          <section style={{ 
            marginTop: '20px',
            padding: '40px', 
            borderRadius: '16px', 
            border: '1px solid #171717', 
            backgroundColor: 'rgba(23, 23, 23, 0.4)',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{ fontSize: '11px', color: '#525252', textTransform: 'uppercase', letterSpacing: '2px', marginTop: 0, marginBottom: '20px' }}>
              Estado del Manuscrito
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.1rem', color: '#e5e5e5' }}>Catalogación KDP</span>
              <span style={{ color: '#b45309', fontWeight: 'bold', fontSize: '0.9rem' }}>LISTO PARA MATCH</span>
            </div>
          </section>

        </div>

        <footer style={{ marginTop: '100px', textAlign: 'center', borderTop: '1px solid #171717', paddingTop: '40px' }}>
          <p style={{ fontSize: '11px', color: '#404040', textTransform: 'uppercase', letterSpacing: '3px' }}>
            Estación de Control Editorial - Soberanía Match © 2026
          </p>
        </footer>
      </main>
    </div>
  );
}
