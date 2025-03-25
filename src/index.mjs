import fs from 'node:fs';
import colors from './colors.mjs';
import createColors from './createColors.mjs';
import createTokenColors from './createTokenColors.mjs';

const theme = {
    name: 'Raraku',
    colors: createColors(colors),
    tokenColors: createTokenColors(colors),
};

fs.writeFile('themes/raraku.json', JSON.stringify(theme), (err) => {
    const log = err
        ? {
              method: 'error',
              message: err,
          }
        : {
              method: 'log',
              message: `Successfuly created ${theme.name} theme`,
          };
    console[log.method](log.message);
});
