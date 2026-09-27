import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { LanguageProvider } from './i18n/LanguageContext'
import './styles/index.css'

/* Vite injects BASE_URL from vite.config.ts (`base`). GitHub Pages serves this
   project from a sub-path, so the router must share that basename; on a root
   domain BASE_URL is '/' and the router behaves exactly as before. */
const basename = import.meta.env.BASE_URL

/* public/404.html bounces deep links to `?p=/<route>` so GitHub Pages can serve
   the SPA. Restore the real path before the router mounts, then hand over a
   clean URL (no leftover query string). */
const params = new URLSearchParams(window.location.search)
const redirected = params.get('p')
if (redirected) {
  const restored = basename.replace(/\/$/, '') + redirected
  window.history.replaceState(null, '', restored + window.location.hash)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
