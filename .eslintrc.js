module.exports = {
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [],
  parser: 'babel-eslint',
  rules: {
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint"
      ],
      plugins: [
        "@typescript-eslint"
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module"
      },
      rules: {
      }
    }
  ]
}