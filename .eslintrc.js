module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended', //型を必要としないプラグインの推奨ルールをすべて有効
    'plugin:@typescript-eslint/recommended-requiring-type-checking', //型を必要とするプラグインの推奨ルールをすべて有効
    'prettier', //追加 ESLintの情報に沿ってフォーマット
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12, //latestから12に変更
    sourceType: 'module',
    tsconfigRootDir: __dirname, //追加 tsconfig.jsonがある相対パスを指定
    project: ['./tsconfig.json'], //追加  tsconfig.jsonを指定
  },
  plugins: ['@typescript-eslint', 'unused-imports'],
  /*-- ↓以下ルール --*/
  rules: {
    'no-use-before-define': 'off', //関数や変数が定義される前に使われているとエラーになるデフォルトの機能をoff
    '@typescript-eslint/no-use-before-define': ['error'], //typescript側のno-use-before-defineを使うようにする
    'import/prefer-default-export': 'off', //named exportがエラーになるので使えるようにoff
    '@typescript-eslint/no-unused-vars': 'off', //unused-importsを使うため削除
    'unused-imports/no-unused-imports': 'error', //不要なimportの削除
    'unused-imports/no-unused-vars': [
      //unused-importsでno-unused-varsのルールを再定義
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'no-param-reassign': [2, { props: false }], //パラメーターのプロパティ変更を許可
    'import/extensions': [
      //importのときに以下の拡張子を記述しなくてもエラーにしない
      'error',
      {
        js: 'never',
        ts: 'never',
      },
    ],

    'no-void': [
      //void演算子の許可
      'error',
      {
        allowAsStatement: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      //importするファイルをjsだけではなく、tsを含むファイルを許可する
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts'],
      },
    },
  },
  /*-- ↑ルールここまで --*/
}
