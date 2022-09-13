# 配置

- 外部定义的环境变量 通过 process.env global 在 Node.js 内部可见
- 在 Node.js 应用程序中,通常使用 .env 文件,其中包含键值对,其中每个键代表一个特定的值,以代表每个环境。在不同的环境中运行应用程序仅是交换正确的.env 文件的问题。

- @nestjs/config

# Module

- 每个 Nest 应用程序至少有一个模块,即根模块。
- 根模块是 Nest 开始安排应用程序树的地方。

- providers 由 Nest 注入器实例化的提供者,并且可以至少在整个模块中共享

* controllers 必须创建的一组控制器
* imports 导入模块的列表,这些模块导出了此模块中所需提供者 例如在 根模块 import ConfigModule 然后在 ConfigService 在其他构造函数中注入
* 由本模块提供并应在其他模块中可用的提供者子集。

# API 多版本

- 接口版本 仅仅使用以 HTTP 构建的应用程序

* URI 版本类型
