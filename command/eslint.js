import { select } from '@inquirer/prompts';
import { spawn } from 'child_process';

const eslintCommand = async () => {
  try {
    const answer = await select({
      message: 'What do you want to run using Eslint?',
      choices: ['Check Error', 'Check and Fix Error'],
    });

    let command = null;
    let args = [];

    switch (answer) {
      case 'Check Error':
        command = 'pnpm';
        args = ['lint'];
        break;
      case 'Check and Fix Error':
        command = 'pnpm';
        args = ['lint:fix'];
        break;
      default:
        return;
    }

    spawn(command, args, { stdio: 'inherit', shell: true });
  } catch {
    console.log('Please Enter to close.');
  }
};

export default eslintCommand;
