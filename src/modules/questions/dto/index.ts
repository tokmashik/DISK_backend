/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class QuestionsDTO {
  @IsNumber()
  id: number;

  @IsString()
  text: string;
}
