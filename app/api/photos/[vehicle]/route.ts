export async function GET(
  request: Request,
  { params }: { params: { vehicle: string } }
): Promise<Response> {
  try {
    const fs = require('fs');
    const path = require('path');
    const vehicle = params.vehicle;
    const directoryPath = path.join(
      process.cwd(),
      `public/assets/photosWebp750*500/${vehicle}`
    );

    return new Promise((resolve, reject) => {
      fs.readdir(
        directoryPath,
        (err: NodeJS.ErrnoException | null, files: string[]) => {
          if (err) {
            reject(
              new Response('Impossible de scanner le répertoire: ' + err, {
                status: 500,
              })
            );
          } else {
            const imageFiles = files.filter((file: string) =>
              ['.jpg', '.jpeg', '.png', '.webp'].includes(
                path.extname(file).toLowerCase()
              )
            );
            resolve(new Response(JSON.stringify(imageFiles), { status: 200 }));
          }
        }
      );
    });
  } catch (error) {
    return new Response(
      'Une erreur est survenue: ' + (error as Error).message,
      {
        status: 500,
      }
    );
  }
}
