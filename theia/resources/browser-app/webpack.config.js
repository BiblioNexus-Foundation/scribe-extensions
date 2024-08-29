/**
 * This file can be edited to customize webpack configuration.
 * To reset delete this file and rerun theia build again.
 */
// @ts-check
const configs = require("./gen-webpack.config.js");
const nodeConfig = require("./gen-webpack.node.config.js");

/**
 * Expose bundled modules on window.theia.moduleName namespace, e.g.
 * window['theia']['@theia/core/lib/common/uri'].
 * Such syntax can be used by external code, for instance, for testing.
configs[0].module.rules.push({
    test: /\.js$/,
    loader: require.resolve('@theia/application-manager/lib/expose-loader')
}); */

const getModifiedConfigs = () => {
  // TODO: FIX SVGR
  //   const config = configs.at(0);

  //   const fileLoaderRule = config.module.rules.find((rule) =>
  //     rule.test?.test?.(".svg")
  //   );

  //   config.module.rules.push(
  //     // Reapply the existing rule, but only for svg imports ending in ?url
  //     // Convert all other *.svg imports to React components
  //     {
  //       test: /\.svg$/i,
  //       use: ["@svgr/webpack"],
  //     }
  //   );

  //   // Modify the file loader rule to ignore *.svg, since we have it handled now.
  //   fileLoaderRule.exclude = /\.svg$/i;

  //   configs[0] = config;

  return configs;
};

module.exports = [...getModifiedConfigs(), nodeConfig.config];
