import { select } from '@inquirer/prompts';
import { spawn } from 'child_process';

const buildCommand = async () => {
  try {
    const answer = await select({
      message: 'What environment do you want to build ?',
      choices: ['Development', 'Staging', 'Production'],
    });

    let command = null;
    let args = [];

    switch (answer) {
      case 'Development':
        command = 'pnpm';
        args = ['build:dev'];
        break;
      case 'Staging':
        command = 'pnpm';
        args = ['build:stage'];
        break;
      case 'Production':
        command = 'pnpm';
        args = ['build:prod'];
        break;
      default:
        return;
    }

    spawn(command, args, { stdio: 'inherit', shell: true });
  } catch {
    console.log('Please Enter to close.');
  }
};

export default buildCommand;
