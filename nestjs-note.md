- [HTTP 模块](https://docs.nestjs.cn/9/techniques?id=http-%e6%a8%a1%e5%9d%97)

* 使用了 alias @ 正常情况下也是不会被 TS 项目识别,需要在 tsconfig.json 配置文件中添加 path 参数

```
{
    "compilerOptions":{
        "paths":{
            "@/*":[
                "src/*"
            ]
        }
    }
}

```

- [飞书开放接口 SDK](https://github.com/larksuite/node-sdk/blob/main/README.zh.md)

* [高速缓存](https://docs.nestjs.cn/9/techniques?id=%e9%ab%98%e9%80%9f%e7%bc%93%e5%ad%98%ef%bc%88caching%ef%bc%89)

* 缓存是一项伟大而简单的技术,可以帮助提高应用程序的性能。它充当临时数据存储,提供高性能的数据访问。

* npm install cache-manager
* npm install -D @types/cache-manager

* Nest 为各种缓存存储提供了统一的 API.
* 内置的是内存中的数据存储。
* 但是 可以轻松切换到更全面的解决方案,比如 Redis。
* 为了启用缓存,首先导入 CacheModule 并调用它的 register 方法
* 为了和缓存管理器实例进行交互,需要使用 CACHE_MANAGER 标记将其注入到你的类中
* CACHE_MANAGER 则是从@nestjs/common 包中导入的。
