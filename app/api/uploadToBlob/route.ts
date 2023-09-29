import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const filename = request.url?.split('?filename=')[1];
    if (!filename) {
      return NextResponse.json(
        { message: 'Filename is missing' },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await request.arrayBuffer());

    const blob = await put(filename, buffer, {
      access: 'public',
      addRandomSuffix: true,
      cacheControlMaxAge: 31536000,
    });

    console.log('Blob URL:', blob.url);

    return NextResponse.json({ blobUrl: blob.url }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}
