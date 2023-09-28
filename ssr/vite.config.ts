import vue from '@vitejs/plugin-vue'
import md from 'unplugin-vue-markdown/vite'
import ssr from 'vike/plugin'
import { UserConfig, defineConfig } from 'vite'
// import { unocssPreferences } from '@lib-env/app-utils'
import { appRoot, srcRoot } from './path.config'
import path from 'path'


export default defineConfig(() => {
  
  const config: UserConfig = {
    resolve: {
      alias: {
        '#': srcRoot,
        '#r': path.resolve(appRoot,'./renderer'),
        '#p': path.resolve(appRoot,'./pages'),
      },
    },

    plugins: [
      ssr(),
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      // unocssPreferences(),
      md({}),
    ],
    // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vike's CI
    optimizeDeps: { include: [] },
  }
  return config
})
