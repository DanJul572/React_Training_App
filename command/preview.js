import { select } from '@inquirer/prompts';
import { spawn } from 'child_process';

const previewCommand = async () => {
  try {
    const answer = await select({
      message: 'What environment do you want to preview ?',
      choices: ['Development', 'Staging', 'Production'],
    });

    let command = null;
    let args = [];

    switch (answer) {
      case 'Development':
        command = 'pnpm';
        args = ['preview:dev'];
        break;
      case 'Staging':
        command = 'pnpm';
        args = ['preview:stage'];
        break;
      case 'Production':
        command = 'pnpm';
        args = ['preview:prod'];
        break;
      default:
        return;
    }

    spawn(command, args, { stdio: 'inherit', shell: true });
  } catch {
    console.log('Please Enter to close.');
  }
};

export default previewCommand;
