/* eslint-disable prettier/prettier */
import { IsBoolean, IsString } from 'class-validator';
import { IsDate } from 'sequelize-typescript';

export class CreateSessionsDTO {

  @IsString()
  name: string
  /*@IsDate
  dateBeg: Date;

  @IsDate
  dateEnd: Date;*/

}
