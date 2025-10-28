通过 yum 仓库安装（推荐，简单快捷）
## 1. 安装11
CentOS 官方仓库可能不包含 JDK 17，最新是11，那安装11版本。

```bash
# 安装 OpenJDK 11 开发版（包含编译工具，适合开发和运行 Java 程序）
sudo yum install -y java-11-openjdk-devel
# 若只需运行 Java 程序（无需编译），可安装运行时版本
sudo yum install -y java-11-openjdk
```
## 2. 下载17
https://www.oracle.com/java/technologies/javase/jdk17-0-13-later-archive-downloads.html

jdk-17.0.16_linux-x64_bin.rpm


```bash
rpm -ivh jdk-17.0.16_linux-x64_bin.rpm
```
## 2. 安装验证
```bash
# 查看 Java 版本
java -version

# 查看 javac 版本（确认开发工具已安装，仅开发版有此命令）
javac -version
```
## 3. 启动jar
```bash
nohup java -jar app.jar > app.log 2>&1 &
```
说明：
nohup：忽略终端挂断信号，确保程序后台运行。
> app.log：将程序输出日志写入 app.log 文件。
2>&1：将错误日志重定向到标准输出（统一写入 app.log）。
最后的 &：将程序放入后台运行。

```bash
tail -f app.log  # 实时查看日志
cat app.log      # 查看全部日志
```

