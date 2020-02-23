module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "no-console": ["error", { allow: ["tron"] }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-param-reassign": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", "js"] }],
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "jsx-a11y/control-has-associated-label": "off"
  }
};
