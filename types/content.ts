export type ContentType = 
  | 'Caption Media Sosial'
  | 'Kerangka Blog'
  | 'Deskripsi Produk'
  | 'Artikel Singkat';

export type ToneType = 
  | 'Profesional'
  | 'Kasual'
  | 'Ramah'
  | 'Kreatif';

export interface GenerateRequest {
  topic: string;
  contentType: ContentType;
  tone: ToneType;
}

export interface GenerateResponse {
  success: boolean;
  content?: string;
  error?: string;
}