# 异常过滤器

- 内置的异常过滤器负责处理整个应用程序中所抛出的异常。当捕获到未处理的异常时,最终用户将收到友好的响应。
- 开箱即用,此操作由内置的全局异常过滤器执行,该过滤器处理类型 HttpException(及其子类)的异常。
- 每个发生的异常都由异常过滤器处理,当这个异常无法被识别时(既不是 HttpException 也不是继承的类 HttpException),用户将收到以下 json { statusCode：500,messge:'Internal server error'}
