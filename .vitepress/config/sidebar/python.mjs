const UrlDocs = "/docs/python/";
export default [
  {
    text: "Python文档库",
    items: [
      {
        text: "你好, Python",
        collapsed: false,
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
        collapsed: false,
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
        collapsed: false,
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
        collapsed: false,
        items: [
          {
            text: "理解面向对象",
            link: UrlDocs + "/oop",
          },
          {
            text: "抽象性",
            link: UrlDocs + "/oop/abstract",
          },
          {
            text: "封装性",
            link: UrlDocs + "/oop/encapsulation",
          },
          {
            text: "继承性",
            link: UrlDocs + "/oop/inheritance",
          },
          {
            text: "多态性",
            link: UrlDocs + "/oop/polymorphism",
          },
        ],
      },
      {
        text: "异常处理",
        collapsed: false,
        items: [
          {
            text: "常见异常",
            link: UrlDocs + "/exception/common-exceptions",
          },
          {
            text: "堆栈跟踪traceback",
            link: UrlDocs + "/exception/traceback",
          },
          {
            text: "异常处理try/except",
            link: UrlDocs + "/exception/try-except",
          },
          {
            text: "资源管理with/as",
            link: UrlDocs + "/exception/with-as",
          },
        ],
      },
      {
        text: "文件访问",
        collapsed: false,
        items: [
          {
            text: "文件概述",
            link: UrlDocs + "/file/file-overview",
          },
          {
            text: "文件函数",
            link: UrlDocs + "/file/file-functions",
          },
          {
            text: "访问模式",
            link: UrlDocs + "/file/access-modes",
          },
        ],
      },
      {
        text: "模块与包",
        collapsed: false,
        items: [
          {
            text: "模块",
            link: UrlDocs + "/module/module",
          },
          {
            text: "包",
            link: UrlDocs + "/module/package",
          },
          {
            text: "pip",
            link: UrlDocs + "/module/pip",
          },
        ],
      },
      {
        text: "MySQL",
        collapsed: false,
        items: [
          {
            text: "CRUD",
            link: UrlDocs + "/mysql/crud",
          },
          {
            text: "安全实践",
            link: UrlDocs + "/mysql/security",
          },
        ],
      },
      {
        text: "GUI",
        collapsed: false,
        items: [
          {
            text: "理解GUI",
            link: UrlDocs + "/gui",
          },
        ],
      },
    ],
  },
];
