module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true,
      node: true
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
          "jsx": true
      },
      ecmaVersion: 12,
      sourceType: "module"
    },
    plugins: [
      "react",
      "@typescript-eslint",
      "react-hooks",
		  "unused-imports",
		  "simple-import-sort"
    ],
	  overrides: [
      {
        files: ["**/*.js", "**/*.ts", "**/*.tsx"],
        rules: {
          "simple-import-sort/imports": [
            "error",
            {
              "groups": [
                // `react` first, `next` second, then packages starting with a character
                ["^react$", "^next", "^[a-z]"],
                // Packages starting with `@`
                ["^@"],
                // Packages starting with `~`
                ["^~"],
                // Imports starting with `../`
                ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                // Imports starting with `./`
                ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                // Style imports
                ["^.+\\.s?css$"],
                // Side effect imports
                ["^\\u0000"]
              ]
            }
          ]
        }
      }
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/no-var-requires": "off",
      "no-undef": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error"
    }
}