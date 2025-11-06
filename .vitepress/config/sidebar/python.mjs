const UrlDocs = "/docs/python/";
export default [
  {
    text: "Python文档库",
    items: [
      {
        text: "你好, Python",
        collapsed: true,
        items: [
          {
            text: "遥遥领先",
            link: UrlDocs + "/overview/tiobe",
          },
          {
            text: "关于Python",
            link: UrlDocs + "/overview/about",
          },
          {
            text: "安装Python双版本",
            link: UrlDocs + "/overview/install",
          },
          {
            text: "Python2安装软件",
            link: UrlDocs + "/overview/python2",
          },
        ],
      },
      {
        text: "Python基础",
        collapsed: true,
        items: [
          {
            text: "注释、标识符、关键字",
            link: UrlDocs + "/basic/comment",
          },
          {
            text: "变量",
            link: UrlDocs + "/basic/variable",
          },
          {
            text: "代码缩进",
            link: UrlDocs + "/basic/indent",
          },
          {
            text: "基本数据类型",
            link: UrlDocs + "/basic/basic-data-types",
          },
          {
            text: "高级数据类型",
            link: UrlDocs + "/basic/advanced-data-types",
          },
          {
            text: "运算符",
            link: UrlDocs + "/basic/operator",
          },
          {
            text: "流程控制",
            link: UrlDocs + "/basic/control-flow",
          },
        ],
      },
      {
        text: "函数",
        collapsed: true,
        items: [
          {
            text: "函数基础",
            link: UrlDocs + "/function/basic-function",
          },
          {
            text: "匿名函数",
            link: UrlDocs + "/function/anonymous-function",
          },
          {
            text: "高阶函数",
            link: UrlDocs + "/function/higher-order-function",
          },
        ],
      },
      {
        text: "面向对象",
        collapsed: true,
        items: [
          {
            text: "理解面向对象",
            link: UrlDocs + "/04/01",
          },
          {
            text: "抽象性",
            link: UrlDocs + "/04/02",
          },
          {
            text: "封装性",
            link: UrlDocs + "/04/03",
          },
          {
            text: "继承性",
            link: UrlDocs + "/04/04",
          },
          {
            text: "多态性",
            link: UrlDocs + "/04/05",
          },
        ],
      },
      {
        text: "异常处理",
        collapsed: true,
        items: [
          {
            text: "常见异常",
            link: UrlDocs + "/05/01",
          },
          {
            text: "堆栈跟踪traceback",
            link: UrlDocs + "/05/02",
          },
          {
            text: "异常处理try/except",
            link: UrlDocs + "/05/03",
          },
          {
            text: "资源管理with/as",
            link: UrlDocs + "/05/04",
          },
        ],
      },
      {
        text: "文件访问",
        collapsed: true,
        items: [
          {
            text: "文件概述",
            link: UrlDocs + "/06/01",
          },
          {
            text: "文件函数",
            link: UrlDocs + "/06/02",
          },
          {
            text: "访问模式",
            link: UrlDocs + "/06/03",
          },
        ],
      },
      {
        text: "模块与包",
        collapsed: true,
        items: [
          {
            text: "模块",
            link: UrlDocs + "/07/01",
          },
          {
            text: "包",
            link: UrlDocs + "/07/02",
          },
          {
            text: "pip",
            link: UrlDocs + "/07/03",
          },
        ],
      },
      {
        text: "MySQL",
        collapsed: true,
        items: [
          {
            text: "CRUD",
            link: UrlDocs + "/08/01",
          },
          {
            text: "安全实践",
            link: UrlDocs + "/08/02",
          },
        ],
      },
      {
        text: "GUI",
        collapsed: true,
        items: [
          {
            text: "理解GUI",
            link: UrlDocs + "/09/01",
          },
        ],
      },
    ],
  },
];
