
::: info
逻辑与操作符是一种短路操作符，意思就是如果第一个操作符数决定了结果，那么永远不会对第二个操作数求值。对逻辑与操作符来说，如果第一个操作数是false，那么无论第二个操作数是什么值，结果也不可能等于true。... 同样与逻辑与类似，逻辑或操作符也具有短路的特性，只不过对逻辑或而言，第一个操作数求值为true，第二个操作数就不会再被求值了。—— 《JavaScript高级程序设计(第4版)》
:::
## 1. 什么是短路运算？
短路运算（Short-Circuit Evaluation）是 JavaScript 中逻辑运算符的核心特性：当左侧操作数能确定整个表达式的结果时，会立即返回结果并停止执行右侧操作数。这种特性不仅能简化代码，还能减少不必要的计算，提升执行效率。

要理解短路运算，首先要明确 JS 中的真假值判定：  
假值（Falsy）：共 6 种，分别是 undefined、null、''（空字符串）、0、NaN、false。  
真值（Truthy）：除假值外的所有值，比如非空字符串、非 0 数字、数组、对象等。
## 2. &&
### 2.1. 说明
核心规则：从左到右判断，若左侧为假值，直接返回左侧值（短路）；若左侧为真值，返回右侧值。 
```js
// 左侧为真值，返回右侧
console.log("hello" && "world"); // 输出 "world"
console.log(123 && 456);         // 输出 456
// 左侧为假值，返回左侧（短路右侧）
console.log("" && "world");      // 输出 ""（空字符串为假值）
console.log(0 && 456);           // 输出 0
console.log(null && "test");     // 输出 null
```
### 2.2. 应用场景1（条件执行代码）
当需要 “满足某个条件才执行某段代码” 时，&& 可以简化 if 语句：
```js
// 传统if写法
const isLogin = true;
if (isLogin) {
  console.log("欢迎登录");
}

// 短路运算简化
isLogin && console.log("欢迎登录"); // 输出 "欢迎登录"
```
适用场景：简单的条件执行（一行代码场景），避免冗余的 if 结构。
### 2.3. 应用场景2（安全访问多层嵌套对象属性）
当访问多层嵌套对象的属性时（如 obj.a.b.c），若中间某一层不存在（为 null/undefined），直接访问会报错。&& 可逐级判断，避免报错：
```js
// 传统写法（需判断每一层是否存在）
const city = user && user.address && user.address.city;

// 短路运算简化（若中间层不存在，直接返回 undefined，避免报错）
const city = user?.address?.city; // 若 user 或 address 不存在，返回 undefined
```
适用场景：安全访问多层嵌套对象属性，避免因中间层不存在而报错。
### 2.4. 应用场景3（前端条件渲染）
在 React、Vue 等框架中，&& 常用于条件渲染组件（满足条件才渲染）：
```html
<template>
  <div>
    <!-- isShow 为真才显示该内容 -->
    {{ isShow && <p>条件满足时显示</p> }}
  </div>
</template>
```
适用场景：简单的条件渲染（一行代码场景），避免冗余的 if 结构。
## 3. ||
### 3.1. 说明
核心规则：从左到右判断，若左侧为真值，直接返回左侧值（短路）；若左侧为假值，返回右侧值。   
代码示例：
```js
// 左侧为真值，返回左侧（短路右侧）
console.log("hello" || "world"); // 输出 "hello"
console.log(123 || 456);         // 输出 123

// 左侧为假值，返回右侧
console.log("" || "world");      // 输出 "world"
console.log(0 || 456);           // 输出 456
console.log(undefined || "test");// 输出 "test"
```
### 3.2. 应用场景1（设置默认值）
当需要为变量或参数指定默认值时，|| 可以简洁地实现 “左侧有值用左侧，否则用右侧默认值”：
```js
const username = null;
const displayName = username || "访客"; // 输出 "访客" 
```
### 3.3. 应用场景2（多级取值）
当有多个数据源时，|| 可以快速获取第一个 “有效数据”（真值）
```js
// 示例：从多个可能的来源中获取用户 ID
const fromUrl = getUserIdFromUrl(); // 可能返回 null
const fromCookie = getUserIdFromCookie(); // 可能返回 undefined
const fromStorage = localStorage.getItem("userId"); // 可能返回 ""

// 优先用 url 中的 ID，没有则用 cookie，再没有则用 storage，最后用默认值
const userId = fromUrl || fromCookie || fromStorage || "default-id";
```
## 4. ??
### 4.1. 说明
??（空值合并运算符）是在 ECMAScript 2020（也称为 ES11）中引入的特性，于 2020 年 6 月正式标准化。  
它主要解决了逻辑或（||）在处理默认值时的一个痛点：|| 会将 0、""、false 等 “假值” 视为无效值，而 ?? 仅对 null 或 undefined 生效，更适合用于 “设置默认值” 的场景。      
代码示例：
```js
// 左侧为null/undefined，返回右侧
console.log(null ?? "默认值");    // 输出 "默认值"
console.log(undefined ?? "默认值");// 输出 "默认值"

// 左侧为0、空字符串等有效假值，返回左侧（与||的关键区别）
console.log(0 ?? "默认值");       // 输出 0
console.log("" ?? "默认值");      // 输出 ""
console.log(NaN ?? "默认值");     // 输出 NaN
```
### 4.2. 应用场景
精准默认值：用 ?? 保留 0、'' 等有效假值（如年龄为 0 时显示 0，而非默认值）。
```js
const age = 0;
const showAge = age ?? 18; // 输出 0（若用||会返回18，不符合预期）
```
## 5. 总结
短路运算的核心是 “按需执行”，三大运算符各有侧重：
- &&：适合 “条件成立才执行 / 取值”（找假停）；
- ||：适合 “取第一个有效真值”（找真停）；
- ??：适合 “仅在无值（null/undefined）时用默认”（精准判空）。  
掌握这一特性，能让你的代码更简洁、高效，同时避免常见的逻辑陷阱。
