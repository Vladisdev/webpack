import path from 'path'
import webpack from 'webpack'
import { buildWebpack } from './config/build/buildWebpack'
import {
  BuildMode,
  BuildPaths,
  BuildPlatform,
} from './config/build/types/types'

interface EnvVariables {
  mode?: BuildMode
  port?: number
  platform?: BuildPlatform
  analyze?: boolean
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 4000,
    mode: env.mode ?? 'development',
    analyze: env.analyze ?? false,
    platform: env.platform ?? 'desktop',
    paths,
  })

  return config
}
