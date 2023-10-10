import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default defineConfig((env) => mergeConfig(
  viteConfig(env),
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        all: true,
        clean: true,
        lines: 46,
        functions: 50,
        branches: 65,
        statements: 46
      }
    }
  })
))
