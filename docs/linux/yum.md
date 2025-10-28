---
date: 2025-09-28
---
yum 是 Linux 系统（主要是 RHEL、CentOS、Fedora 等 RPM 包管理系）的软件包管理工具，全称为 Yellowdog Updater, Modified，核心作用是自动下载、安装、升级、卸载软件，同时解决软件间的依赖关系。

## 1. 常用命令
```bash
# 安装软件
yum install <package-name>

# 升级软件
yum update <package-name>

# 卸载软件
yum remove <package-name>

# 搜索软件
yum search <keyword>

# 显示软件信息
yum info <package-name>
```


### 总结
这三条命令的逻辑链是：  
**下载官方仓库配置包 → 安装配置包（注册仓库） → 通过YUM从官方仓库安装MySQL服务器**  
通过这种方式安装的MySQL，能保证版本为官方最新稳定版，且后续可通过`yum update`直接升级，比手动下载安装包更简单、可靠。

直接执行第三步 `yum install -y mysql-community-server` 通常**不可以**，前两步的核心作用是给系统“指明MySQL官方软件包的来源”，否则YUM工具根本找不到要安装的 `mysql-community-server` 包。

这个问题问得特别关键，它刚好戳中了YUM工具的工作逻辑——YUM不是“凭空”能找到所有软件，必须依赖预先配置好的“软件仓库（Repo）”，前两步就是在完成这个“仓库配置”的核心动作。

### 1. 先搞懂：YUM是怎么找到软件的？
YUM工具安装软件的前提，是系统中已经配置了包含该软件的“仓库地址”。  
- 系统默认的YUM仓库（如CentOS官方基础仓库）里，**没有 `mysql-community-server` 这个包**——因为CentOS默认预装的是MySQL的分支（MariaDB），官方基础仓库里只提供MariaDB的安装包（如 `mariadb-server`），而非MySQL官方的 `mysql-community-server`。  
- 如果你直接执行第三步，YUM会去默认仓库里找 `mysql-community-server`，结果只会报错“找不到该包”（类似 `No package mysql-community-server available`），无法继续安装。

### 2. 前两步的本质：给YUM“添加MySQL官方仓库”
前两步的操作，本质是把“MySQL官方软件仓库”注册到系统的YUM配置里，让YUM知道“去哪里下载MySQL官方的包”：
- **第一步 `wget 下载.rpm`**：下载的是MySQL官方提供的“仓库配置包”（不是MySQL服务器本身），这个包里装的是“MySQL官方仓库的地址、校验信息”等配置内容。  
- **第二步 `rpm -ivh 安装.rpm`**：把这个“仓库配置包”安装到系统中，会在 `/etc/yum.repos.d/` 目录下生成两个关键配置文件（`mysql-community.repo` 和 `mysql-community-source.repo`）。  
- 这两步做完后，系统的YUM工具就会“认识”MySQL官方仓库了——后续执行第三步时，YUM会去这个新添加的官方仓库里，找到 `mysql-community-server` 包及其依赖，才能顺利安装。

### 3. 特殊情况：如果系统已有MySQL仓库，前两步可省吗？
只有一种极端情况可以跳过前两步：你的系统之前已经手动配置过MySQL官方仓库（比如别人帮你装过，或你自己之前配过）。  
但对于绝大多数“新服务器”或“未配置过MySQL仓库”的系统，前两步是必须的——否则YUM没有MySQL官方包的来源，第三步根本无法执行。


要不要我帮你整理一份**“YUM仓库配置与问题排查指南”**？里面会包含“如何查看系统已有的仓库”“找不到包时的排查步骤”等内容，帮你更清晰地理解YUM的工作逻辑，避免后续安装软件时踩类似的坑。