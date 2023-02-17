import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/common/database/database.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserProviders } from './user.providers';
/**
 *  providers 由Nest注入器实例化的提供者,并且可以至少在整个模块中共享
 *  controllers 必须创建的一组控制器
 *  imports 倒入模块的类表,这些模块导出了此模块中所需提供者
 *  exports 由本模块提供并应在其他模块中可用的提供者的子集。
 */
@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
  exports: [UserService],
})
export class UserModule {}
