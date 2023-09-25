import { resolve } from 'path'

import basicSsl from '@vitejs/plugin-basic-ssl'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv, PluginOption } from 'vite'

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  const env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  }

  const plugins:PluginOption = [
    vue(),
    legacy({
      targets: ['defaults', 'IE 11'],
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
        '@': resolve(__dirname, 'src')
      }
    }
  })
}
