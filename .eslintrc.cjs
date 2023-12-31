module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  compilerOptions: {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "allowJs": true
  },
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    '*.module.css.d.ts'
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    "react": {
      "version": "detect",
    },
  },
  plugins: [
    'react-refresh',
    'react',
    'import',
    'newline-destructuring',
    'import-newlines'
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "block-spacing": ["warn"],
    "comma-spacing": ["warn"],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "import/newline-after-import": [
      "warn",
      {
        "count": 1,
      },
    ],
    "import/no-duplicates": ["warn"],
    "import-newlines/enforce": [
      "warn",
      1,
    ],
    "indent": [
      "warn",
      4,
    ],
    "jsx-quotes": [
      "warn",
      "prefer-double",
    ],
    "key-spacing": ["warn"],
    "keyword-spacing": [
      "warn",
      {
        "before": true,
        "after": true,
      },
    ],
    "max-len": [
      "warn",
      {
        "code": 140,
      },
    ],
    "newline-destructuring/newline": [
      "warn",
      {
        "items": 1,
      },
    ],
    "no-alert": ["warn"],
    "no-console": ["warn"],
    "no-empty": [
      "warn",
      {
        "allowEmptyCatch": true,
      },
    ],
    "no-multiple-empty-lines": [
      "warn",
      {
        "max": 1,
        "maxBOF": 0,
      }
    ],
    "no-multi-spaces": "warn",
    "no-trailing-spaces": ["warn"],
    "quotes": [
      "warn",
      "single",
      {
        "allowTemplateLiterals": true,
      },
    ],
    "react-hooks/exhaustive-deps": ["error"],
    "react/jsx-tag-spacing": [
      "warn",
      {
        "beforeSelfClosing": "always",
      },
    ],
    "react/jsx-max-props-per-line": [
      "warn",
      {
        "maximum": 1,
      },
    ],
    "react/jsx-closing-bracket-location": [
      "error",
      {
        "nonEmpty": "tag-aligned",
      },
    ],
    "react/jsx-tag-spacing": [
      "warn",
      {
        "beforeSelfClosing": "always",
      },
    ],
    "space-before-blocks": "warn",
  },
}
