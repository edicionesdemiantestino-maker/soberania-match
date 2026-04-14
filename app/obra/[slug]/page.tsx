import React from 'react';

export default function LandingObra({ params }: { params: { slug: string } }) {
  // El slug es lo que escribas en la URL (ej: kaukel)
  const obraId = params.slug;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* MARCA DE AGUA DE FONDO (Soberanía Editorial) */}
      <div className="fixed inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[25vw] font-bold rotate-12 tracking-tighter">SOBERANÍA</h1>
      </div>

      <main className="relative max-w-5xl mx-auto px-6 py-16 md:py-24">
        
        {/* CABECERA PROFESIONAL */}
        <header className="border-b border-neutral-800 pb-10 mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 text-[10px] font-black tracking-[0.2em] uppercase bg-amber-600 text-white rounded-sm">
              Sello de Soberanía
            </span>
            <span className="text-neutral-500 text-xs font-mono tracking-widest">
              REF-OBRA: {obraId.toUpperCase()}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 tracking-tighter bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            Título de la Obra
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-neutral-400">
            <p className="text-xl font-light">
              Un proyecto de <span className="text-neutral-100 font-medium">Demián</span>
            </p>
            <span className="hidden md:block text-neutral-700">|</span>
            <p className="text-sm uppercase tracking-widest text-neutral-500">
              Investigación & Desarrollo Editorial
            </p>
          </div>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* COLUMNA IZQUIERDA: DETALLES */}
          <div className="lg:col-span-8 space-y-12">
            
            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] text-amber-500 font-bold mb-6">Sinopsis del Manuscrito</h2>
              <p className="text-xl md:text-2xl leading-relaxed text-neutral-300 font-light">
                Esta obra representa el eslabón final de una investigación profunda. 
                Aquí se cargará automáticamente la descripción que trabajaste con el Oráculo, 
                optimizada para captar la atención de editoriales y lectores.
              </p>
            </section>

            <section className="bg-neutral-900/40 p-10 border border-neutral-800/50 rounded-2xl backdrop-blur-sm">
              <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold mb-6">Muestra de Estilo</h2>
              <div className="border-l-2 border-amber-600 pl-8 py-2">
                <p className="text-lg italic text-neutral-400 leading-loose">
                  "Hay silencios en el sur que gritan verdades antiguas. No es solo tierra; es memoria líquida que fluye entre los dedos de quien se atreve a escribirla..."
                </p>
              </div>
            </section>
          </div>

          {/* COLUMNA DERECHA: FICHA Y ACCIONES */}
          <div className="lg:col-span-4">
            <div className="sticky top-12 space-y-6">
              
              <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 shadow-2xl">
                <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-8 text-center">Datos de Catalogación</h3>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-neutral-800 pb-3">
                    <span className="text-neutral-500">Categoría KDP:</span>
                    <span className="text-neutral-200">Ficción Histórica</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800 pb-3">
                    <span className="text-neutral-500">Región:</span>
                    <span className="text-neutral-200">Patagonia</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800 pb-3">
                    <span className="text-neutral-500">Estado:</span>
                    <span className="text-amber-500">Listo para Match</span>
                  </div>
                </div>

                <div className="mt-10 space-y-3">
                  <button className="w-full bg-white text-black py-4 rounded-lg font-black text-xs uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all duration-300">
                    Solicitar Dossier PDF
                  </button>
                  <button className="w-full border border-neutral-700 text-neutral-300 py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-all">
                    Contactar Autor
                  </button>
                </div>
              </div>

              <p className="text-[10px] text-center text-neutral-600 uppercase tracking-widest px-4">
                Protegido por Soberanía Editorial © 2026
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
