const UrlStaticWebsite = "/docs/static-website/";
export default [
  {
    text: "静态网站",
    items: [
      {
        text: "搭建部署",
        // link: UrlStaticWebsite + "technology-selection",
        items: [
          {
            text: "技术选型",
            link: UrlStaticWebsite + "technology-selection",
          },
          { text: "域名解析", link: UrlStaticWebsite + "dns" },
          { text: "YAML 语言", link: UrlStaticWebsite + "yaml" },
          { text: "Frontmatter", link: UrlStaticWebsite + "frontmatter" },
          { text: "SSL与TLS", link: UrlStaticWebsite + "tls" },
          { text: "服务器", link: UrlStaticWebsite + "esc" },
        ],
      },
      {
        text: "VitePress改造",
        // link: UrlStaticWebsite + "technology-selection",
        items: [
          {
            text: "增加创建日期",
            link: UrlStaticWebsite + "vitepress-createddate",
          },
          {
            text: "增加文章标题",
            link: UrlStaticWebsite + "vitepress-title",
          },
        ],
      },
    ],
  },
];
