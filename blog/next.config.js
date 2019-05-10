const path = require("path");
const withCustomBabelConfig = require("next-plugin-custom-babel-config");
const withTypescript = require("@zeit/next-typescript");
const withTranspileModules = require("next-plugin-transpile-modules");

// https://github.com/wellcometrust/next-plugin-transpile-modules/issues/11
function fixExternalsPlugin(config = {}) {
  const { webpack } = config
  config.webpack = (config, ...rest) => {
    config.externals = config.externals || []
    return webpack(config, ...rest)
  }
  return config
}

module.exports = fixExternalsPlugin(withCustomBabelConfig(
  withTypescript(
    withTranspileModules({
      transpileModules: ["@acme"],
      babelConfigFile: path.resolve("../babel.config.js")
    })
  )
));
