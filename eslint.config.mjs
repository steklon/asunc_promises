import globals from "globals";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
    }
  },
  {
    ignores: ["dist/*", "coverage/*"]
  },
  {
    files: ["**/*.test.js"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,

    }
  },
  {
    files: ['src/**/*.js'],
    rules: {
        indent: [
            'error', 2
        ], // отступы, авто
        semi: [
            'error', 'always'
        ], // точка с запятой, авто
        'no-unused-vars': 'off', // не испоьзуемые переменные
        'no-console': 'off', // console.log
        'no-var': 'error',
    },
  },
];