const fs = require('fs');
const path = require('path');

// Define the dropins folder
const dropinsDir = path.join('scripts', '__dropins__');

// Remove existing dropins folder
if (fs.existsSync(dropinsDir)) {
  fs.rmSync(dropinsDir, { recursive: true });
}

// Create scripts/__dropins__ directory if not exists
fs.mkdirSync(dropinsDir, { recursive: true });

// Copy specified files from node_modules/@dropins to scripts/__dropins__
fs.readdirSync('node_modules/@dropins', { withFileTypes: true }).forEach((file) => {
  // Skip if is not folder
  if (!file.isDirectory()) {
    return;
  }
  fs.cpSync(path.join('node_modules', '@dropins', file.name), path.join(dropinsDir, file.name), {
    recursive: true,
    filter: (src) => (!src.endsWith('package.json')),
  });
});

// TODO - block added temporally, to integrate auth dropin
const authDropinSource = './scripts/@dropins/storefront-auth';
const authDestDir = './scripts/__dropins__/storefront-auth';

// Ensure the destination directory exists
if (!fs.existsSync(authDestDir)) {
  fs.mkdirSync(authDestDir, { recursive: true });
}

fs.cpSync(authDropinSource, authDestDir, {
  recursive: true,
  filter: (src) => !src.endsWith('package.json'),
});

// Copy eventing specific files
fs.copyFileSync(path.resolve(__dirname, './node_modules/@adobe/magento-storefront-event-collector/dist/index.js'), path.resolve(__dirname, './scripts/commerce-events-collector.js'));
fs.copyFileSync(path.resolve(__dirname, './node_modules/@adobe/magento-storefront-events-sdk/dist/index.js'), path.resolve(__dirname, './scripts/commerce-events-sdk.js'));

console.log('🫡 Drop-ins installed successfully!');
