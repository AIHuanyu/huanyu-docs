---
title: Objects.toString() — Java中优雅处理null值的利器
---
## 1. 空指针异常
::: info 空指针异常
在Java开发中，NullPointerException（空指针异常）无疑是程序员最常见的"敌人"之一。

据统计，NullPointerException占所有Java异常的三分之一以上。每天都有大量的开发时间被浪费在调试这类问题上：
:::

```java
// 常见的null检查代码
String result;
if (obj != null) {
    result = obj.toString();
} else {
    result = "默认值";
}

// 或者使用三元运算符
String result = obj != null ? obj.toString() : "默认值";
```

这些写法虽然有效，但显得冗长且重复。今天，我要介绍一个被很多Java开发者忽视的工具——`Objects.toString()`，它能让我们用更优雅、更安全的方式处理null值。

## 2. Objects.toString()

### 2.1 方法起源

`Objects.toString()`是Java 7中引入的`java.util.Objects`工具类的一部分。这个工具类提供了一系列静态方法来操作对象，帮助开发者编写更健壮、更简洁的代码。

### 2.2 核心方法

```java
// 方法1：基本转换，null会转为"null"
public static String toString(Object o)

// 方法2：带默认值的转换（这才是真正强大的地方）
public static String toString(Object o, String nullDefault)
```

### 2.3 简单场景对比

**场景**：获取用户昵称，如果为null则显示"匿名用户"

```java
// 传统写法1：if-else
String displayName;
if (nickname != null) {
    displayName = nickname;
} else {
    displayName = "匿名用户";
}

// 传统写法2：三元运算符
String displayName = nickname != null ? nickname : "匿名用户";

// Objects.toString()写法（一行搞定！）
String displayName = Objects.toString(nickname, "匿名用户");
```

## 3. 性能测试

很多人担心使用工具方法会有性能损耗，让我们做个简单的性能测试：

```java
public class PerformanceTest {
    private static final int ITERATIONS = 10_000_000;
    
    public static void main(String[] args) {
        String testValue = "测试数据";
        
        // 测试1：三元运算符
        long start1 = System.nanoTime();
        for (int i = 0; i < ITERATIONS; i++) {
            String result = testValue != null ? testValue : "默认值";
        }
        long time1 = System.nanoTime() - start1;
        
        // 测试2：Objects.toString()
        long start2 = System.nanoTime();
        for (int i = 0; i < ITERATIONS; i++) {
            String result = Objects.toString(testValue, "默认值");
        }
        long time2 = System.nanoTime() - start2;
        
        System.out.printf("三元运算符: %.2f ms%n", time1 / 1_000_000.0);
        System.out.printf("Objects.toString: %.2f ms%n", time2 / 1_000_000.0);
        System.out.printf("性能差异: %.2f%%%n", 
            (time2 - time1) * 100.0 / time1);
    }
}
```

**测试结果分析**：
- 在千万次调用中，`Objects.toString()`比三元运算符还要快
```text
三元运算符: 6.03 ms
Objects.toString: 4.10 ms
性能差异: -31.99%
```