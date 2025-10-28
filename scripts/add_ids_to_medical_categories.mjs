import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const jsonPath = path.join(root, 'src', 'data', 'medical_categories.json');
const backupPath = jsonPath + '.bak';

function slugify(text) {
  return String(text)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64);
}

function stableId(parts) {
  const input = parts.join('::');
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  const unsigned = hash >>> 0;
  return unsigned.toString(36);
}

function buildId(parts, readableName) {
  const base = slugify(readableName || 'item');
  const h = stableId(parts);
  return base ? `${base}-${h}` : h;
}

function addIds(data) {
  if (!Array.isArray(data)) throw new Error('Root JSON must be an array');

  return data.map((category) => {
    const catId = buildId([category.name], category.name);
    const subCategories = Array.isArray(category.subCategories)
      ? category.subCategories.map((sub) => {
          const subId = buildId([catId, sub.name], sub.name);
          const products = Array.isArray(sub.products)
            ? sub.products.map((p) => ({
                id: buildId([subId, p.name], p.name),
                ...p,
              }))
            : [];
          return {
            id: subId,
            ...sub,
            products,
          };
        })
      : [];
    return {
      id: catId,
      ...category,
      subCategories,
    };
  });
}

function main() {
  if (!fs.existsSync(jsonPath)) {
    console.error('File not found:', jsonPath);
    process.exit(1);
  }
  const raw = fs.readFileSync(jsonPath, 'utf8');
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.error('Invalid JSON:', e.message);
    process.exit(1);
  }

  const withIds = addIds(data);

  // Backup original once per run
  try {
    if (!fs.existsSync(backupPath)) {
      fs.writeFileSync(backupPath, raw, 'utf8');
    }
  } catch {}

  fs.writeFileSync(jsonPath, JSON.stringify(withIds, null, 2) + '\n', 'utf8');
  console.log('IDs added successfully to', jsonPath);
}

main();


