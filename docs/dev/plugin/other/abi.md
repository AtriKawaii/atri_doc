# 关于插件ABI

目前ABI尚未稳定, 若有ABI变动将会在Release进行说明

预计在v1.0稳定插件ABI

::: warning
所有插件使用到的函数/结构体进行ABI变动时都应重新编译插件,
否则有可能会出现内存错误导致AtriPlugin被直接终止
:::