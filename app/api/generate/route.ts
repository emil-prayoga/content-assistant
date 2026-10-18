import { NextResponse } from 'next/server';
import { generateContentFromAI } from '@/lib/ai';
import { GenerateRequest, GenerateResponse } from '@/types/content';

export async function POST(request: Request) {
  function getErrorMessage(error: unknown): string {
    if (error instanceof Error) return error.message;
    if (typeof error === 'string') return error;
    return 'An unexpected error occurred while generating content.';
  }
  try {
    const body: GenerateRequest = await request.json();
    const { topic, contentType, tone } = body;

    // T-402: Validasi input server-side
    if (!topic || typeof topic !== 'string' || !topic.trim()) {
      return NextResponse.json<GenerateResponse>(
        { success: false, error: 'Topic is required and must be a valid string.' },
        { status: 400 }
      );
    }

    if (!contentType || !tone) {
      return NextResponse.json<GenerateResponse>(
        { success: false, error: 'Content type and tone are required.' },
        { status: 400 }
      );
    }

    // T-405 s.d. T-407: Proses AI & Error Handling
    const content = await generateContentFromAI({ topic, contentType, tone });

    // T-408: Return structured success response
    return NextResponse.json<GenerateResponse>({
      success: true,
      content,
    });
  } 
  catch (error) {
    console.error('API Route Error (/api/generate):', error);

    const errorMessage = getErrorMessage(error);

    return NextResponse.json<GenerateResponse>(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}