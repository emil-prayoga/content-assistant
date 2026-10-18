import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E7E5E4] pt-16 pb-12 px-6 text-[#6B6B6B]">
      <div className="mx-auto max-w-6xl">
        
        {/* Konten Utama Footer (3 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Kolom 1: Informasi Produk (col-span-6) */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="text-sm font-bold text-[#171717]">AI Content Assistant</h3>
            <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-md">
              Alat produktivitas berbasis AI yang membantu kreator, pemasar, dan penulis menyusun konten berkualitas dengan lebih cepat dan terstruktur.
            </p>
          </div>

          {/* Kolom 2: Navigasi (col-span-3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#171717]">NAVIGASI</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#beranda" className="hover:text-[#171717] transition-colors">Beranda</Link>
              </li>
              <li>
                <Link href="#tentang" className="hover:text-[#171717] transition-colors">Tentang</Link>
              </li>
              <li>
                <Link href="#teknologi" className="hover:text-[#171717] transition-colors">Teknologi</Link>
              </li>
              <li>
                <Link href="#fitur" className="hover:text-[#171717] transition-colors">Fitur</Link>
              </li>
              <li>
                <Link href="#generate" className="hover:text-[#171717] transition-colors">Buat Konten</Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Dibangun Dengan (col-span-3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#171717]">DIBANGUN DENGAN</h4>
            <div className="flex flex-row gap-1.5 pt-1 ">
              <span className="rounded border border-[#E7E5E4] whitespace-nowrap  bg-white px-2.5 py-1 text-xs font-medium text-[#171717]">Next.js</span>
              <span className="rounded border border-[#E7E5E4] whitespace-nowrap  bg-white px-2.5 py-1 text-xs font-medium text-[#171717]">AI Integration</span>
            </div>
            <p className="text-xs text-[#6B6B6B] leading-relaxed pt-2">
              Dirancang dengan kisi modular 8px yang ergonomis untuk produktivitas modern.
            </p>
          </div>

        </div>

        {/* Garis Pembatas & Copyright */}
        <div className="border-t border-[#E7E5E4] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            &copy; 2026 AI Content Assistant. Hak cipta dilindungi.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#171717] transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-[#171717] transition-colors">Ketentuan Layanan</Link>
            <Link href="#" className="hover:text-[#171717] transition-colors">Dokumentasi</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}