
const fs = require('fs');
const path = require('path');

// Read products.ts
const productsPath = path.join(__dirname, '../data/products.ts');
const productsContent = fs.readFileSync(productsPath, 'utf8');

// Find all image references
const imageRegex = /image:\s*"([^"]+)"/g;
let match;
const images = [];

while ((match = imageRegex.exec(productsContent)) !== null) {
    images.push(match[1]);
}

console.log(`Found ${images.length} image references in products.ts`);

let missingCount = 0;
const publicDir = path.join(__dirname, '../public');

images.forEach(img => {
    // image paths in products.ts start with / (e.g. /products/foo.webp)
    const localPath = path.join(publicDir, img);

    if (!fs.existsSync(localPath)) {
        console.error(`MISSING: ${img}`);
        missingCount++;
    }
});

if (missingCount === 0) {
    console.log('✅ All images verified successfully!');
    process.exit(0);
} else {
    console.error(`❌ Found ${missingCount} missing images.`);
    process.exit(1);
}
