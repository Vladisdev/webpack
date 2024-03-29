import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack, { Configuration, DefinePlugin } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildOptions } from './types/types'

export const buildPlugins = ({
  mode,
  paths,
  analyze,
  platform,
}: BuildOptions): Configuration['plugins'] => {
  const isDev = mode === 'development'
  const isProd = mode === 'production'

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
    }),
  ]

  if (isDev) {
    plugins.push(
      new webpack.ProgressPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new ReactRefreshWebpackPlugin()
    )
    // выносит проверку типов в отдельном процессе
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      })
    )
  }

  if (analyze) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}
