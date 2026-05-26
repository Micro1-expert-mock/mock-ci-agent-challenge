module.exports = [
  {
    files: ["src/**/*.js", "tests/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        describe: "readonly",
        expect: "readonly",
        module: "readonly",
        require: "readonly",
        test: "readonly"
      }
    },
    rules: {
      semi: ["error", "always"]
    }
  }
];
