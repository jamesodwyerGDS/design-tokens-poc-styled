import { readFileSync, promises as fsPromises } from 'node:fs';
import StyleDictionary from 'style-dictionary';
import * as sdTransfroms from '@tokens-studio/sd-transforms';

sdTransfroms.register(StyleDictionary);

async function run() {
  await fsPromises.mkdir('public/css', { recursive: true });

  const $themes = JSON.parse(readFileSync('tokens/$themes.json', 'utf-8'));

  for (const theme of $themes) {
    const sources = Object.entries(theme.selectedTokenSets)
      .filter(([, val]) => val !== 'disabled')
      .map(([tokenset]) => `tokens/${tokenset}.json`);

    const sd = new StyleDictionary({
      source: sources,
      log: {
    verbosity: "verbose"
    },
      platforms: {
        css: {
          buildPath: 'public/css/',
          transformGroup: 'tokens-studio',
          transforms: [
        "ts/typography/fontWeight",
        "ts/size/lineheight",
        "ts/size/css/letterspacing",
        "ts/size/px",
        "ts/resolveMath",
        "name/kebab",
        "fontFamily/css"
      ],
          mathFractionDigits: 3,
          files: [
            {
              destination: `_variables-${theme.name}.css`,
              format: 'css/variables',
            },
          ],
        },
      },
    });

    await sd.cleanAllPlatforms();
    await sd.buildAllPlatforms();
  }
}

run();
