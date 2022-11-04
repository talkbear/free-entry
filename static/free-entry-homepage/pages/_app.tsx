import '../styles/globals.css'
import 'animate.css'
import i18n from 'i18next'
import zhjson from '../locales/zh.json'
import jajson from '../locales/ja.json'

const resources = { zh: { translation: zhjson }, ja: { translation: jajson } }
i18n.init({
  resources,
  debug: true,
  lng: 'zh',
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false
  }
})

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
