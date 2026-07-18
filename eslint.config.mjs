import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 1. Apply the recommended JavaScript linting rules
  pluginJs.configs.recommended,

  // 2. Set environment settings for your files
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      // Tells ESLint to recognize Node.js globals (require, module, process)
      globals: {
        ...globals.node,
      },
    },
  },

  // 3. Explicitly parse standard .js files as CommonJS
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },

  // 4. Turns off style rules that clash with Prettier (must be last)
  eslintConfigPrettier,
];
