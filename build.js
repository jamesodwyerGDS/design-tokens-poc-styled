const StyleDictionary = require('style-dictionary');
const { transformTokens } = require('token-transformer');
const fs = require('fs');
const path = require('path');

// Ensure the public/css directory exists
const cssDir = path.join(__dirname, 'public', 'css');
if (!fs.existsSync(cssDir)) {
  fs.mkdirSync(cssDir, { recursive: true });
}

// Custom format for CSS variables
StyleDictionary.registerFormat({
  name: 'css/variables',
  formatter: function (dictionary) {
    return `${this.selector} {\n${dictionary.allProperties
      .map(prop => `  --${prop.name}: ${prop.value};`)
      .join('\n')}\n}`
  }
});

// Helper function to create a theme config
function createThemeConfig(theme) {
  return {
    source: ['tokens/transformed.json'],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'public/css/',
        files: [{
          destination: `_variables-${theme}.css`,
          format: 'css/variables',
          selector: ':root'
        }]
      }
    }
  };
}

// Read and merge token files
const coreTokens = require('./tokens/core.json');
const semanticTokens = require('./tokens/semantic.json');
const tmTokens = require('./tokens/brand/tm.json');
const lnTokens = require('./tokens/brand/lm.json');

// Transform tokens for each theme
const themes = {
  ticketmaster: tmTokens,
  livenation: lnTokens
};

Object.entries(themes).forEach(([themeName, themeTokens]) => {
  // Merge tokens
  const tokens = {
    core: coreTokens.core,
    semantic: semanticTokens.semantic,
    brand: themeTokens.brand
  };

  // Transform tokens
  const transformed = transformTokens(
    tokens,
    ['core', 'semantic', 'brand'],
    ['core', 'semantic', 'brand']
  );

  // Write transformed tokens to a temporary file
  fs.writeFileSync(
    path.join(__dirname, 'tokens', 'transformed.json'),
    JSON.stringify(transformed, null, 2)
  );

  // Create Style Dictionary instance for this theme
  const sd = StyleDictionary.extend(createThemeConfig(themeName));

  // Build the theme
  sd.buildPlatform('css');
});

// Clean up temporary file
fs.unlinkSync(path.join(__dirname, 'tokens', 'transformed.json'));

console.log('✨ Build complete!');
