import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { createPageApp } from './app'
import { PageContext } from './types'


// Make pageContext.pageProps available in the browser
export const passToClient = ['pageProps']
export async function render (pageContext: PageContext) {
  const app = createPageApp(pageContext)

  const appHtml = await renderToString(app)
  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`
}
