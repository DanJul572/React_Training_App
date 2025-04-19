import { select } from '@inquirer/prompts';
import { spawn } from 'child_process';

const vitestCommand = async () => {
  try {
    const answer = await select({
      message: 'What do you want to run using Vitest ?',
      choices: [
        'Running Test',
        'Running Test With Coverage',
        'Running Test With UI',
      ],
    });

    let command = null;
    let args = [];

    switch (answer) {
      case 'Running Test':
        command = 'pnpm';
        args = ['test'];
        break;
      case 'Running Test With Coverage':
        command = 'pnpm';
        args = ['test:coverage'];
        break;
      case 'Running Test With UI':
        command = 'pnpm';
        args = ['test:ui'];
        break;
      default:
        return;
    }

    spawn(command, args, { stdio: 'inherit', shell: true });
  } catch {
    console.log('Please Enter to close.');
  }
};

export default vitestCommand;
