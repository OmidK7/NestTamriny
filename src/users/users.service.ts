import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsersEntity } from './entities/users.entity';
import { createUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userReposiory: Repository<UsersEntity>) {}
  async findUserByNumber(Phone_number: string) {
    return await this.userReposiory.findOne({
      where: { Phone_number: Phone_number },
    });
  }

  async createUser(data: createUserDto) {
    const user = this.userReposiory.create(data);
    await this.userReposiory.save(user);
    return user;
  }
}
