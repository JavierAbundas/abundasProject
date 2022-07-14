import {
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Body,
  Post,
  Delete,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';

@Controller('hello')
export class AppController {
  constructor(@Inject('HELLO_SERVICE') private client: ClientProxy) {}

  @Get('get/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.client.send({ cmd: 'userId' }, id);
  }

  @Get()
  getUsers() {
    return this.client.send({ cmd: 'users' }, 1);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDTO,
  ) {
    return this.client.send({ cmd: 'updateUser' }, 1);
  }

  @Post()
  createUser(@Body() user: CreateUserDTO) {
    return this.client.send({ cmd: 'createUser' }, 1);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.client.send({ cmd: 'deleteUser' }, 1);
  }
}
