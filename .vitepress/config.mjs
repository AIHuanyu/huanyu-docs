import { defineConfig } from "vitepress";

const UrlStaticWebsite = "/docs/static-website/";
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
      { text: "Home", link: "/" },
      { text: "静态网站", link: UrlStaticWebsite + "technology-selection" },
    ],

    sidebar: [
      {
        text: "静态网站",
        items: [
          { text: "技术选型", link: UrlStaticWebsite + "technology-selection" },
          { text: "域名解析", link: UrlStaticWebsite + "dns" },
        ],
      },
      {
        text: "静态网站",
        items: [
          { text: "技术选型", link: UrlStaticWebsite + "technology-selection" },
          { text: "域名解析", link: UrlStaticWebsite + "dns" },
        ],
      },
    ],
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/AIHuanyu" }],
  },
});
