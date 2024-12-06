import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { InfraModule } from '../infra/infra.module';

@Module({
  imports: [InfraModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
