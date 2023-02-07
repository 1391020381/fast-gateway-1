# 异常过滤器

- 内置的异常过滤器负责处理整个应用程序中所抛出的异常。当捕获到未处理的异常时,最终用户将收到友好的响应。
- 开箱即用,此操作由内置的全局异常过滤器执行,该过滤器处理类型 HttpException(及其子类)的异常。
- 每个发生的异常都由异常过滤器处理,当这个异常无法被识别时(既不是 HttpException 也不是继承的类 HttpException),用户将收到以下 json { statusCode：500,messge:'Internal server error'}

## 自定义异常

- 如果确实需要创建自定义的异常,则最好创建自己的异常层次结构,其中自定义异常继承自 HttpException 基类。
- 使用这种方法,Nest 可以识别你的异常,并自动处理错误响应。

## 绑定过滤器

- @UseFilters 绑定到 某个 Controller 的一个路由和方法上
- 异常过滤器的作用域可以划分为不同的级别: 方法范围 控制器范围 全局范围

* @UseFilters(new HttpExceptionFilter())
* app.useGlobalFilters(new HttpExceptionFilter())



# Fastify 
* Fastify 非常适合这里 因为它以与 express类似的方式解决设计问题。然而 fastify的速度快得多,达到几乎两倍的基准测试结果。
* express是应用广泛 广为认知的 而且拥有一套庞大的兼容中间件。
* Nest 提供框架独立性
* Nest使用Fastify作为http提供程序。 依赖Express的每个配方都不能起作用。需要改为Fastify等效程序包。

# 拦截器
1. 函数执行之前/之后绑定额外的逻辑
2. 转换从函数返回的结果
3. 转换从函数抛出的异常
4. 拓展基本函数行为
5. 根据所选条件完全重写函数