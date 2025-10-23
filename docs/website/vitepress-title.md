--- 
title: VitePress增加文章标题
date: '2025-10-19'
---
按照创建日期的方式，使用布局插槽`page-title`在文章顶部显示文章标题，是否显示根据`frontmatter`中的`title`字段判断。

## 1. 创建文章标题组件
```vue
<template>
  <span v-if="$frontmatter.title" class="page-title">{{ $frontmatter.title }}</span>
</template>

<style>
.page-title {
  color: #333;
  font-size: 24px;
  font-weight: 600;
}
</style>
```
## 2. 使用渲染函数增加组件
在.vitepress/theme/index.js中，使用渲染函数增加组件。
```js
import FrontmatterDate from './components/FrontmatterDate.vue'
import FrontmatterTitle from './components/FrontmatterTitle.vue'
export default {
  extends: DefaultTheme,
  // Layout: MyLayout,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(FrontmatterTitle),
      'doc-footer-before': () => h(FrontmatterDate)
    })
  },
}
```