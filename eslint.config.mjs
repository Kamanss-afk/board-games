import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    rules: {
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      semi: 'error',
      'no-console': 'error',
      'no-duplicate-imports': 'error',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-no-useless-fragment': 'error',
      'react/no-danger': 'error',
      'react/no-danger-with-children': 'error',
      'react/jsx-key': [
        'error',
        {
          'checkFragmentShorthand': true,
          'checkKeyMustBeforeSpread': true,
          'warnOnDuplicates': true
        }
      ],
      'react/jsx-no-leaked-render': [
        'error',
        {
          'validStrategies': ['ternary']
        }
      ],
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          'minimumDescriptionLength': 10
        }
      ],
    }
  }),
];

export default eslintConfig;
