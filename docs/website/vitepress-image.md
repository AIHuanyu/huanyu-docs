--- 
title: VitePress三类图片展示
date: '2025-11-01'
---
## 1. 主页图片
展示位置：text 和 tagline 区域旁的图片，是网页呈现给用户最显著的品牌logo，因此，图片要清晰。

在主页的index.md中，使用hero.image字段设置：
```yaml
hero:
  name: "AI寰宇空间"
  image:
    src: /aihuanyu.space-logo-large.svg
    alt: aihuanyu.space
```
[官网说明](https://vitepress.dev/zh/reference/default-theme-home-page#hero-section)
## 2. 导航栏 Logo
位置：导航栏的左侧，位于站点标题前。

在.vitepress/config.mjs中，使用themeConfig.logo字段设置：
```js
themeConfig: {
  logo: "/aihuanyu.space-logo-small.svg",
}
```
[官网说明](https://vitepress.dev/zh/reference/default-theme-nav)
## 3. tab页图标
位置：导航栏中每个 tab 页的图标。

在.vitepress/config.mjs中，需要在head字段内设置。
```js
export default defineConfig({
  head: [["link", { rel: "icon", href: "/favicon.ico" }]]
}）
```
[官网说明](https://vitepress.dev/zh/reference/site-config#example-adding-a-favicon)
## 4. 图片位置
上述三类图片都需要放在根目录/public目录下，如果没有该目录，需要手动创建。
