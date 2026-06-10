const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.copyFileSync(
  path.join(__dirname, 'main photo port.png'),
  path.join(publicDir, 'favicon.png')
);
console.log('Done');
