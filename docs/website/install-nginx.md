通过 Nginx 官方 YUM 源安装（推荐）
1. 添加 Nginx 官方源
bash
# 创建 Nginx 源配置文件
```bash
sudo vi /etc/yum.repos.d/nginx.repo
```
粘贴以下内容（适用于 CentOS 7）：
```ini
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```
保存退出（Esc → :wq）。
2. 安装 Nginx
bash
# 安装 Nginx
sudo yum install -y nginx
3. 启动 Nginx 并设置开机自启
bash
# 启动 Nginx 服务
sudo systemctl start nginx

# 设置开机自启
sudo systemctl enable nginx

# 检查服务状态（确保显示 active (running)）
sudo systemctl status nginx
4. 验证安装

打开浏览器访问服务器 IP（如 http://你的服务器IP），若看到 Nginx 默认欢迎页（"Welcome to nginx!"），说明安装成功。
::: warn
记得在防火墙开放 80 端口，否则无法访问。
:::