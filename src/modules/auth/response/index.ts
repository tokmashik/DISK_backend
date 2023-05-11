/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class UserResponce {

  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  email: string;

  @IsString()
  password: string;
}

export class AuthUserResponse {
  @ApiProperty()
  user: UserResponce

  @ApiProperty()
  @IsString()
  token: string;
}
