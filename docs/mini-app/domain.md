## 1. 开发环境
在开发环境中，小程序可以使用 localhost 或 ip 作为后端接口的域名。  
但是需要在【微信开发者工具-详情-本地设置】中勾选【不校验合法域名、web-view(业务域名)、TLS版本以及 HTTPS 证书】。

## 2. 正式环境
根据微信小程序[官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)，后端接口访问应该注意以下问题：
1. 接口调用不能使用 IP 地址（小程序的局域网 IP 除外）或 localhost；
2. 域名必须在小程序管理后台「小程序后台-管理-开发管理-服务器域名」配置；
3. 域名只支持 https (wx.request、wx.uploadFile、wx.downloadFile) 和 wss (wx.connectSocket) 协议；
4. 域名必须经过 ICP 备案；
5. 不支持配置父域名，使用子域名；