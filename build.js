import StyleDictionary from 'style-dictionary'
import fs from 'node:fs'
import path from 'node:path'

const brands = ['ticketmaster', 'livenation']

function buildForBrand(brand) {
  const config = {
    source: [
      'tokens/core.json',
      'tokens/semantic.json',
      `tokens/brands/${brand}.json`
    ],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'src/tokens/',
        files: [{
          destination: `variables.${brand}.css`,
          format: 'css/variables',
          options: {
            // Wrap variables in a data-theme selector for runtime switching
            selector: `[data-theme='${brand}']`
          }
        }]
      }
    }
  }
  const SD = StyleDictionary.extend(config)
  SD.buildAllPlatforms()
}

fs.mkdirSync('src/tokens', { recursive: true })
brands.forEach(buildForBrand)

// Also create a small index.css with semantic aliasing for convenience (optional)
// We derive semantic aliases here to ensure names your app uses stay stable.
const semanticAliases = `:root {
  --color-bg: var(--semantic-color-bg);
  --color-fg: var(--semantic-color-fg);
  --color-fg-muted: var(--semantic-color-fg-muted);
  --color-surface: var(--semantic-color-surface);
  --color-border: var(--semantic-color-border);
  --color-accent: var(--semantic-color-accent);
  --color-accent-subtle: var(--semantic-color-accent-subtle);
  --color-btn-bg: var(--semantic-color-btn-bg);
  --color-btn-fg: var(--semantic-color-btn-fg);
  --color-btn-secondary-bg: var(--semantic-color-btn-secondary-bg);
  --color-btn-secondary-fg: var(--semantic-color-btn-secondary-fg);

  --font-family-base: var(--semantic-font-family-base);

  --font-display-size: var(--semantic-font-display-size);
  --font-display-weight: var(--semantic-font-display-weight);
  --font-display-line: var(--semantic-font-display-line);

  --font-title-size: var(--semantic-font-title-size);
  --font-title-weight: var(--semantic-font-title-weight);
  --font-title-line: var(--semantic-font-title-line);

  --font-body-size: var(--semantic-font-body-size);
  --font-body-line: var(--semantic-font-body-line);

  --font-label-size: var(--semantic-font-label-size);
  --font-label-tracking: var(--semantic-font-label-tracking);
  --font-label-transform: var(--semantic-font-label-transform);

  --space-1: var(--semantic-space-1);
  --space-2: var(--semantic-space-2);
  --space-3: var(--semantic-space-3);
  --space-4: var(--semantic-space-4);
  --space-5: var(--semantic-space-5);
  --space-6: var(--semantic-space-6);

  --radius-sm: var(--semantic-radius-sm);
  --radius-md: var(--semantic-radius-md);

  --elevation-1: var(--semantic-elevation-1);
  --elevation-2: var(--semantic-elevation-2);
  --elevation-3: var(--semantic-elevation-3);
}
`
fs.writeFileSync('src/tokens/index.css', semanticAliases)
console.log('✔ Tokens built for brands:', brands.join(', '))
