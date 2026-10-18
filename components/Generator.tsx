'use client';

import { useState } from 'react';
import { ContentType, ToneType, GenerateRequest, GenerateResponse } from '@/types/content';
import GeneratedResult from './GeneratedResult';
import {Sparkles} from 'lucide-react';

const CONTENT_TYPES: ContentType[] = [
  'Caption Media Sosial',
  'Kerangka Blog',
  'Deskripsi Produk',
  'Artikel Singkat',
];

const TONE_TYPES: ToneType[] = [
  'Profesional',
  'Kasual',
  'Ramah',
  'Kreatif',
];

const QUICK_SUGGESTIONS = [
  '+ Peluncuran Produk SaaS',
  '+ Pengantar Buletin',
  '+ Postingan LinkedIn',
];

export default function Generator() {
  const [topic, setTopic] = useState('');
  const [contentType, setContentType] = useState<ContentType>('Caption Media Sosial');
  const [tone, setTone] = useState<ToneType>('Profesional');
  
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasCopied, setHasCopied] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!topic.trim()) {
      setError('Please enter a topic or idea before generating.');
      return;
    }

    setError(null);
    setIsLoading(true);
    setContent('');

    try {
      const payload: GenerateRequest = {
        topic: topic.trim(),
        contentType,
        tone,
      };

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data: GenerateResponse = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to generate content.');
      }

      if (data.content) {
        setContent(data.content);
      } else {
        throw new Error('No content returned from server.');
      }
    } catch (err) {
      console.error('Generation error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerate = () => {
    if (!topic.trim() || isLoading) return;
    handleGenerate({ preventDefault: () => {} } as React.FormEvent);
  };

  const handleCopy = () => {
    if (!content) return;
    navigator.clipboard.writeText(content);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section id="generate" className="py-20 bg-[#FAFAF8]">
      <div className="mx-auto max-w-6xl ">
        <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-semibold tracking-wider text-[#6B6B6B] uppercase mb-3">
            AREA INTERAKTIF
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171717] mb-3">
            Coba Asisten Konten
          </h2>
          <p className="text-sm text-[#6B6B6B]">
            Masukkan topik atau pilih saran cepat di bawah untuk menghasilkan draf instan.
          </p>
        </div>

        <div className="w-full">
          {/* Form Input Area dengan background putih */}
          <div className="rounded-lg border border-[#E7E5E4] bg-white p-8 shadow-sm">
            <form onSubmit={handleGenerate} className="space-y-6">
              <div>
                <label htmlFor="topic" className="block text-sm font-semibold text-[#171717] mb-2">
                  Topik atau Ide <span className="text-[#2563EB]">*</span>
                </label>
                <textarea
                  id="topic"
                  rows={4}
                  value={topic}
                  onChange={(e) => {
                    setTopic(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Ketik topik atau ide konten Anda di sini..."
                  className="w-full rounded-md border border-[#E7E5E4] bg-[#FAFAF8] p-3.5 text-sm text-[#171717] placeholder-[#6B6B6B]/60 focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB] transition-all"
                />
                
                {/* Quick Suggestion Chips */}
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className="text-xs text-[#6B6B6B] font-medium">Saran:</span>
                  {QUICK_SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => setTopic(suggestion.replace('+ ', ''))}
                      className="rounded-md border border-[#E7E5E4] bg-[#FAFAF8] px-2.5 py-1 text-xs font-medium text-[#6B6B6B] hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>

                {error && <p className="mt-2 text-xs text-red-600 font-medium">{error}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#171717] mb-2">Jenis Konten</label>
                <div className="grid grid-cols-2 gap-2">
                  {CONTENT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setContentType(type)}
                      className={`rounded-md border p-3 text-xs font-medium text-left transition-all ${
                        contentType === type
                          ? 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB]'
                          : 'border-[#E7E5E4] bg-[#FAFAF8] text-[#6B6B6B] hover:border-slate-400 hover:text-[#171717]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#171717] mb-2">Nada Suara (Tone)</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TONE_TYPES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTone(t)}
                      className={`rounded-md border p-2.5 text-xs font-medium text-center transition-all ${
                        tone === t
                          ? 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB]'
                          : 'border-[#E7E5E4] bg-[#FAFAF8] text-[#6B6B6B] hover:border-slate-400 hover:text-[#171717]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 rounded-md bg-[#2563EB] py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1D4ED8] disabled:opacity-50 transition-all"
            >
                {isLoading ? 'Menyusun draf...' : (
            <>
                <Sparkles size={16} />
                Buat Konten Sekarang
            </>
            )}
              </button>
              
            {/* Result Display Area */}
            <GeneratedResult
              content={content}
              isLoading={isLoading}
              error={error}
              onCopy={handleCopy}
              onRegenerate={handleRegenerate}
              hasCopied={hasCopied}
            />
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}