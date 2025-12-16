---
title: String.format()——Java字符串格式化的艺术
---
## 1. String.format()基础
### 1.1. 基本语法    
```java
// 基本形式
String formatted = String.format(format, args...);

// format字符串包含普通文本和格式说明符
// 格式说明符以%开头，如%s表示字符串，%d表示整数
```

### 1.2. 示例对比
```java
public class BasicExample {
    public static void main(String[] args) {
        String name = "张三";
        int age = 25;
        double salary = 8888.88;

        // 传统拼接方式
        String info1 = "姓名: " + name + ", 年龄: " + age + ", 薪资: " + salary;

        // String.format()方式
        String info2 = String.format("姓名: %s, 年龄: %d, 薪资: %.2f", name, age, salary);

        System.out.println(info1);
        System.out.println(info2);
    }
}
```

## 2. 格式说明符
### 2.1. 完整格式说明符语法
```
%[argument_index$][flags][width][.precision]conversion
```
::: info 说明
格式说明符以 % 开头，以转换类型（conversion） 结尾，中间的部分是可选的 “修饰符”，用于精细化控制格式化行为。

整体作用是：指定 “用第几个参数（argument_index）”、“以什么样式（flags/width/precision）”、“转换成什么类型（conversion）” 的字符串。
:::
### 2.2. argument_index$
作用：参数索引（从1开始），如`1$`表示第一个参数
```java
// 需求：拼接商品信息，多次使用“商品名称”和“单价”，仅传一次参数即可
String productName = "无线鼠标";
double price = 89.9;
// %1$s → 复用第1个参数（商品名）；%2$.1f → 复用第2个参数（单价，保留1位小数）
String res = String.format(
        "【商品详情】%1$s：单价%2$.1f元；\n【结算】购买1件%1$s，应付%2$.1f元；\n【备注】%1$s库存充足",
        productName, price // 仅传2个参数，模板中复用3次+2次
);
System.out.println(res);
```
### 2.3. flags
作用：标志，如`-`表示左对齐，`0`表示用0填充
```java
System.out.println(String.format("%5d默认右对齐", 123));
System.out.println(String.format("%-5d左对齐（默认右对齐）", 123));
System.out.println(String.format("%05d宽度不足时用 0 填充", 123));
System.out.println(String.format("%+d强制显示正负号", -123));
System.out.println(String.format("%,d千位分隔符", 123456));
System.out.println(String.format("%(d负数时，括号内显示负号", -123));
System.out.println(String.format("%(d正数时，不显示负号", 123));
```
```text
  123默认右对齐
123  左对齐（默认右对齐）
00123宽度不足时用 0 填充
-123强制显示正负号
123,456千位分隔符
(123)负数时，括号内显示负号
123正数时，不显示负号
```
### 2.4. width
作用：指定格式化后的字符串至少占多少个字符。  
规则：若实际格式化结果长度 < width：用空格（或 0，看 flags）填充；若实际长度 > width：按实际长度显示（不截断）。
```java
System.out.println(String.format("%.3s", "hello"));  // 截取前3个字符
System.out.println(String.format("%.2f", 123.456));  // 保留2位小数
```
```text
hel
123.46
```
### 2.5. precision（精度）
作用：根据转换类型（conversion）有不同含义，是 “精度 / 最大长度” 的控制。
规则：
- 对于浮点数（f, e, g）：保留小数点后多少位
- 对于字符串（s）：最多显示多少个字符
```java
System.out.println(String.format("%.3s", "hello"));  // 截取前3个字符
System.out.println(String.format("%.2f", 123.456));  // 保留2位小数
```
```text
hel
123.46
```
### 2.6. conversion（转换类型）
作用：指定格式化后的字符串的类型。
常见的转换符：
| 转换符 | 说明 | 示例 | 输出 |
|--------|------|------|------|
| `%s` | 字符串 | `String.format("%s", "Java")` | `Java` |
| `%d` | 十进制整数 | `String.format("%d", 42)` | `42` |
| `%f` | 浮点数 | `String.format("%.2f", 3.14159)` | `3.14` |
| `%t` | 日期时间 | `String.format("%tF", new Date())` | `2024-01-15` |
| `%b` | 布尔值 | `String.format("%b", true)` | `true` |
| `%c` | 字符 | `String.format("%c", 65)` | `A` |
| `%x` | 十六进制 | `String.format("%x", 255)` | `ff` |
| `%o` | 八进制 | `String.format("%o", 64)` | `100` |
| `%e` | 科学计数法 | `String.format("%e", 1000.0)` | `1.000000e+03` |
| `%%` | 百分号本身 | `String.format("完成%d%%", 75)` | `完成75%` |

## 3. 性能对比
```java
public class StringFormatPerformance {
    private static final int ITERATIONS = 1000000;

    public static void main(String[] args) {
        String name = "张三";
        int age = 25;
        double salary = 8888.88;

        // 测试字符串拼接
        long start1 = System.nanoTime();
        for (int i = 0; i < ITERATIONS; i++) {
            String result = "姓名: " + name + ", 年龄: " + age + ", 薪资: " + salary;
        }
        long time1 = System.nanoTime() - start1;

        // 测试String.format
        long start2 = System.nanoTime();
        for (int i = 0; i < ITERATIONS; i++) {
            String result = String.format("姓名: %s, 年龄: %d, 薪资: %.2f", name, age, salary);
        }
        long time2 = System.nanoTime() - start2;

        // 测试StringBuilder
        long start3 = System.nanoTime();
        for (int i = 0; i < ITERATIONS; i++) {
            String result = new StringBuilder()
                    .append("姓名: ").append(name)
                    .append(", 年龄: ").append(age)
                    .append(", 薪资: ").append(salary)
                    .toString();
        }
        long time3 = System.nanoTime() - start3;

        System.out.printf("字符串拼接: %.2f ms%n", time1 / 1_000_000.0);
        System.out.printf("String.format: %.2f ms%n", time2 / 1_000_000.0);
        System.out.printf("StringBuilder: %.2f ms%n", time3 / 1_000_000.0);
    }
}
```
```text
字符串拼接: 428.83 ms
String.format: 2947.48 ms
StringBuilder: 329.80 ms
```

::: warning 结论
- 简单拼接和StringBuilder性能相近；
- String.format()性能稍差，但可读性最好；
- 简单拼接用`+`
- 多次拼接用`StringBuilder`
- 复杂格式化用`String.format()`
:::

