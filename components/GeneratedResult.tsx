interface GeneratedResultProps {
  content: string;
  isLoading: boolean;
  error: string | null;
  onCopy: () => void;
  onRegenerate: () => void;
  hasCopied: boolean;
}

export default function GeneratedResult({
  content,
  isLoading,
  error,
  onCopy,
  onRegenerate,
  hasCopied,
}: GeneratedResultProps) {
  return (
    <div className="rounded-lg border border-[#E7E5E4] bg-[#FAFAF8] p-6 shadow-sm flex flex-col h-full min-h-[480px]">
      <div className="flex items-center justify-between mb-4">
        {content && !isLoading && (
          <span className="text-[11px] font-medium text-[#6B6B6B] bg-white px-2 py-1 rounded border border-[#E7E5E4]">
            {content.split(/\s+/).length} kata
          </span>
        )}
      </div>

      <div className="flex-1 min-h-[320px] flex flex-col items-center justify-center rounded-md border border-dashed border-[#E7E5E4] bg-white p-6 text-center relative">
        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center gap-3">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#2563EB] border-t-transparent"></div>
            <p className="text-xs font-medium text-[#6B6B6B]">Menyusun draf sesuai parameter...</p>
          </div>
        )}

        {/* Error State */}
        {!isLoading && error && (
          <div className="text-red-600 text-xs max-w-sm">
            <p className="font-semibold mb-1">Gagal Menghasilkan Konten</p>
            <p className="text-[#6B6B6B]">{error}</p>
          </div>
        )}

        {/* Success State */}
        {!isLoading && !error && content && (
          <div className="w-full h-full text-left flex flex-col justify-between">
            <div className="whitespace-pre-wrap text-sm text-[#171717] leading-relaxed font-normal overflow-y-auto max-h-[320px] pr-2 mb-4">
              {content}
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-[#E7E5E4]">
              <button
                type="button"
                onClick={onCopy}
                className="flex-1 rounded-md bg-[#171717] hover:bg-black px-4 py-2 text-xs font-semibold text-white transition-all flex items-center justify-center gap-2"
              >
                {hasCopied ? '✓ Tersalin ke Clipboard!' : 'Salin Hasil (Copy)'}
              </button>
              <button
                type="button"
                onClick={onRegenerate}
                className="rounded-md border border-[#E7E5E4] bg-white hover:bg-slate-50 px-4 py-2 text-xs font-semibold text-[#171717] transition-all"
              >
                Buat Ulang
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && !content && (
          <div className="max-w-xl text-center mx-auto">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-600 mx-auto mb-2">
               <svg width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
              
                <path
                  d="M6 3H14L19 8V21H6V3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 3V8H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 13H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M9 17H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold text-[#171717] mb-1">Konten hasil AI akan muncul di sini</p>
            <p className="text-xs text-[#6B6B6B]">Masukkan topik di atas, sesuaikan parameter, dan biarkan AI menyusun draf pertama Anda dalam hitungan detik.</p>
          </div>
        )}
      </div>
    </div>
  );
}