module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:storybook/recommended',
    ],
    ignorePatterns: [
        'dist',
        '.eslintrc.cjs',
        'vite.config.ts',
        'vitest.setup.ts',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'prettier'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        '@typescript-eslint/no-explicit-any': 0,
        'prettier/prettier': ['error'],
    },
};
