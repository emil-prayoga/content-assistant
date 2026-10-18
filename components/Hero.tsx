import Link from 'next/link';

export default function Hero() {
  return (
    <section id="beranda" className="py-16 md:py-24 px-6 bg-[#FAFAF8]">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Kolom Kiri: Teks & Aksi (lg:col-span-6) */}
        <div className="lg:col-span-6 text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E7E5E4] bg-white px-3.5 py-1.5 text-xs font-medium text-[#6B6B6B] shadow-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-[#2563EB]"></span>
            AI CONTENT ASSISTANT
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] mb-6 leading-[1.15]">
            Buat konten lebih baik, lebih cepat.
          </h1>
          
          <p className="text-base md:text-lg text-[#6B6B6B] mb-8 leading-relaxed max-w-xl">
            Ubah ide sederhana menjadi konten siap pakai dengan bantuan AI. Dirancang untuk alur kerja editorial yang fokus tanpa distraksi atau gesekan yang tidak perlu.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <Link
              href="#generate"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1D4ED8] transition-all"
            >
              Mulai Membuat <span>→</span>
            </Link>
            <Link
              href="#fitur"
              className="inline-flex items-center justify-center rounded-lg border border-[#E7E5E4] bg-white px-6 py-3.5 text-sm font-semibold text-[#171717] hover:bg-slate-50 transition-all"
            >
              Jelajahi Fitur
            </Link>
          </div>

          {/* Metrik Performasi di Bawah Hero */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#171717] tracking-tight">0.4s</div>
              <div className="text-xs text-[#6B6B6B] mt-1">Rata-rata latensi</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#171717] tracking-tight">100%</div>
              <div className="text-xs text-[#6B6B6B] mt-1">Output terstruktur</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#171717] tracking-tight">4 Nada</div>
              <div className="text-xs text-[#6B6B6B] mt-1">Karakter suara</div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Preview Workspace Mockup (lg:col-span-6) */}
        <div className="lg:col-span-6">
          <div className="rounded-xl border border-[#E7E5E4] bg-white shadow-sm overflow-hidden">
            
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-[#E7E5E4] bg-[#FAFAF8] px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#E7E5E4]"></div>
                <div className="h-3 w-3 rounded-full bg-[#E7E5E4]"></div>
                <div className="h-3 w-3 rounded-full bg-[#E7E5E4]"></div>
                <span className="ml-2 text-xs font-mono text-[#6B6B6B]">workspace / sesi-0842.md</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#6B6B6B]">
                <span>v2.4 stabil</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-[#171717]">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span> Siap
                </span>
              </div>
            </div>

            {/* Window Body (Split Pane Preview) */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAFAF8]/50">
              
              {/* Sisi Kiri Mockup: Input & Metadata */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-medium text-[#6B6B6B]">
                  <span>PROMPT INPUT</span>
                  <span>68 kar</span>
                </div>
                <div className="rounded-lg border border-[#E7E5E4] bg-white p-3.5 text-xs text-[#171717] leading-relaxed font-medium">
                  &ldquo;Pengumuman rilis design system minimalis untuk tim perancang produk senior.&rdquo;
                </div>

                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#E7E5E4]/60">
                    <span className="text-[#6B6B6B]">Pilihan Nada</span>
                    <span className="font-semibold text-[#171717]">Profesional</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E7E5E4]/60">
                    <span className="text-[#6B6B6B]">Format</span>
                    <span className="font-semibold text-[#171717]">Pembaruan Produk</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#6B6B6B]">Target Panjang</span>
                    <span className="font-semibold text-[#171717]">~140 kata</span>
                  </div>
                </div>

                <div className="rounded-lg border border-[#E7E5E4] bg-white p-3 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2563EB]">
                    <span>✦</span> Draf Deterministik
                  </div>
                  <p className="text-[11px] text-[#6B6B6B] leading-normal">
                    Terstruktur tanpa basa-basi editorial atau pengulangan kata.
                  </p>
                </div>
              </div>

              {/* Sisi Kanan Mockup: Draf Hasil & Aksi */}
              <div className="flex flex-col justify-between rounded-lg border border-[#E7E5E4] bg-white p-4">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded bg-[#2563EB]/10 px-2 py-0.5 text-[10px] font-bold text-[#2563EB]">DRAF DIBUAT</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-[#6B6B6B]">104 kata</span>
                      <button className="inline-flex items-center gap-1 rounded border border-[#E7E5E4] bg-white px-2 py-1 text-[11px] font-medium text-[#171717] hover:bg-slate-50">
                        <span>📋</span> Salin
                      </button>
                    </div>
                  </div>

                  <h4 className="text-xs font-bold text-[#171717] mb-2">
                    Memperkenalkan Aperture: Dirancang untuk kejelasan dalam skala besar.
                  </h4>

                  <p className="text-[11px] text-[#6B6B6B] leading-relaxed space-y-2">
                    Banyak sistem desain menumpuk kerumitan seiring waktu. Hari ini, kami merilis Aperture—kit desain fondasional yang bersih dari ornamen berlebih dan dikalibrasi khusus untuk tim perangkat lunak berkecepatan tinggi.
                    <br /><br />
                    Menghadirkan 48 komponen ergonomis, token 8px yang presisi, bebas gaya arbitrer, dan sinkronisasi Figma-ke-kode otomatis.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#E7E5E4] text-[11px] text-[#6B6B6B]">
                  <span>Tokens: 184</span>
                  <span className="flex items-center gap-1 text-[#2563EB] font-medium">
                    Waktu baca: 28 detik <span>✓</span>
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}