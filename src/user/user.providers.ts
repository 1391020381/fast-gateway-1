import { User } from './user.mongo.entity';
/**
 * 工厂提供者(useFactory)
 * useFactory语法允许动态创建提供程序。
 * 实工厂函数的返回实际的provider。
 * https://docs.nestjs.cn/9/fundamentals?id=%e5%bc%82%e6%ad%a5%e6%8f%90%e4%be%9b%e8%80%85
 */
export const UserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: async (AppDataSource) =>
      await AppDataSource.getRepository(User),
    inject: ['MONGODB_DATA_SOURCE'],
  },
];
