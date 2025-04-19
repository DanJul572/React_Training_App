import { select } from '@inquirer/prompts';

import buildCommand from './build.js';
import eslintCommand from './eslint.js';
import previewCommand from './preview.js';
import runCommand from './run.js';
import vitestCommand from './vitest.js';

select({
  message: 'please select a command.',
  choices: ['Run', 'Build', 'Preview', 'Vitest', 'Eslint'],
})
  .then((answer) => {
    if (answer === 'Run') {
      runCommand();
    } else if (answer === 'Build') {
      buildCommand();
    } else if (answer === 'Preview') {
      previewCommand();
    } else if (answer === 'Vitest') {
      vitestCommand();
    } else if (answer === 'Eslint') {
      eslintCommand();
    }
  })
  .catch(() => console.log('❗Please Enter to close.'));
