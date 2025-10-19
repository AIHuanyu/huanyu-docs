--- 
title: 使用布局插槽给文章添加创建时间
date: 2025/10/18
---
VitePress默认只提供了最后更新时间的显示功能，但没有内置文章创建时间的配置选项。对于博客或文档网站来说，创建时间是一个重要的元数据，能帮助读者了解内容的时效性。

根据[VitePress官方文档](https://vitepress.dev/zh/guide/extending-default-theme)，我们可以通过两种方式来扩展默认主题并添加创建时间组件：

1. Layout组件覆盖
2. 使用渲染函数
## 1. 在frontmatter中添加创建时间
要在文章中显示创建时间，首先需要在每篇Markdown文件的frontmatter部分添加`date`字段：
```markdown
---
title: 文章标题
date: 2025/10/18
---

文章内容...
```
## 2. Layout组件覆盖
这种方法通过创建一个自定义Layout组件来扩展VitePress的默认主题，实现起来相对直观。
### 1.1. 创建自定义Layout组件
首先，新增`.vitepress/theme/MyLayout.vue`文件，内容如下：
```vue
<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <div v-if="$frontmatter.date" class="create-time">
        文档创建时间: {{ $frontmatter.date }}
      </div>
    </template>
  </Layout>
</template>

<style>
.create-time {
  color: #666;
  font-size: 14px;
  font-weight: 500;
}
</style>
```
::: info
1. 获取默认主题中的Layout组件，组件提供了许多布局插槽，根据创建时间显示的位置，我们选择`doc-footer-before`插槽。
2. 在插槽中使用`v-if="$frontmatter.date"`条件判断，只有当`date`字段存在时才显示创建时间。
3. 使用`{{ $frontmatter.date }}`插值表达式来显示文章的创建时间。
:::
### 1.2. 在主题配置中使用自定义Layout
接下来，在`.vitepress/theme/index.js`中引入并使用自定义Layout覆盖原来的Layout组件：

```js{1,4}
import MyLayout from './MyLayout.vue'
export default {
  extends: DefaultTheme,
  Layout: MyLayout,
}
```
## 3. 使用渲染函数
这种方法通过渲染函数来扩展VitePress的默认主题，更加灵活。
### 3.1. 创建日期显示组件
首先，创建一个专门用于显示创建时间的组件`MyComponent.vue`，放置在`.vitepress/theme/components/`目录下：
```vue
<template>
  <div v-if="$frontmatter.date" class="create-time">
    文档创建时间组件: {{ $frontmatter.date }}
  </div>
</template>

<style>
.create-time {
  color: #666;
  font-size: 14px;
  font-weight: 500;
}
</style>
```
::: tip
该方法只需要创建一个单纯的新组件即可。
:::

### 3.2. 在主题配置中使用渲染函数

在`.vitepress/theme/index.js`中使用渲染函数来插入组件：

```js{1,5-9}
import MyComponent from './components/MyComponent.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(MyComponent)
    })
  },
}
```
## 4. 配置最后更新时间格式
为了保持创建时间和最后更新时间的格式一致，我们可以在VitePress配置文件中自定义最后更新时间的显示格式。
在`.vitepress/config.mjs`中添加以下配置：
```js
export default {
  themeConfig: {
    lastUpdated: {
      text: "最后更新时间",
      formatOptions: {
        year: "numeric", // 数字格式的年份（2025）
        month: "2-digit", // 两位数的月份（10）
        day: "2-digit",   // 两位数的日期（20）
      },
    },
    // 其他配置...
  }
}
```