module.exports = {
  jsx: {
    babelConfig: {
      plugins: [
        ["@babel/plugin-proposal-optional-chaining"],
        ["@babel/plugin-proposal-nullish-coalescing-operator"],
      ],
    },
  },
};
