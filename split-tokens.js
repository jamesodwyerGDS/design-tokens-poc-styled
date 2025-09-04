// split-tokens.js
import fs from 'node:fs';
import path from 'node:path';

const CANDIDATES = ['tokens.json', path.join('tokens', 'tokens.json')];
const TOKENS_FILE = CANDIDATES.find(p => fs.existsSync(p));
if (!TOKENS_FILE) {
  console.error('❌ tokens.json not found in project root or /tokens/');
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(TOKENS_FILE, 'utf8'));

// Your file nests sets like core.core and semantic.semantic:
const coreSet = raw.core?.core || {};
const semanticSet = raw.semantic?.semantic || {};

// Detect brand sets: "brand/tm", "brand/lm", etc.
const brandSetKeys = Object.keys(raw).filter(k => k.startsWith('brand/'));

const outDir = 'tokens';
const brandsDir = path.join(outDir, 'brands');
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(brandsDir, { recursive: true });

// Write core.json and semantic.json
fs.writeFileSync(path.join(outDir, 'core.json'), JSON.stringify({ core: coreSet }, null, 2));
fs.writeFileSync(path.join(outDir, 'semantic.json'), JSON.stringify({ semantic: semanticSet }, null, 2));

// Write each brand file as tokens/brands/<id>.json with a top-level { "brand": { ... } }
brandSetKeys.forEach((setKey) => {
  const id = setKey.split('/')[1]; // e.g. 'tm', 'lm'
  const brandPayload = raw[setKey]?.brand || {};
  const outPath = path.join(brandsDir, `${id}.json`);
  fs.writeFileSync(outPath, JSON.stringify({ brand: brandPayload }, null, 2));
  console.log(`✔ Wrote ${outPath}`);
});

// Optional: write tokenSetOrder so you can keep a reference
const order = raw?.$metadata?.tokenSetOrder ?? ['core', ...brandSetKeys, 'semantic'];
fs.writeFileSync(
  path.join(outDir, 'tokenSetOrder.json'),
  JSON.stringify({ tokenSetOrder: order }, null, 2)
);

console.log('✔ Split complete: tokens/core.json, tokens/semantic.json, tokens/brands/*.json');
