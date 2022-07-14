import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { usersProviders } from './user.provider';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, ...usersProviders],
})
export class UserModule {}