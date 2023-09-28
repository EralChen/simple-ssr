import { PageContext } from './types'
import { createPageApp } from './app'


export async function render (pageContext: PageContext) {
  const app = createPageApp(pageContext)
  console.log('app', app)
  app.mount('#app')
}
