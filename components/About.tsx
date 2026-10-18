import { Quote } from 'lucide-react';

export default function About() {
  return (
    <section id="tentang" className="py-24 px-6 bg-[#FAFAF8]">
      <div className="mx-auto max-w-6xl">
        
        {/* Label Header */}
        <div className="text-xs font-semibold tracking-wider text-[#6B6B6B] uppercase mb-3">
          FILOSOFI EDITORIAL
        </div>

        {/* Judul Utama */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] mb-12 max-w-3xl leading-[1.15]">
          Memulai dari halaman kosong adalah bagian tersulit.
        </h2>

        {/* Layout 2 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Kolom Kiri: Narasi (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 text-[#6B6B6B] text-sm md:text-base leading-relaxed">
            <p>
              Ide sering kali terhenti di ambang eksekusi. Anda tahu apa yang ingin disampaikan, tetapi mengubah intuisi yang samar menjadi paragraf terstruktur, ringkasan peluncuran yang persuasif, atau konten media sosial yang ringkas menyita banyak energi kognitif.
            </p>
            
            <p>
              AI Content Assistant hadir untuk menjembatani celah tersebut. Ini bukan autopilot pengganti suara editorial Anda; ini adalah meja kerja presisi untuk mewujudkan draf awal yang rapi secara instan, sehingga Anda bisa langsung fokus sebagai kurator dan penyunting.
            </p>

            <div className="pt-4 font-semibold text-[#171717] text-sm md:text-base leading-relaxed">
              Kurangi bergulat dengan kursor kosong, lebih banyak waktu menyampaikan komunikasi yang jelas dan autentik.
            </div>
          </div>

          {/* Kolom Kanan: Kotak Kutipan / Quote Card (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#E7E5E4] bg-white p-8 shadow-sm flex flex-col justify-between space-y-8">
              
              <div className="space-y-4">
                <Quote className="h-8 w-8 text-[#2563EB] rotate-180" />
                <blockquote className="text-lg md:text-xl font-medium text-[#171717] leading-snug">
                  &ldquo;Dari gagasan kasar menjadi draf terstruktur dalam hitungan detik.&rdquo;
                </blockquote>
              </div>

              {/* Profil Footer di dalam Kartu */}
              <div className="flex items-center gap-3 pt-6 border-t border-[#E7E5E4]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563EB]/10 font-bold text-xs text-[#2563EB]">
                  ED
                </div>
                <div>
                  <div className="text-xs font-bold text-[#171717]">Standar Tim Editorial</div>
                  <div className="text-[11px] text-[#6B6B6B]">Dirancang untuk alur produksi konten</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}