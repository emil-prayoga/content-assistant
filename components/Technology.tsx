import {  Bot } from 'lucide-react';
import { SiNextdotjs, SiTypescript, SiTailwindcss  } from 'react-icons/si';

export default function TechStack() {
  const techList = [
    {
      number: '01',
      name: 'Next.js',
      description: 'Framework React untuk aplikasi web modern yang terstruktur',
      icon: <SiNextdotjs className="h-4 w-4 text-[#2563EB]" />,
    },
    {
      number: '02',
      name: 'Tailwind CSS',
      description: 'Token desain berbasis 8px yang ergonomis',
      icon: <SiTailwindcss className="h-4 w-4 text-[#2563EB]" />,
    },
    {
      number: '03',
      name: 'TypeScript',
      description: 'Pengetikan statis untuk kode yang lebih aman dan terstruktur',
      icon: <SiTypescript  className="h-4 w-4 text-[#2563EB]" />,
    },
    {
      number: '04',
      name: 'AI Integration',
      description: 'Integrasi API AI untuk fitur web yang adaptif dan cerdas',
      icon: <Bot className="h-4 w-4 text-[#2563EB]" />,
    },
  ];

  return (
    <section id="teknologi" className="py-24 px-6 bg-[#FAFAF8]">
      <div className="mx-auto max-w-6xl">
        
        {/* Header Section (Split Layout: Kiri Judul, Kanan Deskripsi) */}
        <div className="max-w-2xl mx-auto text-center mb-14 gap-6">
          <div>
            <div className="text-xs font-semibold tracking-wider text-[#6B6B6B] uppercase mb-3">
              ARSITEKTUR SISTEM
            </div>
            <h2 className="text-3xl md:text-4xl mb-3 font-bold text- tracking-tight text-[#171717]">
              Dibuat dengan standar web modern
            </h2>
            <p className="text-base md:text-lg text-[#6B6B6B] mb-8 leading-relaxed ">
              Dibangun tanpa kerangka kerja yang berat. Dioptimalkan untuk performa cepat dan perenderan DOM kilat.
            </p>
          </div>
        </div>

        {/* Grid Kartu Teknologi (4 Kolom) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techList.map((tech, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#E7E5E4] bg-white p-6 shadow-sm flex flex-col justify-between transition-all hover:border-[#2563EB]/40 relative"
            >
              <div>
                {/* Baris Atas Kartu: Nomor & Ikon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-semibold text-[#6B6B6B]">
                    {tech.number}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded border border-[#E7E5E4] bg-[#FAFAF8]">
                    {tech.icon}
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#171717] mb-2">
                  {tech.name}
                </h3>

                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}