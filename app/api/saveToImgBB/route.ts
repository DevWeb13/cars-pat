import { NextResponse } from 'next/server';

export async function POST(request: {
  body: ReadableStream;
}): Promise<NextResponse> {
  // Convertir le ReadableStream en Buffer
  const chunks = [];
  const reader = request.body.getReader();
  let done, value;

  while (!done) {
    ({ done, value } = await reader.read());
    if (value) {
      chunks.push(value);
    }
  }
  const buffer = Buffer.concat(chunks);

  // Convertir le Buffer en chaîne
  const rawBody = buffer.toString('utf-8');
  console.log('Raw Body:', rawBody);

  // Convertir le texte en objet JSON
  const parsedBody = JSON.parse(rawBody);
  console.log('Parsed Body:', parsedBody);

  if (!parsedBody || !parsedBody.image) {
    return new NextResponse('', {
      status: 400,
      statusText: 'Invalid request body',
    });
  }

  const { image } = parsedBody;
  console.log('Base64 string:', image);

  try {
    const formData = new FormData();
    formData.append('key', 'c7a82b9a4cc5d7c684d49051ab1d17c8');
    formData.append('image', image);

    const response = await fetch('https://api.imgbb.com/1/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    console.log({ data });

    if (!response.ok) {
      throw new Error(data.message || 'Failed to upload image to ImgBB');
    }

    return NextResponse.json({ url: data.data.url });
  } catch (error: any) {
    return new NextResponse('', { status: 500, statusText: error.message });
  }
}
