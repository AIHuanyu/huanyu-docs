const UrlWebsite = "/docs/website/";
export default [
  {
    items: [
      {
        text: "网站基础知识",
        items: [
          { text: "域名解析", link: UrlWebsite + "dns" },
          { text: "SSL与TLS", link: UrlWebsite + "tls" },
          { text: "服务器", link: UrlWebsite + "server" },
          { text: "ICP备案", link: UrlWebsite + "icp" },
        ],
      },
      {
        text: "VitePress使用",
        // link: UrlWebsite + "technology-selection",
        items: [
          {
            text: "VitePress部署",
            link: UrlWebsite + "vitepress-deployment",
          },
          { text: "YAML 语言", link: UrlWebsite + "yaml" },
          { text: "Frontmatter", link: UrlWebsite + "frontmatter" },
          {
            text: "增加创建日期",
            link: UrlWebsite + "vitepress-createddate",
          },
          {
            text: "增加文章标题",
            link: UrlWebsite + "vitepress-title",
          },
        ],
      },
      {
        text: "服务器部署",
        items: [
          {
            text: "安装MySQL",
            link: UrlWebsite + "install-mysql",
          },
          {
            text: "安装Java",
            link: UrlWebsite + "install-java",
          },
          {
            text: "安装Nginx",
            link: UrlWebsite + "install-nginx",
          },
        ],
      },
    ],
  },
];
