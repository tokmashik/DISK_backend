/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class AnswersDTO {
  @IsNumber()
  id: number;

  @IsString()
  assetId: string;

  @IsString()
  min: string;
}
