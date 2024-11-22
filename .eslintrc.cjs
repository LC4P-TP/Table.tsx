module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "airbnb",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    project: "tsconfig.json",
  },
  plugins: ["react", "prettier", "@typescript-eslint", "react-refresh"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "jsx-a11y/control-has-associated-label": [
      2,
      {
        labelAttributes: ["label"],
        ignoreElements: ["audio", "canvas", "embed", "textarea", "video", "tr", "td", "input"],
        depth: 3,
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "max-len": [
      "error",
      {
        code: 200, // Maximum string length
        ignoreComments: true, // Ignore comments
        ignoreUrls: true, // Ignore long URLs
        ignoreStrings: true, // Ignore long strings
        ignoreTemplateLiterals: true, // Ignore template literals
      },
    ],
    quotes: ["error", "double", { avoidEscape: true }],

    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",

    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".tsx"] }],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  globals: {
    __APP_VERSION__: true,
  },
  ignorePatterns: ["dist", ".eslintrc.cjs", "*.json", "*.scss", "*.css", "*.png", "*.svg", "*.ttf"],
};
