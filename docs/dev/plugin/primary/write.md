# 编写插件

## 定义插件结构
首先, 定义一个结构体(struct)或枚举(enum)作为插件的结构
```rust
#[atri_plugin::plugin(name = "MyAwesomePlugin")]
struct MyPlugin {
    listener: Option<ListenerGuard>,
}
```

::: details 宏的使用
每个插件都需要使用宏来标记, 且只能标记一个结构作为插件
```rust
#[atri_plugin::plugin(name = "MyAwesomePlugin")] // [!code focus]
struct MyPlugin {
    listener: Option<ListenerGuard>,
}
```
参数`name`为插件名称, 若没有指定插件名, 则默认插件名为`Struct_plugin`
如上述插件不指定名称则为`MyPlugin_plugin`
:::

## 为插件结构实现`Plugin`
```rust
use atri_plugin::Plugin;
impl Plugin for MyPlugin {
    //...
}
```

## 一个简单的插件示例
```rust
use atri_plugin::Plugin;

#[atri_plugin::plugin(name = "MyAwesomePlugin")]
struct MyPlugin {
    listener: Option<ListenerGuard>,
}

impl Plugin for MyPlugin {
    fn new() -> Self {
        Self { listener: None }
    }
    
    fn enable(&mut self) {
        info!("Enable my plugin");

        let guard = Listener::listening_on_always(|e: GroupMessageEvent| async move {
            let message = e.message();
            if message.to_string() == "123" {
                let mut chain = MessageChainBuilder::new();
                chain.push_str("321")
                    .push_str("114514");
                let _ = e.group().send_message(chain.build()).await;
            }
        });
        self.listener = Some(guard);
    }

    fn disable(&mut self) {
        info!("Disable my plugin");
    }
}
```