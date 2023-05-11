/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class TestsDTO {
  @IsNumber()
  id: number;

  @IsString()
  assetId: string;

  @IsString()
  name: string;
}
