import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier/recommended'
import ts from 'typescript-eslint'

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...ts.configs.stylistic,
  prettier,
]
