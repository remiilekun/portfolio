import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';

const eslintConfig = [
  {
    ignores: ['.next/**', 'node_modules/**', 'storybook-static/**', 'next-env.d.ts'],
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
  prettier,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      // Surfaced by eslint-config-next@16; pre-existing intentional patterns
      // (e.g. the SSR mount flag). Kept as warnings rather than build blockers.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
];

export default eslintConfig;
