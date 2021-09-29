const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const pkg = require('./package.json');

const VERSION = pkg.version;

module.exports = env => merge(common, {
  mode: 'production',
  output: {
    filename: `[name]${env.branch !== 'master' ? `-dev-${env.commit_hash || 'local'}` : `-${VERSION}`}.min.js`
  }
});
