## 1. 安装
```text
pip install mysql-connector-python
```
安装信息：
```text
Collecting mysql-connector-python
  Using cached mysql_connector_python-9.3.0-cp313-cp313-win_amd64.whl.metadata (7.7 kB)
Downloading mysql_connector_python-9.3.0-cp313-cp313-win_amd64.whl (16.4 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 16.4/16.4 MB 2.3 MB/s eta 0:00:00
Installing collected packages: mysql-connector-python
Successfully installed mysql-connector-python-9.3.0
```
## 2. 基础连接
```python
import mysql.connector
from mysql.connector import Error

try:
    connection = mysql.connector.connect(
        host='localhost',         # 数据库主机地址
        user='your_username',     # 数据库用户名
        password='your_password', # 数据库密码
        database='your_database'  # 可选：指定数据库
    )
    if connection.is_connected():
         # 获取服务器信息
        print(f"MySQL版本：{connection.server_info}")
        cursor = connection.cursor()
        cursor.execute("SELECT VERSION()")
        record = cursor.fetchone()
        print(f"MySQL版本{record}")
except Error as e:
    print(f"连接失败: {e}")

finally:
    # 关闭数据库连接
    if connection.is_connected():
        cursor.close()
        connection.close()
        print("数据库连接已关闭")
```
打印内容：
```text
MySQL版本：8.0.20
MySQL版本('8.0.20',)
数据库连接已关闭
```
## 3. 连接参数详解
```python
connection = mysql.connector.connect(
    host='localhost',          # 数据库主机（默认: localhost）
    port=3306,                 # 端口号（默认: 3306）
    user='your_username',      # 用户名
    password='your_password',  # 密码
    database='your_database',  # 数据库名（可选）
    charset='utf8mb4',         # 字符集（默认: utf8mb4）
    autocommit=True,           # 是否自动提交（默认: False）
    connection_timeout=10,     # 连接超时时间（秒）
    buffered=True,             # 是否缓冲查询结果
    use_pure=True              # 是否使用纯 Python 实现（默认: 自动）
)
```
## 4. 基础SQL操作
### 4.1. 查询数据
```python
        cursor = connection.cursor()
        query_select = "select * from book"
        cursor.execute(query_select)
        result = cursor.fetchall()
        for row in result:
            print(row)
```
打印内容：
```text
(1, '动物农场', '乔治·奥威尔')
(2, '刀锋', '毛姆')
```
### 4.2. 插入数据
```python
        cursor = connection.cursor()
        query_insert = "insert into book (id, name, author) values (%s, %s, %s)"
        data = (3, "道德经", "老子")
        cursor.execute(query_insert, data)
        connection.commit()
        print(f"成功插入{cursor.rowcount}条数据！")
```
打印内容：
```text
成功插入1条数据！
```
### 4.3. 更新数据
```python
        cursor = connection.cursor()
        query_update = "update book set name = %s where id = %s"
        cursor.execute(query_update, ("道德经", 3))
        connection.commit()
        print(f"成功更新{cursor.rowcount}条数据！")
```
打印内容：
```text
成功更新1条数据！
```
### 4.4. 删除数据
```python
        cursor = connection.cursor()
        query_delete = "delete from book where id = %s"
        cursor.execute(query_delete, (3,))
        connection.commit()
        print(f"成功删除{cursor.rowcount}条数据！")
```
打印内容：
```text
成功删除1条数据！
```
## 5. 参数格式
```python
query_delete = "delete from book where id = %s"
cursor.execute(query_delete, 4)  # 报错：Could not process parameters: int(4), it must be of type list, tuple or dict
cursor.execute(query_delete, (4,))  # 这是正确的格式
```
通过报错信息可知：参数必须为列表、元组或者字典，因此，即使一个要素，也必须使用元组。

