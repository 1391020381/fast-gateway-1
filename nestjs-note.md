- [数据库](https://docs.nestjs.cn/9/techniques?id=%e6%95%b0%e6%8d%ae%e5%ba%93)

* [TypeORM](https://docs.nestjs.cn/9/recipes?id=typeorm)


#  controllers Providers  exports imports Module
1. controllers
2. Providers 是Nest的一个基本概念。 许多基本的Nest类可能被视为provider(service repository factory,helper)等等。他们可以通过 construcotor 注入依赖关系。这意味着对象可以彼此创建各种关系,并且 '连接' 对象实例的功能在很大程度上委托给 Nest运行时系统。 Provider只是一个用@Injectable() 装饰器注释的类
3. 自定义提供者  工厂提供者(useFactory)