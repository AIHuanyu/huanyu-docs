## 1. wget 命令
wget 是一款开源的命令行下载工具，名称来源于 "World Wide Web" 和 "get" 的组合, 最初由 Hrvoje Nikšić开发，隶属于 GNU 项目，支持 HTTP、HTTPS、FTP 等多种协议，能够在不同操作系统（Linux、macOS、Windows）上稳定运行。与图形化下载工具（如浏览器下载、迅雷等）相比，wget 最大的特点在于无界面交互 —— 所有操作通过命令参数控制，这使得它可以轻松集成到 Shell 脚本中，实现下载任务的自动化；同时，它还具备断点续传、批量下载、后台运行、限速下载等实用功能，尤其适合处理大文件或长时间的下载任务。

## 2. 基本语法
```bash
wget [选项] [URL]
```
- 选项参数：可根据需求组合使用，支持短参数（如-c）和长参数（如--limit-rate）。
- 目标资源URL：支持单个链接或批量链接列表（需配合-i参数）。
- 顺序建议：参数在前，URL 在后，提高命令可读性。
### 2.1 基础下载参数
| 参数 | 全称 / 功能说明 | 示例命令 |
| --- | --- | --- |
| -O <文件名> | Output，指定下载文件的保存名称（避免重名）| wget -O vue-source.zip https://github.com/vuejs/core/archive/v3.4.21.zip |
| -P <路径> | Directory-prefix，指定文件保存目录（自动创建）| wget -P /home/downloads https://example.com/files/example.zip |
| -q | Quiet，安静模式（不显示下载进度）| wget -q https://example.com/small-file.txt |
| -v | Verbose，详细模式（显示完整日志，用于排查）| wget -v https://example.com/files/example.zip |
