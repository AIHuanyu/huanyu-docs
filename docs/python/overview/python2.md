
## 1. pip版本
```python
# 方法1
pip2 -V
# 方法2,(前提是将python2文件夹的python.ext改为python2.exe)
python2 -m pip -V
```
## 2. 安装软件包
已安装`MySQL-python`为例：
```text
pip2 install MySQL-python
```
安装报错：
```text
 error: Microsoft Visual C++ 9.0 is required. Get it from http://aka.ms/vcpython27
```
需要安装C++环境，提供的地址已经失效，可以在下面地址下载：https://github.com/reider-roque/sulley-win-installer/blob/master/VCForPython27.msi

下载获取软件包：`VCForPython27.msi`。

安装后再次报错：
```text
AppData\Local\Programs\Common\Microsoft\Visual C++ for Python\9.0\VC\Bin\amd64\cl.exe
 /c /nologo /Ox /MD /W3 /GS- /DNDEBUG -Dversion_info=(1,2,5,'final',1) -D__version__=1.2.5 "
 -IC:\Program Files (x86)\MySQL\MySQL Connector C 6.0.2\include" -IC:\Programs\Python\Python207\include 
 -IC:\Programs\Python\Python207\PC /Tc_mysql.c /Fobuild\temp.win-amd64-2.7\Release\_mysql.obj /Zl
    _mysql.c
    _mysql.c(42) : fatal error C1083: Cannot open include file: 'config-win.h': No such file or directory

```
下载MySQL Connector C 6.0.2
https://downloads.mysql.com/archives/c-c/
下载文件为：`mysql-connector-c-6.0.2-winx64.msi`
> 注意：安装时要自定义安装路径到`Program Files (x86)`，否则会默认安装到`Program Files`

安装完成后，重新执行pip命令，安装该软件包成功。