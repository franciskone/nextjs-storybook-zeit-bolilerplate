const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [require.resolve("babel-preset-react-app")],
    },
  });

  config.plugins.unshift(
    new ForkTsCheckerWebpackPlugin({
      async: false, // blocks Typescript compilation on typechecking error for DEV mode!
    })
  );

  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
