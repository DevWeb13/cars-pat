import { handleUpload } from '@vercel/blob/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const jsonResponse = await handleUpload({
      body: await request.json(),
      request,
      onBeforeGenerateToken: async (pathname) => {
        // Vous pouvez ajouter une logique d'authentification ici si nécessaire
        return {
          allowedContentTypes: [
            'image/jpeg',
            'image/png',
            'video/mp4' /* autres types MIME */,
          ],
          tokenPayload: JSON.stringify({
            /* données supplémentaires si nécessaire */
          }),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // Ici, vous pouvez ajouter une logique pour mettre à jour votre base de données avec l'URL du fichier téléchargé, par exemple
        console.log('blob upload completed', blob, tokenPayload);
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}
