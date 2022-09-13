# 配置

- 外部定义的环境变量 通过 process.env global 在 Node.js 内部可见
- 在 Node.js 应用程序中,通常使用 .env 文件,其中包含键值对,其中每个键代表一个特定的值,以代表每个环境。在不同的环境中运行应用程序仅是交换正确的.env 文件的问题。

- @nestjs/config
