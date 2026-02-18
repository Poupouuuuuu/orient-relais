
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRODUCTS_DIR = path.join(__dirname, '../public/products');

async function convertImages() {
    if (!fs.existsSync(PRODUCTS_DIR)) {
        console.error(`Directory not found: ${PRODUCTS_DIR}`);
        return;
    }

    const files = fs.readdirSync(PRODUCTS_DIR);
    const imageFiles = files.filter(file => /\.(png|jpg|jpeg)$/i.test(file));

    console.log(`Found ${imageFiles.length} images to convert.`);

    for (const file of imageFiles) {
        const filePath = path.join(PRODUCTS_DIR, file);
        const parsed = path.parse(file);
        const newFilePath = path.join(PRODUCTS_DIR, `${parsed.name}.webp`);

        try {
            if (fs.existsSync(newFilePath)) {
                console.log(`Skipping ${file}, ${parsed.name}.webp already exists.`);
                continue;
            }

            await sharp(filePath)
                .webp({ quality: 80 })
                .toFile(newFilePath);

            console.log(`Converted: ${file} -> ${parsed.name}.webp`);

            // Delete original file after successful conversion
            fs.unlinkSync(filePath);
            console.log(`Deleted original: ${file}`);
        } catch (error) {
            console.error(`Error converting ${file}:`, error);
        }
    }

    console.log('Conversion complete!');
}

convertImages();
