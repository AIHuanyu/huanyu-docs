## 1. 下载
- Windows下载地址：https://www.python.org/downloads/windows/
- Python2最新版本：https://www.python.org/downloads/release/python-2718/
- Python3最新版本：https://www.python.org/downloads/release/python-3135/

根据安装系统选择Windows installer (64-bit)(python3)、Windows x86-64 MSI installer(python2)下载连接，
获取安装文件`python-3.13.5-amd64.exe`和`python-2.7.18.amd64.msi`。

## 2. 安装
### 2.1. 安装
新建文件夹`Python207`、`Python313`用于作为安装目录；
运行安装文件，按照指引安装即可。
> 注意：Python3以管理员身份运行。
### 2.2. 配置环境变量
在环境变量中增加的path中增加配置：
```text
C:\Programs\Python\Python207\;C:\Programs\Python\Python207\Scripts\;C:\Programs\Python\Python313\;C:\Programs\Python\Python313\Scripts\;
```
默认情况下，系统调用python是基于此处环境变量顺序的，哪个版本在前就调用哪个版本的python。
### 2.3. 调用测试
首先，将将python2文件夹的`python.exe`改为`python2.exe`。修改后可以根据不同命令调用不同版本的python：
```python
python -V
# Python 3.13.5
python2 -V
# Python 2.7.18
```
## 3. 卸载
以管理员身份运行安装包，选择`uninstall`选项进行卸载；
> 如果不以管理员身份运行，卸载过程会报错，报错信息：Could not set file security for file 'D:\Config.Msi\10f6e4.rbf'. 
> Error: 5. Verify thatyou have sufficient privileges to modify the security permissions for this file.

## 4. PyCharm配置
在PyCharm的 `File | Settings | Project | Python Interpreter`配置解释器，用于指定项目使用的Python版本。
