import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E7E5E4] bg-[#FAFAF8]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4 px-6 lg:px-0">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="text-base font-semibold tracking-tight text-[#171717]">
            AI Content Assistant
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6B6B6B]">
          <Link href="#beranda" className="hover:text-[#171717] transition-colors">Beranda</Link>
          <Link href="#tentang" className="hover:text-[#171717] transition-colors">Tentang</Link>
          <Link href="#teknologi" className="hover:text-[#171717] transition-colors">Teknologi</Link>
          <Link href="#fitur" className="hover:text-[#171717] transition-colors">Fitur</Link>
        </nav>

        {/* Primary Action & Account */}
        <div className="flex items-center gap-4">
          <Link
            href="#generate"
            className="rounded-lg bg-[#2563EB] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#1D4ED8] transition-all"
          >
            + Buat Konten
          </Link>
        </div>
      </div>
    </header>
  );
}