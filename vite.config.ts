import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import basicSsl from '@vitejs/plugin-basic-ssl'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { ConfigEnv, defineConfig, loadEnv, PluginOption } from 'vite'

export default ({ mode }:ConfigEnv) => {
  // Load app-level env vars to node-level env vars.
  const env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  }

  const plugins:PluginOption = [
    vue(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, './src/locales/**')],
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
  })]

  // do development specific tasks
  if( env.NODE_ENV === 'development' ) {
    console.log('App title', env.VITE_APP_TITLE)

    // only use the basic ssl plugin if using the right script
    if( env.npm_lifecycle_event === 'dev-https' ) {
      plugins.push(basicSsl())
    }
  }

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
