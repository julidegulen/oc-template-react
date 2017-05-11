/* eslint-disable dot-notation */

const packageJson = require('../package.json');

module.exports = () => ({
  type: packageJson.name,
  version: packageJson.version,
  dependencies: packageJson.compileDependencies,
  externals: [
    packageJson.externals['react'],
    packageJson.externals['react-dom']
  ]
});
