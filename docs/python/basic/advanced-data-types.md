## 1. 序列
在 Python 中，序列（Sequence） 是一种基本的数据结构类型，指的是**有序的元素集合**。
有序指的是元素中有索引顺序之分，可以通过索引来访问指定位置的元素。

Python 有多个序列的内置类型，但最常见的是列表、元组和字符串。

**注意：字符串也是一种序列**。
| 类型       | 可变性 | 元素类型       | 示例                     |
|------------|--------|----------------|--------------------------|
| **列表**   | 可变   | 任意类型       | `[1, "a", [2]]`          |
| **元组**   | 不可变 | 任意类型       | `(1, "a", (2,))`         |
| **字符串** | 不可变 | 字符（Unicode）| `"hello"`                |
| **字节**   | 不可变 | 0-255 的整数   | `b'\x01\x02'`            |
| **字节数组**| 可变  | 0-255 的整数   | `bytearray([1, 2])`      |
| **范围**   | 不可变 | 整数序列       | `range(1, 5)`            |

**序列与其他数据结构的关系**
- 序列：有序、可重复，支持索引访问。
- 集合（set）：无序、唯一，不支持索引。
- 字典（dict）：键值对，键唯一且不可变，无序（3.7+ 后保持插入顺序）。

## 2. 列表 List（一种序列）
列表是可以修改的序列、中括号`[]`
```python
list = ['C', 'H', 'A', 'T', 'G', 'I', 'S']
```

## 3. 元组 Tuple（一种序列）
在 Python 中，元组（tuple） 是一种**不可变的有序序列**，用于存储多个元素。元组一旦创建，其元素不能被修改、添加或删除，
因此适合存储不可变的数据集合（如坐标点、配置参数等）。
> 关于发音：Python 之父吉多·范罗苏姆在 [Twitter](https://twitter.com/gvanrossum/status/86144775731941376) 上 说：“ 每 周 的
一三五我会把 tuple 念作 too-pull，而二四六我喜欢念作 tub-pull。至于礼拜天
嘛，我从不会讨论这些。 :)”  引自《Python语言及其应用》3.1小节。

### 3.1. 基础操作
**创建元组**
```python
# 创建元组
empty_tuple = () # 空元组
single_tuple = (1,) # 单要素元组，必须加逗号
normal_tuple = (1, 2, "three") # 多元素元组
implicit_tuple = 1, 2, 3, 4 # 隐式元组，可省略括号
nested_tuple = (1, (2, 3)) # 嵌套元组

# 使用tuple()函数转换其他序列
list_to_tuple = tuple([1, 2, 3]) # 从列表转换
string_to_tuple = tuple("ChatGIS") # 从字符串转换
print(string_to_tuple) # ('C', 'h', 'a', 't', 'G', 'I', 'S')
```
**访问元素**
```python
# 访问元素
tuple_cg = ('C', 'h', 'a', 't', 'G', 'I', 'S')
print(tuple_cg[0])  # C
print(tuple_cg[-1])  # S
print(tuple_cg[1:4])  # ('h', 'a', 't')
```
**不可变性**
```python
# 元组的元素不能被修改，否则会报错
tuple_cg[0] = "c"  # 报错：TypeError: 'tuple' object does not support item assignment
```
元组的元素不可变，但元素内部可能可变。
```python
t = (1, [2, 3])
# t[1] = [4, 5]  # 报错：不能修改元组元素
t[1][0] = 100  # 但可以修改列表内部的值 → t 变为 (1, [100, 3])
print(t)  # (1, [100, 3])
```
### 3.2. 常用操作
**连接与重复**
```python
tuple1 = ('C', 'h', 'a', 't')
tuple2 = ('G', 'I', 'S')
print(tuple1 + tuple2)  # ('C', 'h', 'a', 't', 'G', 'I', 'S')
print(tuple2 * 3)  # ('G', 'I', 'S', 'G', 'I', 'S', 'G', 'I', 'S')
```
**成员检测**
```python
tuple_cg = ('C', 'h', 'a', 't', 'G', 'I', 'S')
print("A" in tuple_cg)  # False
print("C" in tuple_cg)  # True
print("B" not in tuple_cg)  # True
```
**常用函数**
```python
tuple_five = (1, 2, 3, 4, 5)
print(len(tuple_five))  # 5
print(max(tuple_five))  # 5
print(min(tuple_five))  # 1
```
**遍历元组**
```python
touple_three = (1, 2, 3)
for i in touple_three:
    print(i)
```
### 3.3. 特殊用法
**元组解包（Unpacking）**：将元组的值一次性赋给多个变量；  
非常适用于GIS场景，例如：获取一个点坐标的经度和纬度。
```python
point = (117, 37)
lon, lat = point
print(lon)  # 117
print(lat)  # 37
```
**函数返回多个值**  
函数可返回元组，调用时进行解包；
```python
def get_point():
    return 118, 38
lon, lat = get_point()
print(lon)  # 118
print(lat)  # 38
```
**作为字典的键**
由于元组不可变，可作为字典的键
```python
citys = {
    (116.4, 39.9): "北京",
    (118.8, 32.1): "南京"
}
print(citys[(116.4, 39.9)])  # 北京
```
### 3.4. 元组与列表的对比
| 特性           | 元组（tuple）               | 列表（list）                |
|----------------|-----------------------------|-----------------------------|
| **可变性**     | 不可变（创建后不可修改）    | 可变（可修改、添加、删除）  |
| **语法**       | 用 `()` 或逗号分隔          | 用 `[]`                     |
| **性能**       | 访问速度略快，内存占用少    | 访问速度略慢，内存占用多    |
| **安全性**     | 适合存储不可变数据          | 适合动态数据                |
| **应用场景**   | 配置参数、函数返回值、字典键 | 动态数据存储、增删改操作    |


## 4. 集合 Set
可迭代、无序、不可重复、{}
```python
set = {'C', 'H', 'A', 'T', 'G', 'I', 'S'}
```

## 5. 字典 Dict
可迭代的键值对
```python
dict = {'name': 'ChatGIS'}
```
