const withSass = require("@zeit/next-sass");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = withSass({
  webpack(config, { dev }) {
    config.plugins.unshift(
      new ForkTsCheckerWebpackPlugin({
        async: false, // blocks Typescript compilation on typechecking error for DEV mode!
      })
    );

    return config;
  },
  cssModules: true,
  sassLoaderOptions: {},
});
