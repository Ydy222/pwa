import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },  // 이 폴더는 문법 검사 하지마라
  {
    files: ['**/*.{js,jsx}'], // js, jsx 문법검사 하고
    languageOptions: {
      ecmaVersion: 2020,  // es2020
      globals: globals.browser, // global
      parserOptions: {
        ecmaVersion: 'latest',  // 최신
        ecmaFeatures: { jsx: true },  //jsx분법
        sourceType: 'module', // module
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
