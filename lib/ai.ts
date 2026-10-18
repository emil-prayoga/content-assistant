import { ContentType, ToneType } from '@/types/content';

interface GenerateOptions {
  topic: string;
  contentType: ContentType;
  tone: ToneType;
}

export async function generateContentFromAI({ topic, contentType, tone }: GenerateOptions): Promise<string> {
  const apiKey = process.env.AI_API_KEY;

  if (!apiKey) {
    throw new Error('AI API key is not configured on the server.');
  }

  const prompt = `You are an expert AI Content Assistant. Generate high-quality content based on the following parameters:
- Topic: "${topic}"
- Content Type: "${contentType}"
- Tone: "${tone}"

Provide only the final generated content directly without introductory or concluding conversational filler.`;

  const maxRetries = 10;
  let attempt = 0;
  let lastError: unknown = null;

  while (attempt < maxRetries) {
    try {
      attempt++;
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 1024,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error?.message || `Gemini API returned status ${response.status}`;
        
        // Cek apakah error ini layak di-retry (misal: 503 Service Unavailable atau indikasi high demand)
        const isRetryable = response.status === 503 || errorMessage.toLowerCase().includes('high demand');

        if (isRetryable && attempt < maxRetries) {
          console.warn(`Attempt ${attempt} failed due to high demand. Retrying in 2 seconds...`);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          continue; // Lanjut ke loop berikutnya
        }

        // Jika bukan error yang bisa di-retry (misal 400, 401, 403), langsung throw error
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!generatedText) {
        throw new Error('Received empty response from Gemini API.');
      }

      return generatedText.trim();

    } catch (error) {
      lastError = error;
      
      // Jika error bukan karena retryable condition atau sudah mencapai batas maxRetries, hentikan loop
      const errorMessage = error instanceof Error ? error.message : '';
      const isRetryableStatus = errorMessage.includes('503') || errorMessage.toLowerCase().includes('high demand');

      if (!isRetryableStatus || attempt >= maxRetries) {
        break; // Keluar dari loop while untuk langsung di-throw di bawah
      }
    }
  }

  // Tangani error akhir setelah loop selesai
  console.error('Gemini AI Generation Error:', lastError);
  
  if (lastError instanceof Error) {
    throw new Error(lastError.message);
  }

  throw new Error('Failed to generate content from Gemini API after multiple attempts.');
}