/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreateSessionsDTO {
  /*@IsDate
  dateBeg: Date;

  @IsDate
  dateEnd: Date;*/

  @IsString()
  dateBeg: string;

  @IsString()
  dateEnd: string;

}
