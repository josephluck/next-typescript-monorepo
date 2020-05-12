const path = require("path");
const withPlugins = require("next-compose-plugins");
const withCustomBabelConfig = require("next-plugin-custom-babel-config");
const withTranspileModules = require("next-transpile-modules");

function withCustomWebpack(config = {}) {
  const { webpack } = config;

  config.webpack = (config, ...rest) => {
    const babelRule = config.module.rules.find((rule) =>
      rule.use && Array.isArray(rule.use)
        ? rule.use.find((u) => u.loader === "next-babel-loader")
        : rule.use.loader === "next-babel-loader"
    );
    if (babelRule) {
      babelRule.include.push(path.resolve("../"));
    }

    return webpack(config, ...rest);
  };

  return config;
}

const plugins = [
  [withTranspileModules, { transpileModules: ["@acme"] }],
  [
    withCustomBabelConfig,
    { babelConfigFile: path.resolve("../babel.config.js") },
  ],
  [withCustomWebpack],
];

const config = {};

module.exports = withPlugins(plugins, config);
