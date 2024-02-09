import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { ModuleOptions } from 'webpack'
import { BuildOptions } from './types/types'

export const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {
  const isDev = options.mode === 'development'
  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[name]__[local]' : '[hash:base64:8]',
      },
    },
  }
  
  const tsLoader = {
    // ts loader обрабатывает jsx
    // если не использовать TypeScript, то нужно использовать babel-loader
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoaderWithModules,
      // Compiles Sass to CSS
      'sass-loader',
    ],
  }

  return [
    // порядок loader-ов имеет значение
    tsLoader,
    scssLoader,
  ]
}
