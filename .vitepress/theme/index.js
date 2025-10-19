// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import FrontmatterDate from './components/FrontmatterDate.vue'
import FrontmatterTitle from './components/FrontmatterTitle.vue'

import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  // Layout: MyLayout,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(FrontmatterTitle),
      'doc-footer-before': () => h(FrontmatterDate)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
