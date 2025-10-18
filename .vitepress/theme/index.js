// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import MyComponent from './components/MyComponent.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  // Layout: MyLayout,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(MyComponent)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
