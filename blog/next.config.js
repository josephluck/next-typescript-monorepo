const path = require("path");
const withCustomBabelConfig = require("next-plugin-custom-babel-config");
const withTypescript = require("@zeit/next-typescript");
const withTranspileModules = require("next-plugin-transpile-modules");

module.exports = withCustomBabelConfig(
  withTypescript(
    withTranspileModules({
      transpileModules: ["@acme"],
      babelConfigFile: path.resolve("../babel.config.js")
    })
  )
);
