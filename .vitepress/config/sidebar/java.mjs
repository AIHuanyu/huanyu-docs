const UrlJava = "/docs/java/";
const UrlMyBatisPlus = UrlJava + "mybatis-plus/";

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
      }, {
        text: "关于MyBatisPlus",
        items: [
          {
            text: "注解TableName",
            link: UrlMyBatisPlus + "table-name.md",
          },
          {
            text: "注解TableField",
            link: UrlMyBatisPlus + "table-field.md",
          },
        ],
      }
    ],
  },
];
