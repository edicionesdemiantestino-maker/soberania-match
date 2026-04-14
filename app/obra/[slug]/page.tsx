import React from 'react';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '60px 20px', 
      fontFamily: 'serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <header style={{ borderBottom: '1px solid #333', paddingBottom: '20px', marginBottom: '40px' }}>
        <h1 style={{ color: '#d97706', fontSize: '14px', letterSpacing: '4px', margin: '0 0 20px 0' }}>
          SOBERANÍA EDITORIAL
        </h1>
        <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>REF-ID: {params.slug.toUpperCase()}</p>
        <h2 style={{ fontSize: '4rem', margin: '10px 0', fontWeight: 'bold' }}>
          {params.slug.toUpperCase()}
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#a3a3a3' }}>Investigación & Desarrollo por Demián</p>
      </header>

      <section style={{ 
        padding: '30px', 
        border: '1px solid #222', 
        borderRadius: '12px', 
        backgroundColor: '#111' 
      }}>
        <p style={{ color: '#d4d4d4', lineHeight: '1.8', fontSize: '1.1rem' }}>
          "El sistema Soberanía Match ha sido desplegado con éxito. Esta página es el nexo entre la investigación y la industria editorial."
        </p>
      </section>

      <footer style={{ marginTop: '100px', opacity: 0.3, fontSize: '10px', textAlign: 'center', letterSpacing: '2px' }}>
        TRELEW, CHUBUT - PATAGONIA ARGENTINA
      </footer>
    </div>
  );
}
