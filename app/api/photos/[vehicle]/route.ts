export async function GET(
  request: Request,
  { params }: { params: { vehicle: string } }
) {
  const fs = require('fs');
  const path = require('path');
  const vehicle = params.vehicle;
  const directoryPath = path.join(
    process.cwd(),
    `public/assets/photos/${vehicle}`
  );

  try {
    return new Promise((resolve, reject) => {
      fs.readdir(
        directoryPath,
        (err: NodeJS.ErrnoException | null, files: string[]) => {
          if (err) {
            reject(
              new Response('Unable to scan directory: ' + err, { status: 500 })
            );
          } else {
            const imageFiles = files.filter((file: string) =>
              ['.jpg', '.jpeg', '.png'].includes(
                path.extname(file).toLowerCase()
              )
            );
            resolve(new Response(JSON.stringify(imageFiles), { status: 200 }));
          }
        }
      );
    });
  } catch (error: unknown) {
    return new Response('An error occurred: ' + (error as Error).message, {
      status: 500,
    });
  }
}
