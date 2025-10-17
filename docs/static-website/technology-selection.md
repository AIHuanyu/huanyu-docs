# 技术选型
技术变动：Hexo → VitePress、GithubPage → Vercel
## 1. 为什么选择 VitePress
Hexo作为专注于博客/内容站点的静态生成器，虽支持标签、分类等基础功能，更适合单篇博客的独立发布，但在系统性知识体系的构建上存在局限；而VitePress侧重技术文档与知识库场景，更契合个人技术知识的系统化梳理需求。

此外，VitePress采用更现代的技术架构，灵活性更强，其技术栈与实际项目的技术体系一致，能有效降低开发与维护的学习成本。

## 2. 为什么选择Vercel
1. Vercel与 Git 仓库深度联动，支持 “推送即部署”，而且配置简单；
2. 国内访问Github Page存在网络延迟问题，而Vercel访问速度更快。

## 3. 快速搭建部署
1. 在GitHub创建一个新的仓库huanyu-docs，用于存储VitePress项目的代码。
2. 克隆huanyu-docs仓库到本地，使用VitePress初始化项目：
```bash
npm add -D vitepress@next
npx vitepress init
```
3. 配置VitePress项目，包括修改config.mjs文件、添加Markdown文档等。
4. 推送本地代码到GitHub仓库：
5. 在Vercel上创建一个新的项目，链接到huanyu-docs仓库。
6. Vercel会自动检测到项目类型为VitePress，并进行配置。
7. 部署完成后，即可在Vercel上访问到搭建的静态网站。
> 注意：Vercel项目配置时注意打包命令和输出目录；
## 4. 域名绑定
1. 在Vercel项目设置中，找到“Domains”选项，添加域名，添加域名后，Vercel会为该域名分配一个IP地址和CNAME记录。
2. 在域名服务商管理后台配置DNS记录，将域名指向Vercel分配的IP地址和CNAME记录。
3. 等待DNS记录生效，即可通过域名访问静态网站，当前可以通过`www.aihuanyu.space`和`aihuanyu.space`访问。

> 注意：之前域名解析记录配置的IP和CNAME是固定的，现在改为指向Vercel分配的IP地址和CNAME记录，否则在Vercel配置页面会有警告建议。



