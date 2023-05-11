/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO, UpdateUserDTO } from './DTO';
//import { AppError } from 'src/common/constants/errors';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
  ) {}

  async hashPassword(password: string): Promise<string> {
    try {
      return bcrypt.hash(password, 10);
    } catch (e) {
      throw new Error(e)
    }   
  }

  // Необходимо проверить есть ли в системе пользователь с таким Email
  async findUserByEmail(email: string): Promise<User> {
    try {
      return this.userRepository.findOne({ where: { email } });
    } catch (e) {
      throw new Error(e)
    }    
  }

  async createUser(dto: CreateUserDTO): Promise<CreateUserDTO> {
    try {
    dto.password = await this.hashPassword(dto.password);
    await this.userRepository.create({
      firstName: dto.firstName,
      username: dto.username,
      email: dto.email,
      password: dto.password,
    });
    return dto;      
    }catch (e) {
      throw new Error(e)
    }
  }

  async publicUser(email: string): Promise<User> {
    try {
    return this.userRepository.findOne({
      where: { email },
      attributes: { exclude: ['password'] },
    });
  }catch(e) {
    throw new Error(e)
  }
  }

  async updateUser(email: string, dto: UpdateUserDTO): Promise<UpdateUserDTO> {
    try {
    await this.userRepository.update(dto, { where: { email } });
    return dto;
    }catch(e) {
      throw new Error(e)
    }
  }

  async deleteUser(email: string): Promise<boolean> {
    try {
    await this.userRepository.destroy({ where: { email } });
    return true;
  }catch(e) {
    throw new Error(e)
  }
  }
}

/*    const newUser = {
      firstName: dto.firstName,
      username: dto.username,
      email: dto.email,
      password: dto.password,
    };
    await this.userRepository.create(newUser);
    return dto;
  }*/
