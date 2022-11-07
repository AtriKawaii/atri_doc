# 配置登录信息

登录配置文件位于`atri_bot/service/login.toml`,
本配置文件示例:
```toml
# 默认的'协议'
# 可使用 IPAD/AndroidPhone/AndroidWatch/MacOS/QiDian
default_protocol = 'IPAD'

[[client]]
account = 123456

# 可配置多个Client
[[client]]
# Bot的账号(必须)
account = 114514
# Bot的密码, 此为可选, token登陆失败会自动尝试密码登陆
password = '1919810'
# Bot的'协议'
protocol = 'AndroidWatch'
# 是否自动登陆(默认true)
auto_login = true
```

::: details 为什么密码不是必须的?
一个账号可以通过之前登录使用的信息来进行自动登录,
密码只是用于Token登录失败后尝试登录
:::

## 登录协议
可使用 IPAD/AndroidPhone/AndroidWatch/MacOS/QiDian
其中前四者可共存, 若想同时在手机和AtriBot上登录账号可自行调整协议