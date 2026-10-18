export default function Features() {
  const featuresList = [
    {
      icon: (
        <svg className="h-4 w-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Generasi Konten AI',
      description: 'Hasilkan konten terstruktur dari topik sederhana atau satu kalimat perintah tanpa rekayasa prompt rumit.',
      badge: 'Input: Kalimat prompt tunggal',
    },
    {
      icon: (
        <svg className="h-4 w-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      ),
      title: 'Beragam Format Konten',
      description: 'Beralih mulus antara takarir media sosial, kerangka artikel blog, deskripsi produk, atau artikel ringkas.',
      badge: '4 Skema khusus',
    },
    {
      icon: (
        <svg className="h-4 w-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Pilihan Nada & Gaya',
      description: 'Kalibrasi gaya bahasa dengan pilihan Profesional, Kasual, Ramah, atau Kreatif sesuai audiens Anda.',
      badge: 'Matriks konsistensi suara',
    },
    {
      icon: (
        <svg className="h-4 w-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Generasi Cepat',
      description: 'Jalur respons sub-detik dengan format deterministik tanpa jeda waktu tunggu yang canggung.',
      badge: '<500ms rata-rata eksekusi',
    },
    {
      icon: (
        <svg className="h-4 w-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
      ),
      title: 'Salin Hasil Sekali Klik',
      description: 'Salin langsung ke papan klip dengan format Markdown bersih yang siap ditempelkan di mana saja.',
      badge: 'Integrasi Clipboard API',
    },
    {
      icon: (
        <svg className="h-4 w-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Buat Ulang (Regenerasi)',
      description: 'Eksplorasi variasi baru seketika tanpa perlu mereset parameter atau kehilangan draf sebelumnya.',
      badge: 'Memori percabangan draf',
    },
  ];

  return (
    <section id="fitur" className="py-24 px-6 bg-[#FAFAF8]">
      <div className="mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="text-xs font-semibold tracking-wider text-[#6B6B6B] uppercase mb-3">
            KEMAMPUAN
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#171717] mb-4">
            Dirancang untuk hasil kerja harian yang andal
          </h2>
          <p className="text-base text-[#6B6B6B] leading-relaxed">
            Setiap alat dirancang mengikuti alur alami penulisan manusia: konsepsi, format, kalibrasi, dan ekspor.
          </p>
        </div>

        {/* Grid Kartu Fitur */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#E7E5E4] bg-white p-7 shadow-sm flex flex-col justify-between transition-all hover:border-[#2563EB]/40"
            >
              <div>
                {/* Icon Box */}
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#E7E5E4] bg-[#FAFAF8] mb-5">
                  {item.icon}
                </div>

                <h3 className="text-base font-bold text-[#171717] mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Footer Badge di dalam Card */}
              <div className="rounded-md border border-[#E7E5E4] bg-[#FAFAF8] px-3.5 py-2.5 text-xs font-medium text-[#171717]">
                {item.badge}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}