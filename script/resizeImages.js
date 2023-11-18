const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIRECTORY = './public/assets/photosWebp'; // Par exemple: './images/originals'
const OUTPUT_DIRECTORY = './public/assets/photosWebp750*500'; // Par exemple: './images/resized'

// Assurez-vous que le répertoire de sortie existe
if (!fs.existsSync(OUTPUT_DIRECTORY)) {
  fs.mkdirSync(OUTPUT_DIRECTORY, { recursive: true });
}

// Lire tous les fichiers du répertoire d'entrée
const files = fs.readdirSync(INPUT_DIRECTORY);

// Filtrer pour ne garder que les images (vous pouvez ajuster cela en fonction de vos besoins)
const imageFiles = files.filter((file) =>
  ['.jpeg', '.jpg', '.png', '.webp'].includes(path.extname(file))
);

// Redimensionner chaque image
imageFiles.forEach((file) => {
  const inputPath = path.join(INPUT_DIRECTORY, file);
  const outputPath = path.join(OUTPUT_DIRECTORY, file);

  sharp(inputPath)
    .resize(750, 500) // Vous pouvez ajuster ces dimensions
    .toFile(outputPath, (err, info) => {
      if (err) {
        console.error(`Erreur lors du redimensionnement de ${file}:`, err);
      } else {
        console.log(`${file} a été redimensionné avec succès.`);
      }
    });
});
