## 1. 卸载系统自带的 MariaDB（重要）
CentOS 7 默认预装 MariaDB，会与 MySQL 冲突，需先卸载：
```bash
rpm -qa | grep mariadb
# mariadb-libs-5.5.68-1.el7.x86_64
rpm -e --nodeps mariadb-libs-5.5.68-1.el7.x86_64
```
## 2. 下载并安装 MySQL 8.0 的 YUM 源
```bash
# 下载MySQL 8.0的RPM包（官方最新稳定版）
wget https://dev.mysql.com/get/mysql80-community-release-el7-7.noarch.rpm
# 下载：mysql80-community-release-el7-7.noarch.rpm
# 安装YUM源
sudo rpm -ivh mysql80-community-release-el7-7.noarch.rpm
# Preparing...                          ################################# [100%]
#        package mysql80-community-release-el7-7.noarch is already installed
```
## 3. 安装 MySQL 服务
```bash
[root@iZuf6eh8rd3v7ql09ktaugZ ~]# rpm -ivh mysql80-community-release-el7-7.noarch.rpm
Preparing...                          ################################# [100%]
        package mysql80-community-release-el7-7.noarch is already installed
[root@iZuf6eh8rd3v7ql09ktaugZ ~]# yum install -y mysql-community-server
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
Resolving Dependencies
--> Running transaction check
---> Package mysql-community-server.x86_64 0:8.0.44-1.el7 will be installed
--> Processing Dependency: mysql-community-common(x86-64) = 8.0.44-1.el7 for package: mysql-community-server-8.0.44-1.el7.x86_64
--> Processing Dependency: mysql-community-icu-data-files = 8.0.44-1.el7 for package: mysql-community-server-8.0.44-1.el7.x86_64
--> Processing Dependency: mysql-community-client(x86-64) >= 8.0.11 for package: mysql-community-server-8.0.44-1.el7.x86_64
--> Processing Dependency: libaio.so.1(LIBAIO_0.1)(64bit) for package: mysql-community-server-8.0.44-1.el7.x86_64
--> Processing Dependency: libaio.so.1(LIBAIO_0.4)(64bit) for package: mysql-community-server-8.0.44-1.el7.x86_64
--> Processing Dependency: libaio.so.1()(64bit) for package: mysql-community-server-8.0.44-1.el7.x86_64
--> Running transaction check
---> Package libaio.x86_64 0:0.3.109-13.el7 will be installed
---> Package mysql-community-client.x86_64 0:8.0.44-1.el7 will be installed
--> Processing Dependency: mysql-community-client-plugins = 8.0.44-1.el7 for package: mysql-community-client-8.0.44-1.el7.x86_64
--> Processing Dependency: mysql-community-libs(x86-64) >= 8.0.11 for package: mysql-community-client-8.0.44-1.el7.x86_64
---> Package mysql-community-common.x86_64 0:8.0.44-1.el7 will be installed
---> Package mysql-community-icu-data-files.x86_64 0:8.0.44-1.el7 will be installed
--> Running transaction check
---> Package mysql-community-client-plugins.x86_64 0:8.0.44-1.el7 will be installed
---> Package mysql-community-libs.x86_64 0:8.0.44-1.el7 will be installed
--> Finished Dependency Resolution

Dependencies Resolved

======================================================================================================================================================================================================
 Package                                                      Arch                                 Version                                      Repository                                       Size
======================================================================================================================================================================================================
Installing:
 mysql-community-server                                       x86_64                               8.0.44-1.el7                                 mysql80-community                                65 M
Installing for dependencies:
 libaio                                                       x86_64                               0.3.109-13.el7                               base                                             24 k
 mysql-community-client                                       x86_64                               8.0.44-1.el7                                 mysql80-community                                16 M
 mysql-community-client-plugins                               x86_64                               8.0.44-1.el7                                 mysql80-community                               3.5 M
 mysql-community-common                                       x86_64                               8.0.44-1.el7                                 mysql80-community                               667 k
 mysql-community-icu-data-files                               x86_64                               8.0.44-1.el7                                 mysql80-community                               2.3 M
 mysql-community-libs                                         x86_64                               8.0.44-1.el7                                 mysql80-community                               1.5 M

Transaction Summary
======================================================================================================================================================================================================
Install  1 Package (+6 Dependent packages)

Total size: 89 M
Installed size: 417 M
Downloading packages:
warning: /var/cache/yum/x86_64/7/mysql80-community/packages/mysql-community-server-8.0.44-1.el7.x86_64.rpm: Header V4 RSA/SHA256 Signature, key ID a8d3785c: NOKEY
Retrieving key from file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql-2022
Retrieving key from file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql


The GPG keys listed for the "MySQL 8.0 Community Server" repository are already installed but they are not correct for this package.
Check that the correct key URLs are configured for this repository.


 Failing package is: mysql-community-server-8.0.44-1.el7.x86_64
 GPG Keys are configured as: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql-2022, file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
```
## 4. 报错重新安装(关键一步)
```bash
# 再次尝试安装（加上 --nogpgcheck 临时跳过校验，确保安装成功）
yum install -y mysql-community-server --nogpgcheck
```
## 5. 安装成功后验证
安装完成后，用以下命令确认核心包已安装：
```bash
rpm -qa | grep mysql-community-server
# 若输出类似 mysql-community-server-8.0.44-1.el7.x86_64，则表示安装成功，之后即可启动
```
## 6. 启动MySQL服务
安装完成后，启动MySQL服务：
```bash
systemctl start mysqld
# 确认服务状态
systemctl status mysqld
```
## 7. 初始密码
获取并修改初始密码
MySQL 8.0 会自动生成随机初始密码，必须先修改才能正常使用：
```bash
# 查看初始密码（密码在日志中以 "A temporary password is generated for root@localhost: " 开头）
sudo grep 'temporary password' /var/log/mysqld.log
```
示例输出：
```plaintext
2024-10-26T12:34:56.789012Z 6 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: Abc123!@#
其中 Abc123!@# 就是初始密码。
登录 MySQL 并修改密码：
```
```bash
# 登录（输入上述初始密码，注意区分大小写）
mysql -u root -p

# 修改密码（MySQL 8.0 要求密码包含大小写字母、数字和特殊字符，例如：MyNewPass@2024）
ALTER USER 'root'@'localhost' IDENTIFIED BY '你的新密码';
```

## 8. 基础安全配置（推荐）
执行官方安全脚本，优化默认配置（如禁用匿名用户、限制 root 本地登录等）：
```bash
# 执行安全脚本（会提示输入当前 root 密码）
mysql_secure_installation
```
主要步骤：
输入新密码（刚才修改的密码）
移除匿名用户（选 Y）
禁止 root 远程登录（根据需求选择，生产环境建议 Y）
移除测试数据库（选 Y）
刷新权限（选 Y）

## 9. 配置远程访问
```bash
# 登录 MySQL
mysql -u root -p

# 切换到 mysql 系统数据库
use mysql;

# 允许 root 用户从任意 IP 访问（生产环境建议限制具体 IP，例如 '192.168.1.%'）
update user set host = '%' where user = 'root';

# 刷新权限
flush privileges;

# 退出 MySQL
exit;
```
同时开放服务器防火墙 3306 端口：(阿里云没有firewall，需要配置安全组)
```bash
# 开放 3306 端口（临时生效，重启后失效）
firewall-cmd --zone=public --add-port=3306/tcp --permanent

# 重新加载防火墙规则
firewall-cmd --reload
```
（2）云服务器安全组（如阿里云、腾讯云等）：
如果服务器是云主机（阿里云 ECS、腾讯云 CVM 等），需在云平台的 安全组规则 中手动添加 入站规则：
端口：3306
来源：允许客户端 IP（或 0.0.0.0/0 允许所有，生产环境不推荐）

### 1. `wget https://dev.mysql.com/get/mysql80-community-release-el7-7.noarch.rpm`
- **作用**：从MySQL官方服务器下载适用于CentOS 7的“MySQL仓库配置包”。  
- **细节**：  
  - `wget` 是Linux的文件下载工具，用于从指定URL下载文件。  
  - 后面的URL指向MySQL官方提供的“仓库配置包”（`.rpm`格式），这个包的作用是向系统注册MySQL官方的YUM仓库地址，让系统知道从哪里下载MySQL相关的软件包。  
  - 文件名中的 `el7` 表示适用于RHEL/CentOS 7系统，`mysql80` 表示对应MySQL 8.0版本的仓库。  


### 2. `rpm -ivh mysql80-community-release-el7-7.noarch.rpm`
- **作用**：安装第一步下载的“仓库配置包”，将MySQL官方仓库添加到系统的YUM源列表中。  
- **细节**：  
  - `rpm` 是Linux的RPM包管理工具，用于安装、卸载`.rpm`格式的软件包。  
  - 选项 `-i` 表示“安装”，`-v` 表示“显示详细过程”，`-h` 表示“显示安装进度条”。  
  - 安装后，系统会在 `/etc/yum.repos.d/` 目录下生成两个配置文件（`mysql-community.repo` 和 `mysql-community-source.repo`），这两个文件定义了MySQL官方仓库的地址和启用状态，YUM工具会通过它们获取MySQL的软件包信息。  


### 3. `yum install -y mysql-community-server`
- **作用**：通过YUM工具安装MySQL服务器核心程序。  
- **细节**：  
  - `yum install` 是YUM工具的安装命令，用于从已配置的仓库中下载并安装软件。  
  - `mysql-community-server` 是MySQL服务器的核心包，包含了MySQL服务程序、基础配置文件等。  
  - 选项 `-y` 表示“自动确认所有安装提示”（无需手动输入`y`确认）。  
  - 执行该命令时，YUM会自动从第一步添加的官方仓库中下载MySQL 8.0的服务器程序，同时自动检测并安装其依赖的所有组件（如数据库运行所需的库文件等），无需手动处理依赖关系。  

