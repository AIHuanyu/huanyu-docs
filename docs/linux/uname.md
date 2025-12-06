
::: tip uname 命令
Linux/Unix 系统中用于获取**系统内核和硬件信息**的核心工具。
:::

## 1. 选项详解
::: info -s
**含义：**内核名称（Kernel Name）  
**示例：** Linux  
**说明：** 标识操作系统内核类型，Linux 固定为 "Linux"，其他类 Unix 系统可能为 "Darwin"（macOS）、"BSD" 等
:::
::: info -n
**含义：**网络节点名（Nodename）  
**示例：** myhost.local  
**说明：** 即主机名（Hostname），通常与 /etc/hostname 文件内容一致
:::
::: info -r
**含义：**内核发布版本（Kernel Release）  
**示例：** 5.4.0-80-generic、3.10.0-1160.119.1.el7.x86_64
**说明：** 包含主版本、次版本、补丁版本及发行版定制标识（如 Ubuntu 的 -generic）
:::
::: info -v
**含义：**内核版本（Kernel Version）  
**示例：** #90-Ubuntu SMP Fri Jul 14 16:20:00 UTC 2023 、#1 SMP Tue Jun 4 14:43:51 UTC 2024
**说明：** 记录内核编译时间、构建者信息及详细版本号，用于追踪内核构建细节
:::
::: info -m
**含义：**机器硬件架构（Machine Hardware Name）  
**示例：** x86_64、arm64、aarch64  
**说明：** 标识 CPU 架构（如 x86_64、arm64、aarch64），决定软件兼容性（32位/64位）
:::
::: info -p
**含义：**处理器类型（Processor Type）  
**示例：** x86_64 或 unknown  
**说明：** 具体描述 CPU 类型（如 Intel/AMD 的细分型号），部分系统因内核配置可能返回 "unknown"
:::
::: info -i
**含义：**硬件平台（Hardware Platform）  
**示例：** x86_64 或 unknown  
**说明：** 描述硬件平台（如 PC、服务器、嵌入式设备），与 -m 高度相关但更侧重平台标识
:::
::: info -o
**含义：**操作系统名称（Operating System）  
**示例：** GNU/Linux、Darwin  
**说明：** 标识操作系统全称，Linux 通常为 "GNU/Linux"，macOS 为 "Darwin"（基于 BSD）
:::
::: info -a
**含义：**所有信息（All Information）  
**示例：** Linux myhost.local 5.4.0-80-generic #90-Ubuntu SMP Fri Jul 14 16:20:00 UTC 2023 x86_64 x86_64 GNU/Linux  
**说明：** 按上述顺序输出所有 uname 选项的信息，方便快速查看系统内核和硬件详情
:::
::: info --help
**含义：**帮助信息（Help Information）  
**说明：** 显示 uname 命令的使用说明，包括所有选项、示例及说明
:::
::: info --version
**含义：**版本信息（Version Information）  
**说明：** 显示 uname 命令的版本号，确认当前安装的工具版本
:::

## 2. 应用场景
### 2.1. 检查系统环境（确认符合要求）
比如：CentOS 7 安装 Docker 要求内核版本 ≥ 3.10
```bash
uname -r  # 输出示例：3.10.0-1160.92.1.el7.x86_64（≥3.10 即可）
```
