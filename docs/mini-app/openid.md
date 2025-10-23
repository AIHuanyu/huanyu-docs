---
date: 2025-10-18
---
## 1. 基本流程
- 前端调用wx.login接口获取code，将code发送给后端；
- 后端调用code2Session，根据code获取openid和session_key；

## 2. wx.login接口
[wx.login](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html)用于前端获取登录凭证（code）。
在小程序初始化（app.js 的 onLaunch 生命周期）时自动获取 code，用于实现 “打开小程序即登录” 的无感体验，无需用户手动触发。
```js
// app.js
App({
  onLaunch() {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
            url: 'https://example.com/onLogin',
            data: {
                code: res.code
            }
        })
      }
    })
  },
})
```
## 3. code2Session接口
[code2Session](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html)用于后端根据code获取openid和session_key。
```
https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
```
请求参数
| 参数 | 类型 | 是否必填 | 描述 |
| --- | --- | --- | --- |
| appid | string | 是 | 小程序appid |
| secret | string | 是 | 小程序appsecret |
| js_code | string | 是 | 登录时获取的code |
| grant_type | string | 是 | 默认：authorization_code |

成功时返回参数
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| openid | string | 用户唯一标识 |
| session_key | string | 会话密钥 |
| unionid | string | 当且仅当该小程序已绑定到微信开放平台账号时返回 |

错误时返回参数
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| errcode | number | 错误码 |
| errmsg | string | 错误信息 |

::: info
微信开放平台（访问地址为：https://open.weixin.qq.com），为开发者提供将移动应用、网站应用、小程序、小游戏、公众号、服务号、微信小店、联盟带货机构、小店带货助手账号绑定到同一个开放平台后可获得 unionid 实现将用户身份关联的功能。
:::
