import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import jest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
  {
    files: ["**/*.{test,spec}.{js,mjs,cjs,jsx}"], // Apply this to test files
    languageOptions: {
      globals: {
        ...globals.jest, // Add Jest globals
      },
    },
    plugins: {
      jest,
    },
    rules: {
      "no-undef": "off", // Turn off no-undef for Jest globals
    },
  },

  js.configs.recommended,
  react.configs.flat.recommended,
];
