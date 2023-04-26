import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './DTO';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-user')
  createUsers(@Body() dto: CreateUserDTO) {
    //console.log(dto);
    return this.userService.createUser(dto);
  }
}
