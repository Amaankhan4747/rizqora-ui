import fs from 'fs';
import path from 'path';

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        processDir(full);
      }
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.html') || file.endsWith('.json')) {
      const content = fs.readFileSync(full, 'utf-8');
      if (/Rizqora(?!a)/.test(content)) {
        const updated = content.replace(/Rizqora(?!a)/g, 'Rizqoraa');
        fs.writeFileSync(full, updated, 'utf-8');
        console.log(`Updated branding in: ${full}`);
      }
    }
  }
}

processDir('./src');
console.log('Branding replacement complete.');
