/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateSessionsDTO {
  @ApiProperty()
  @IsString()
  dateBeg: string;

  @ApiProperty()
  @IsString()
  dateEnd: string;
}

export class Answers_userDTO {
  @ApiProperty()
  @IsNumber()
  sessionId: number;

  @ApiProperty()
  @IsString()
  text_of_question: string;

  @ApiProperty()
  @IsNumber()
  text_of_answers: number;
}
