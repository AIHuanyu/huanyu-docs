---
title: String.format()——Java字符串格式化的艺术
---
## 引言：从字符串拼接的泥沼中解脱

还记得上一次写这样的代码是什么时候吗？

```java
String message = "用户" + username + "于" + date + 
                 "执行了" + action + "操作，" + 
                 "结果：" + result + "，" + 
                 "耗时：" + duration + "毫秒";
```

当变量增多、格式变复杂时，这样的代码很快就会变得难以阅读和维护。今天，让我们一起来掌握Java中更优雅的字符串构建方式——`String.format()`，它是Java版的`printf`，是字符串格式化的瑞士军刀。

## 一、String.format()基础：从简单到强大

### 1.1 基本语法

```java
// 基本形式
String formatted = String.format(format, args...);

// format字符串包含普通文本和格式说明符
// 格式说明符以%开头，如%s表示字符串，%d表示整数
```

### 1.2 第一个示例：从简单开始

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
        // 两者输出相同，但后者更清晰
    }
}
```

## 二、格式说明符详解：掌握格式化语言

### 2.1 常用转换符

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

### 2.2 完整格式说明符语法

```
%[argument_index$][flags][width][.precision]conversion
```

- **argument_index$**：参数索引（从1开始），如`1$`表示第一个参数
- **flags**：标志，如`-`表示左对齐，`0`表示用0填充
- **width**：最小宽度
- **.precision**：精度（对于浮点数）或最大字符数（对于字符串）
- **conversion**：转换类型（s, d, f等）

## 三、实战演练：各种场景下的应用

### 3.1 表格数据格式化

```java
public class TableFormatter {
    
    public static void formatProductTable(List<Product> products) {
        // 打印表头
        System.out.println(String.format("%-5s %-20s %-10s %-8s", 
            "ID", "产品名称", "价格", "库存"));
        System.out.println(String.format("%-5s %-20s %-10s %-8s",
            "----", "--------------------", "----------", "--------"));
        
        // 打印数据行
        for (Product product : products) {
            System.out.println(String.format("%-5d %-20s %-10.2f %-8d",
                product.getId(),
                // 名称过长时截断
                product.getName().length() > 20 ? 
                    product.getName().substring(0, 17) + "..." : product.getName(),
                product.getPrice(),
                product.getStock()));
        }
    }
    
    public static void main(String[] args) {
        List<Product> products = Arrays.asList(
            new Product(1, "Java编程思想（第四版）", 108.50, 100),
            new Product(2, "Effective Java", 89.00, 50),
            new Product(3, "Spring Boot实战", 76.80, 200)
        );
        
        formatProductTable(products);
        /* 输出：
        ID   产品名称              价格        库存    
        ---- -------------------- ---------- --------
        1    Java编程思想（第四... 108.50     100     
        2    Effective Java       89.00      50      
        3    Spring Boot实战      76.80      200     
        */
    }
}
```

### 3.2 财务金额格式化

```java
public class FinancialFormatter {
    
    /**
     * 格式化金额，支持负数、千位分隔符
     */
    public static String formatCurrency(double amount, String currencyCode) {
        String symbol = getCurrencySymbol(currencyCode);
        
        // 使用不同的格式处理正负数
        if (amount >= 0) {
            return String.format("%s%,.2f", symbol, amount);
        } else {
            // 负数用括号表示
            return String.format("(%s%,.2f)", symbol, Math.abs(amount));
        }
    }
    
    /**
     * 生成银行对账单
     */
    public static String generateBankStatement(String accountNo, 
                                              List<Transaction> transactions) {
        StringBuilder sb = new StringBuilder();
        
        // 表头
        sb.append(String.format("账户号: %s%n%n", accountNo));
        sb.append(String.format("%-12s %-25s %-15s %-15s %-15s%n",
            "交易日期", "摘要", "收入", "支出", "余额"));
        sb.append(String.format("%-12s %-25s %-15s %-15s %-15s%n",
            "----------", "-------------------------", 
            "---------------", "---------------", "---------------"));
        
        double balance = 0;
        for (Transaction t : transactions) {
            balance += t.getAmount();
            
            sb.append(String.format("%-12s %-25s %-15s %-15s %-15.2f%n",
                t.getDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")),
                t.getDescription().length() > 25 ? 
                    t.getDescription().substring(0, 22) + "..." : t.getDescription(),
                t.getAmount() > 0 ? String.format("%,.2f", t.getAmount()) : "",
                t.getAmount() < 0 ? String.format("%,.2f", Math.abs(t.getAmount())) : "",
                balance));
        }
        
        return sb.toString();
    }
}
```

### 3.3 日志消息格式化

```java
public class LogFormatter {
    
    private static final String LOG_TEMPLATE = 
        "[%1$tY-%1$tm-%1$td %1$tH:%1$tM:%1$tS] [%2$-5s] [%3$s] %4$s%n";
    
    /**
     * 统一日志格式
     */
    public static String formatLog(LogLevel level, String module, String message) {
        return String.format(LOG_TEMPLATE,
            LocalDateTime.now(),  // 参数1: 时间
            level.name(),         // 参数2: 日志级别
            module,               // 参数3: 模块名
            message);             // 参数4: 日志内容
    }
    
    /**
     * 带上下文的错误日志
     */
    public static String formatErrorLog(String errorCode, String errorMsg, 
                                       Map<String, Object> context) {
        return String.format(
            """
            [ERROR] 错误码: %s
                    消息: %s
                    上下文: %s
                    时间: %s
                    线程: %s
            """,
            errorCode,
            errorMsg,
            // 将Map格式化为可读字符串
            context.entrySet().stream()
                .map(e -> String.format("%s=%s", e.getKey(), e.getValue()))
                .collect(Collectors.joining(", ")),
            LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME),
            Thread.currentThread().getName()
        );
    }
}
```

## 四、高级技巧与模式

### 4.1 参数重用

```java
public class ArgumentReuseExample {
    public static void main(String[] args) {
        // 同一个参数多次使用
        String template = "文件 '%1$s' 已保存到 '%1$s.bak'，大小: %2$d 字节";
        String result = String.format(template, "data.txt", 1024);
        // 输出: 文件 'data.txt' 已保存到 'data.txt.bak'，大小: 1024 字节
        
        // 参数顺序重排
        String reorderTemplate = "三数之和: %3$d + %1$d + %2$d = %4$d";
        String reorderResult = String.format(reorderTemplate, 10, 20, 30, 60);
        // 输出: 三数之和: 30 + 10 + 20 = 60
    }
}
```

### 4.2 与资源文件结合（国际化）

```java
public class I18nExample {
    
    // messages.properties
    // welcome.message=欢迎, {0}! 今天是{1}, 您是第{2,number}位访客。
    
    public String getWelcomeMessage(String username, int visitorCount) {
        // 实际项目中会从资源文件加载pattern
        String pattern = "欢迎, %s! 今天是%s, 您是第%,d位访客。";
        
        String today = LocalDate.now()
            .format(DateTimeFormatter.ofPattern("yyyy年M月d日"));
        
        return String.format(pattern, username, today, visitorCount);
    }
    
    public static void main(String[] args) {
        I18nExample example = new I18nExample();
        String message = example.getWelcomeMessage("张三", 1234567);
        System.out.println(message);
        // 输出: 欢迎, 张三! 今天是2024年1月15日, 您是第1,234,567位访客。
    }
}
```

### 4.3 自定义格式化器

```java
public class CustomFormatter {
    
    /**
     * 自定义电话号码格式化
     */
    public static String formatPhoneNumber(String phone) {
        if (phone == null || phone.length() != 11) {
            return phone;
        }
        return String.format("%s-%s-%s", 
            phone.substring(0, 3),
            phone.substring(3, 7),
            phone.substring(7));
    }
    
    /**
     * 生成进度条
     */
    public static String createProgressBar(int current, int total, int width) {
        float percentage = (float) current / total;
        int filled = (int) (width * percentage);
        
        StringBuilder bar = new StringBuilder("[");
        for (int i = 0; i < width; i++) {
            bar.append(i < filled ? "=" : " ");
        }
        bar.append("]");
        
        return String.format("%s %6.2f%% (%d/%d)", 
            bar.toString(), percentage * 100, current, total);
    }
    
    public static void main(String[] args) {
        System.out.println(formatPhoneNumber("13800138000"));
        // 输出: 138-0013-8000
        
        for (int i = 0; i <= 10; i++) {
            System.out.println(createProgressBar(i, 10, 20));
        }
        /* 输出:
        [                    ]   0.00% (0/10)
        [==                  ]  10.00% (1/10)
        [====                ]  20.00% (2/10)
        ...
        */
    }
}
```

## 五、性能考量与最佳实践

### 5.1 性能对比

```java
public class PerformanceComparison {
    private static final int ITERATIONS = 100000;
    
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

**结论**：
- **简单拼接**：性能最好，适合简单场景
- **StringBuilder**：处理多个字符串时性能好
- **String.format()**：性能稍差，但可读性最好，适合复杂格式化

### 5.2 最佳实践

1. **何时使用String.format()**
   - 需要复杂格式化（对齐、精度等）
   - 代码可读性更重要时
   - 国际化或多语言支持
   - 生成固定格式的报表或日志

2. **何时避免使用**
   - 极度性能敏感的热点代码
   - 简单的字符串拼接（如`"Hello " + name`）
   - 循环内部大量调用（考虑预编译模板）

3. **性能优化技巧**
   ```java
   // 预编译格式模板（如果频繁使用）
   private static final String USER_INFO_TEMPLATE = 
       "用户: %s, 积分: %d, 等级: %s";
   
   public String formatUserInfo(User user) {
       return String.format(USER_INFO_TEMPLATE, 
           user.getName(), 
           user.getPoints(), 
           user.getLevel());
   }
   
   // 使用MessageFormat替代（对于非常复杂的国际化）
   import java.text.MessageFormat;
   String pattern = "欢迎{0}，您有{1}条未读消息";
   String result = MessageFormat.format(pattern, "张三", 5);
   ```

## 六、常见问题与解决方案

### 6.1 MissingFormatArgumentException

```java
try {
    // 错误：参数数量不足
    String result = String.format("姓名: %s, 年龄: %d", "张三");
} catch (MissingFormatArgumentException e) {
    System.out.println("错误: 缺少格式化参数");
    // 解决方案：确保参数数量匹配
    String result = String.format("姓名: %s, 年龄: %s", "张三", "25");
}
```

### 6.2 处理null值

```java
// 问题：直接使用null会输出"null"
String result = String.format("值: %s", null); // 输出: 值: null

// 解决方案1：使用Objects.toString()
String result = String.format("值: %s", Objects.toString(value, "空"));

// 解决方案2：自定义处理
public static String safeFormat(String pattern, Object... args) {
    Object[] safeArgs = Arrays.stream(args)
        .map(arg -> arg == null ? "空" : arg)
        .toArray();
    return String.format(pattern, safeArgs);
}
```

### 6.3 日期时间格式化

```java
// 使用DateTimeFormatter（Java 8+推荐）
LocalDateTime now = LocalDateTime.now();
String formatted1 = String.format("%tY-%tm-%td %tH:%tM:%tS", 
    now, now, now, now, now, now);

// 更简洁的方式
String formatted2 = now.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

// 复杂日期格式
String complexDate = String.format(
    "%tY年%<tm月%<td日 星期%<tA %<tH时%<tM分%<tS秒",
    new Date()
);
```

## 七、总结：让字符串格式化成为艺术

`String.format()`不仅仅是一个方法，它是一种声明式的字符串构建思想。通过掌握它，你可以：

1. **写出更清晰的代码**：格式与逻辑分离
2. **轻松处理复杂格式化**：对齐、精度、千位分隔符等
3. **提高代码可维护性**：模板集中管理，便于修改
4. **支持国际化**：与资源文件完美结合

记住这些黄金法则：
- 简单拼接用`+`
- 多次拼接用`StringBuilder`
- 复杂格式化用`String.format()`
- 处理null用`Objects.toString()`

### 练习挑战

尝试用`String.format()`重写以下代码：
```java
// 挑战：重构这段代码
public String generateReport(String userName, int score, Date testDate, 
                            double average, boolean passed) {
    return "考生: " + userName + 
           "\n得分: " + score + 
           "\n考试日期: " + new SimpleDateFormat("yyyy-MM-dd").format(testDate) + 
           "\n平均分: " + String.format("%.1f", average) + 
           "\n状态: " + (passed ? "合格" : "不合格");
}
```

**参考答案**：
```java
public String generateReport(String userName, int score, Date testDate,
                            double average, boolean passed) {
    return String.format(
        """
        考生: %s
        得分: %,d
        考试日期: %tF
        平均分: %.1f
        状态: %s
        """,
        Objects.toString(userName, "匿名考生"),
        score,
        testDate,
        average,
        passed ? "✅ 合格" : "❌ 不合格"
    );
}
```

现在，你已经掌握了Java字符串格式化的艺术。下次构建字符串时，不妨多想一想：能否用`String.format()`让代码更优雅？

---

**扩展阅读**：如果你需要处理更复杂的文本模板，可以考虑学习：
1. **Apache Commons Text**：提供更强大的模板引擎
2. **Freemarker/Thymeleaf**：用于Web页面的模板引擎
3. **Java 15+ 文本块**：多行字符串的新特性