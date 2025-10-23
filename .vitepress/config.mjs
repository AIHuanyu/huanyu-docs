import { defineConfig } from "vitepress";
import miniappSidebar from "./config/sidebar/miniapp.mjs";
import gisshowSidebar from "./config/sidebar/gisshow.mjs";
import huanyuSidebar from "./config/sidebar/huanyu.mjs";
import websiteSidebar from "./config/sidebar/website.mjs";
import JavaScriptSidebar from "./config/sidebar/javascript.mjs";

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
      { text: "JavaScript", link: "/docs/javascript/short-circuit" },
      { text: "小程序", link: "/docs/mini-app/" },
      { text: "网站搭建", link: "/docs/website/technology-selection" },
    ],
    sidebar: {
      "/docs/mini-app/": miniappSidebar,
      "/docs/gisshow/": gisshowSidebar,
      "/docs/huanyu/": huanyuSidebar,
      "/docs/website/": websiteSidebar,
    },
    lastUpdated: {
      text: "最后更新时间",
      formatOptions: {
        dateStyle: "long",
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/AIHuanyu" }],
  },
});
