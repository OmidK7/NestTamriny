import { HttpException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from 'src/users/users.service';
import bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
 constructor(
  private readonly usersService: UsersService
 ){}

  async register(registerDto:RegisterDto){
    const user = await this.usersService.findUserByNumber(registerDto.Phone_number);
    if(user){
      throw new HttpException('user already exists', 400);
    }
    registerDto.password = await bcrypt.hash(registerDto.password , 10);
    return await this.usersService.createUser(registerDto);
 }

 login(){

 }
}
