/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  semi: false,
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "all",
}
