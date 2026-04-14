import React from 'react';

// Este es el diseño de Soberanía Match
export default function Page({ params }: { params: { slug: string } }) {
  const obraSlug = params.slug;

  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      color: '#e5e5e5', 
      minHeight: '100vh', 
      padding: '40px 20px', 
      fontFamily: 'serif',
      lineHeight: '1.6'
    }}>
      {/* Marca de agua de fondo */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(-15deg)',
        fontSize: '15vw',
        fontWeight: 'bold',
        color: 'white',
        opacity: '0.02',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        zIndex: 0
      }}>
        SOBERANÍA
      </div>

      <main style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <header style={{ borderBottom: '1px solid #262626', paddingBottom: '30px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <span style={{ backgroundColor: '#b45309', color: 'white', fontSize: '10px', padding: '4px 8px', fontWeight: 'bold', borderRadius: '2px', textTransform: 'uppercase' }}>
              Obra Protegida
            </span>
            <span style={{ color: '#525252', fontSize: '10px', fontFamily: 'monospace' }}>
              REF: {obraSlug.toUpperCase()}
            </span>
          </div>
          
          <h1 style={{ fontSize: '3.5rem', margin: '0 0 10px 0', color: 'white', letterSpacing: '-1px' }}>
            {obraSlug.charAt(0).toUpperCase() + obraSlug.slice(1)}
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#a3a3a3', margin: 0 }}>
            Un proyecto de investigación por <strong style={{ color: 'white' }}>Demián</strong>
          </p>
        </header>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '12px', color: '#b45309', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '20px' }}>
            Sinopsis Editorial
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#d4d4d4' }}>
            Esta obra es el resultado de años de recopilación de historias y datos técnicos. 
            Pronto, este espacio mostrará la sinopsis personalizada que generamos con la IA para atraer editoriales.
          </p>
        </section>

        <section style={{ backgroundColor: '#171717', padding: '30px', borderRadius: '12px', border: '1px solid #262626' }}>
          <h3 style={{ fontSize: '12px', color: '#737373', textTransform: 'uppercase', letterSpacing: '2px', marginTop: 0 }}>
            Ficha de Catalogación
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0 0' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #262626' }}>
              <span style={{ color: '#737373' }}>Estado:</span>
              <span style={{ color: '#f59e0b' }}>Listo para vinculación</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
              <span style={{ color: '#737373' }}>Sello:</span>
              <span>Soberanía Editorial</span>
            </li>
          </ul>
        </section>

        <footer style={{ marginTop: '60px', textAlign: 'center', borderTop: '1px solid #262626', paddingTop: '30px' }}>
          <p style={{ fontSize: '10px', color: '#404040', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Patagonia Argentina - Estación de Control Editorial
          </p>
        </footer>
      </main>
    </div>
  );
}
