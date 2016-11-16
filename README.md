# node-middleLayer
基于nodejs的中间层
#版本
1.0.0

# [demo](http://192.168.42.234:3000/)



# API

api路径 [http://192.168.42.234:3000/](http://192.168.42.234:3000/)

## 用户
### get /user/:loginname用户信息
   示例：[http://192.168.42.234:3000/user/choukin1](http://192.168.42.234:3000/user/choukin)

### POST /user/token 验证用户token
    接收 post 参数
    accesstoken String 用户的 accessToken

## 消息通知

### get /message/count 获取未读消息数
    get 参数
    accesstoken String

### get /message/messages 获取已读和未读消息
    接收 get 参数
    accesstoken String
    mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。

### post /message/mark_all 标记全部已读
    post 参数
    accesstoken String


# License

