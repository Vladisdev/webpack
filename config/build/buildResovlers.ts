import { Configuration } from 'webpack'
import { BuildOptions } from './types/types'

export const buildResovlers = (
  options: BuildOptions
): Configuration['resolve'] => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}
