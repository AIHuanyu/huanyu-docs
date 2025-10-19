---
date: 2025/10/05
---
Vant是一个轻量、可靠的移动端组件库，由有赞前端团队维护。官方提供了Vue 2、Vue 3 和 微信小程序版本。
::: warning
注意：小程序开发要使用[微信小程序版本的Vant](https://vant-ui.github.io/vant-weapp/#/home)，不要用Vue版本的。
:::
## 1. 安装
根据官网的[开发指南](https://vant-ui.github.io/vant-weapp/#/quickstart)的步骤安装：
### 1.1. 通过 npm 安装
```bash
npm i @vant/weapp -S --production
```
执行完成后，会生成`node_modules`文件夹、`package.json`文件。
::: tip
将`node_modules`文件夹添加到`.gitignore`文件中，避免提交到版本控制。
:::
### 1.2. 修改app.json
官网提醒：将 app.json 中的 "style": "v2" 去除，小程序的新版基础组件强行加上了许多样式，难以覆盖，不关闭将造成部分组件样式混乱。
### 1.3. 构建npm包
打开微信开发者工具，点击 工具 -> 构建 npm，构建完成后，即可引入组件。

构建完成后，会在项目根目录下生成`miniprogram_npm`文件夹，其中包含了`@Vant`组件文件夹，同样将其添加到`.gitignore`文件中，避免提交到版本控制。
::: tip
当前微信开发者工具版本为 1.06.2504040，本地设置没有“使用 npm 模块”选项啦，直接构建就可以。
:::
## 2. 使用
### 2.1. 引入组件
以 Button 组件为例，只需要在app.json或index.json中配置 Button 对应的路径即可。
```json
// 通过 npm 安装
// app.json
"usingComponents": {
  "van-button": "@vant/weapp/button/index"
}
```
### 2.2. 使用组件
引入组件后，可以在 wxml 中直接使用组件
```xml
<van-button type="primary">按钮</van-button>
```