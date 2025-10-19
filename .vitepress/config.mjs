import { defineConfig } from "vitepress";

const UrlStaticWebsite = "/docs/static-website/";
const UrlHuanyu = "/docs/huanyu/";
const UrlGisshow = "/docs/gisshow/";

export default defineConfig({
  title: "AI寰宇空间",
  description: "寰宇无界，AI 无限 —— AI寰宇空间，分享个人技术与思考",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lastUpdated: true,
  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "静态网站", link: UrlStaticWebsite + "technology-selection" },
    ],
    sidebar: {
      "/docs/gisshow/": [
        {
          text: "GisShow(集思秀)",
          items: [
            {
              text: "什么是gisshow?",
              link: UrlGisshow,
            },
          ],
        },
      ],
      "/docs/huanyu/": [
        {
          text: "huanyu",
          items: [
            {
              text: "什么是huanyu?",
              link: UrlHuanyu,
            },
            {
              text: "快速开始",
              link: UrlHuanyu + "getting-started",
            },
          ],
        },
      ],
      "/docs/static-website/": [
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
      ],
    },
    lastUpdated: {
      text: "最后更新时间",
      formatOptions: {
        year: "numeric", // 数字格式的年（2025）
        month: "2-digit", // 两位数的月（10）
        day: "2-digit", // 两位数的日（20）
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/AIHuanyu" }],
  },
});
