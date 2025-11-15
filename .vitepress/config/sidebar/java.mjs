const UrlJava = "/docs/java/";

export default [
  {
    text: "Java文档库",
    items: [
      {
        text: "关于Maven",
        items: [
          {
            text: "Setting文件",
            link: UrlJava + "maven-setting.md",
          },
          {
            text: "常见解决方式",
            link: UrlJava + "maven-solution.md",
          },
        ],
      }, {
        text: "关于MyBatis",
        items: [
          {
            text: "模糊查询",
            link: UrlJava + "like.md",
          }
        ],
      },
    ],
  },
];
