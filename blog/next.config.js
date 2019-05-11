const path = require("path");
const withCustomBabelConfig = require("next-plugin-custom-babel-config");
const withTypescript = require("@zeit/next-typescript");
const withTranspileModules = require("next-plugin-transpile-modules");

function withCustomWebpack(config = {}) {
  const { webpack } = config;

  config.webpack = (config, ...rest) => {
    
    // Workaround for issue https://github.com/wellcometrust/next-plugin-transpile-modules/issues/11
    // TODO: upgrade next-plugin-transpile-modules when the issue is fixed
    // TODO: remove this workaround when next-plugin-transpile-modules is upgraded
    config.externals = config.externals || [];

    return webpack(config, ...rest)
  }

  return config
}

module.exports = withCustomWebpack(
  withCustomBabelConfig(
    withTypescript(
      withTranspileModules({
        transpileModules: ["@acme"],
        babelConfigFile: path.resolve("../babel.config.js")
      })
    )
  )
);
