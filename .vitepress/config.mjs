import { defineConfig } from "vitepress";
import miniappSidebar from "./config/sidebar/miniapp.mjs";
import gisshowSidebar from "./config/sidebar/gisshow.mjs";
import huanyuSidebar from "./config/sidebar/huanyu.mjs";
import websiteSidebar from "./config/sidebar/website.mjs";
import javaScriptSidebar from "./config/sidebar/javascript.mjs";
import linuxSidebar from "./config/sidebar/linux.mjs";
import designSidebar from "./config/sidebar/design.mjs";
import pythonSidebar from "./config/sidebar/python.mjs";
import javaSidebar from "./config/sidebar/java.mjs";

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
    logo: "/aihuanyu.space-logo-small.svg",
    nav: [
      { text: "主页", link: "/" },
      { text: "JavaScript", link: "/docs/javascript" },
      { text: "Python", link: "/docs/python" },
      { text: "Java", link: "/docs/java" },
      { text: "小程序", link: "/docs/mini-app" },
      { text: "Linux", link: "/docs/linux" },
      { text: "软件设计", link: "/docs/design" },
      { text: "网站搭建", link: "/docs/website" },
    ],
    sidebar: {
      "/docs/mini-app/": miniappSidebar,
      "/docs/gisshow/": gisshowSidebar,
      "/docs/huanyu/": huanyuSidebar,
      "/docs/website/": websiteSidebar,
      "/docs/javascript/": javaScriptSidebar,
      "/docs/linux/": linuxSidebar,
      "/docs/design/": designSidebar,
      "/docs/python/": pythonSidebar,
      "/docs/java/": javaSidebar,
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
