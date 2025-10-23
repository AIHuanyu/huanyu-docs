const UrlWebsite = "/docs/website/";
export default [
  {
    items: [
      {
        text: "基础知识",
        items: [
          {
            text: "技术选型",
            link: UrlWebsite + "technology-selection",
          },
          { text: "域名解析", link: UrlWebsite + "dns" },
          { text: "YAML 语言", link: UrlWebsite + "yaml" },
          { text: "Frontmatter", link: UrlWebsite + "frontmatter" },
          { text: "SSL与TLS", link: UrlWebsite + "tls" },
          { text: "服务器", link: UrlWebsite + "server" },
        ],
      },
      {
        text: "VitePress改造",
        // link: UrlWebsite + "technology-selection",
        items: [
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
    ],
  },
];
