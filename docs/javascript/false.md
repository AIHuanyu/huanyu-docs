---
title: undefined、null和NaN的区别
date: 2020-01-19
---
在 JavaScript 开发中，undefined、null和NaN是三个极易混淆的特殊值。它们看似都代表 “空” 或 “无效”，但在语义、类型和使用场景上存在本质区别。

## 1. undefined：“未定义” 的默认状态
undefined的语义是 “变量已声明但未赋值，或属性不存在时的默认值”，它代表一种 “被动的未定义状态”—— 不是开发者主动设置的结果，而是 JavaScript 引擎默认赋予的初始值。

典型场景包括：
- 变量声明后未赋值：
```js
let x;
console.log(x); // undefined
```
- 对象属性不存在：
```js
const obj = {};
console.log(obj.undefinedProperty); // undefined
```
- 函数参数未传递：
```js
function foo(a) {
  console.log(a); // undefined
}
foo();
```
## 2. null：“主动清空” 的空值​
与undefined的 “被动未定义” 不同，null的语义是 “开发者主动设置的空值”，明确表示 “变量应指向一个对象，但目前没有指向任何有效对象”。它是一种 “主动的状态声明”。​

典型场景包括：
- 声明时明确赋值为null，表示 “初始为空对象引用”：
```js
let x = null;
console.log(x); // null
```
- 变量被主动清空：
```js
let x = 10;
x = null;
console.log(x); // null
```
- 函数返回空值：
```js
function getValue() {
  return null;
}
console.log(getValue()); // null
```
null的核心价值在于 “语义清晰”—— 它告诉代码阅读者：“这里不是忘记赋值，而是故意设为空”。
## 3. NaN：“非数字” 的无效值
NaN（Not a Number）的语义是 “数值运算或转换失败时的结果”，它属于Number类型，但代表 “不是一个有效的数字”。需要注意的是，NaN并非 “非数字类型”，而是 “数字类型中的无效值”。

典型场景包括：
- 无效的字符串转数字：
```js
console.log(Number("123a")); // NaN
```
- 无意义的数学运算：
```js
0 / 0; // NaN（数学上无意义的运算）
Math.sqrt(-1); // NaN（负数无法开平方）
```
- 非数字与数字的运算：
```js
"aihuanyu.space" * 2; // NaN（字符串无法与数字相乘）
```
NaN的存在是为了处理 “数值操作失败” 的场景，避免程序直接报错，而是返回一个可识别的 “错误标识”。
## 4. 类型判定
使用typeof运算符检测三者时，会出现一些 “反直觉” 的结果，这与 JavaScript 的历史设计有关：
```js
typeof undefined; // "undefined"
typeof null; // "object"（历史遗留问题）
typeof NaN; // "number"
```
早期 JavaScript 设计中，null被视为 “空对象指针”，导致typeof返回 'object'
::: tip
因为ECMAScript的类型系统是松散的，所以需要一种手段来确定任意变量的数据类型，typeof操作符就是为此而生的。—— 《JavaScript高级程序设计(第4版)》

需要注意的是，typeof不是函数，而是一个运算符，因此，`typeof a`通常不需要加括号，不过也可以加括号作为表达式分组的作用，而非函数调用。
:::
## 5. 相等判断
### 5.1. undefined和null的比较
```js
let a
let b = null

console.log(a === b) // false
console.log(a == b) // true
```
- 严格相等（===）：undefined === null → false（类型不同，语义不同）
- 宽松相等（==）：undefined == null → true（类型不同，但由于历史原因，被视为相等）
建议：始终使用===进行比较，避免==的模糊逻辑。
### 5.2. NaN的比较
`NaN`是 JavaScript 中唯一 “不与自身相等” 的值：
```js
console.log(NaN === NaN) // false
console.log(NaN == NaN) // false
```
这是因为NaN代表 “无效数值”，而 “无效” 的具体原因可能不同（如`0/0`和`Number("abc")`），JavaScript 无法判定两种 “无效” 是否完全相等。因此，必须用`Number.isNaN()`判断NaN。
::: tip
Number.isNaN()是ES6新增的方法，用于判断一个值是否为NaN，而不是全局函数isNaN()。
:::
