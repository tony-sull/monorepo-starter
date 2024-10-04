import eslintPluginAstro from "eslint-plugin-astro";
import eslint from "eslint-config";

export default [
  ...eslint,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];
