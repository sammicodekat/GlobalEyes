module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parser": "babel-eslint",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "semi":[1, "never"],
      "arrow-parens": 0,
      "no-console":0,
      "comma-dangle":[1, "never"],
      "no-underscore-dangle":0,
      "max-len":0,
      "import/newline-after-import":0,
      "func-names":0,
      "react/prop-types":0,
    }
};
