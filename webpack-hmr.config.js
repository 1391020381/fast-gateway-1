const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

// 此函数获取包含默认 webpack配置的原始对象,并返回一个已修改的对象和一个已应用的HotModuleReplacementPlugin 插件
module.exports = function (options, webpack) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', options.entry],
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/.js$/, /.d.ts$/],
      }),
      new RunScriptWebpackPlugin({ name: options.output.filename }),
    ],
  };
};
