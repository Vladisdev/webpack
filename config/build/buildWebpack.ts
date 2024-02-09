import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResovlers } from './buildResovlers'
import { BuildOptions } from './types/types'

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths } = options
  const isDev = mode === 'development'

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResovlers(options),
    plugins: buildPlugins(options),
    devtool: isDev && 'inline-source-map',
    devServer: isDev && buildDevServer(options),
  }
}
