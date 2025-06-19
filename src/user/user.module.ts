import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './repositories/user.repositories';
import { EncryptService } from 'src/utils/service/encrypt.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, EncryptService]
})
export class UserModule {}
