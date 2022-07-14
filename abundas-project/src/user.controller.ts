import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { CreateUserDTO } from './dto/createUser.dto';
import { User } from './user.entity';
import { MessagePattern } from '@nestjs/microservices';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @MessagePattern({ cmd: 'userId' })
  async getUserById(id: number): Promise<any> {
    return await this.userService.getUser(id);
  }

  @MessagePattern({ cmd: 'users' })
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @MessagePattern({ cmd: 'updateUser' })
  async updateUser(id: number, updateUserDto: UpdateUserDTO): Promise<Boolean> {
    return await this.userService.update(id, updateUserDto);
  }

  @MessagePattern({ cmd: 'createUser' })
  async createUser(user: CreateUserDTO): Promise<User> {
    return await this.userService.createUser(user);
  }

  @MessagePattern({ cmd: 'deleteUser' })
  async deleteUser(id: number): Promise<Boolean> {
    return await this.userService.deleteUser(id);
  }
}
