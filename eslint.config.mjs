import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: [
            '**/dist',
            '**/storybook-static',
            '**/node_modules',
            '**/coverage',
            '**/.husky',
            '**/.storybook',
            '**/.eslintrc.cjs',
            '**/vite.config.ts',
            '**/vitest.setup.ts',
        ],
    },
    ...fixupConfigRules(
        compat.extends(
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:react-hooks/recommended',
            'plugin:prettier/recommended',
            'plugin:storybook/recommended'
        )
    ),
    {
        plugins: {
            'react-refresh': reactRefresh,
            prettier: fixupPluginRules(prettier),
        },

        languageOptions: {
            globals: {
                ...globals.browser,
            },

            parser: tsParser,
        },

        rules: {
            'react-refresh/only-export-components': [
                'warn',
                {
                    allowConstantExport: true,
                },
            ],
            'react-hooks/exhaustive-deps': 0,
            '@typescript-eslint/no-explicit-any': 0,
            'prettier/prettier': ['error'],
        },
    },
];
