## 1. 敏感信息
数据库密码、用户名等属于敏感信息，为了避免在代码中硬编码敏感信息，可以采用从环境变量中读取。
### 1.1. 在根目录创建`.env`文件
```text
MYSQL_HOST=localhost
MYSQL_DATABASE=your_database
MYSQL_USER=your_username
MYSQL_PASSWORD=your_actual_password
```
### 1.2. 在代码中加载环境变量
```python
from dotenv import load_dotenv
import os

# 获取环境变量
load_dotenv()
password = os.environ.get('MYSQL_PASSWORD')
user = os.environ.get('MYSQL_USER')
host = os.environ.get('MYSQL_HOST')
database = os.environ.get('MYSQL_DATABASE')

connection = mysql.connector.connect(
    host=host,
    user=user,
    passwd=password,
    database=database
)
```
### 1.3. 忽略 `.env` 文件（重要！）
在 `.gitignore` 中添加 `.env`，避免敏感信息上传到版本库;
```text
.env
```
## 2. SQL注入
在 Python 数据库操作中，%s 是参数占位符，用于安全地传递动态值到 SQL 查询中，避免直接拼接字符串导致的 SQL 注入风险。
### 2.1. %s的作用
在 SQL 查询中，%s 用于标记需要动态替换的位置，实际值通过参数元组传递给 execute() 方法。例如：
```python
query = "SELECT * FROM users WHERE age > %s"  # %s 是占位符
params = (18,)  # 参数元组
cursor.execute(query, params)  # 数据库驱动会安全地替换占位符
```
### 2.2. SQL注入示例
```python
query = f"SELECT * FROM book WHERE id > {id}"
```
风险：若 id 来自用户输入（20; DROP TABLE user; --），会导致 SQL 注入攻击。
