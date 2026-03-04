const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const files = [
    { src: 'public/products/coffret.png', dest: 'public/images/categories/coffrets-cadeaux-v2.webp' }
];

async function convert() {
    for (const file of files) {
        try {
            if (fs.existsSync(file.src)) {
                await sharp(file.src)
                    .webp({ quality: 80 })
                    .toFile(file.dest);
                console.log(`Converted ${file.src} to ${file.dest}`);
            } else {
                console.error(`File not found: ${file.src}`);
            }
        } catch (err) {
            console.error(`Error converting ${file.src}:`, err);
        }
    }
}

convert();
