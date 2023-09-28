import { createSSRApp, h } from 'vue'
import PageLayout from '#/layouts/default/index.vue'
import { PageContext } from './types'

import '#/styles'
// import 'uno.css'

export function createPageApp (
  pageContext: PageContext,
) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = {
    render () {
      return h(
        PageLayout,
        {},
        {
          default () {
            return h(Page, pageProps || {})
          },
        },
      )
    },
  }
  const app = createSSRApp(PageWithLayout)
   
  return app
}
