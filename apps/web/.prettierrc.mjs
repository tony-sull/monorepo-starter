/** @type {import("prettier").Config} */
export default {
  extends: "prettier-config",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
