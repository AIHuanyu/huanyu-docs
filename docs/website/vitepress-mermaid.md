---
title: VitePress集成Mermaid
---
## 1. 安装依赖
```bash
npm install mermaid vitepress-plugin-mermaid -D
```

## 2. 修改配置
```js
// import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// export default defineConfig({
//   
// })

export default withMermaid({
  // 将defineConfig下的配置内容放在此处
})
```
## 3. 示例测试
流程图：
```mermaid
flowchart LR
   A -- text --> B -- text2 --> C
```
类图：
```mermaid
---
title: Bank example
---
classDiagram
    class BankAccount
    BankAccount : +String owner
    BankAccount : +Bigdecimal balance
    BankAccount : +deposit(amount)
    BankAccount : +withdrawal(amount)
```