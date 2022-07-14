import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { CreateUserDTO } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async getUser(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail({ where: { id } });
      return user;
    } catch (err) {
      throw err;
    }
  }

  async getUsers(): Promise<any[]> {
    return await this.userRepository.find();
  }

  async update(id: number, updateUserDto: UpdateUserDTO): Promise<any> {
    return await this.userRepository.update({ id: id }, updateUserDto);
  }

  async createUser(user: CreateUserDTO): Promise<User> {
    const newUser = await this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async deleteUser(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }
}
