# 插件
使用一个插件只需要根据自己使用的平台下载对应的动态库,
将其放入`atri_bot/plugins`目录下即可

```text
atri_bot/
├── atri_bot
├── clients
│   │
│   ...
├── log
│   │
│   ...
├── plugins
│   ├── dependencies
│   │   └── dep1.dylib
│   ├── plugin1.dylib
│   ├── plugin2.dylib
│   │
│   ...
│   
└── service
    └── login.toml

```