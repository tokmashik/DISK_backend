/* eslint-disable prettier/prettier */
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { Tests } from '../models/tests';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTestsDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsBoolean()
  active: boolean;
  
  @ApiProperty()
  @IsNumber()
  order: number
}

export class TestsResponseDTO {
  constructor(testEntity: Tests) {
    this.id = testEntity.id;
    this.name = testEntity.name;
    this.active = testEntity.active;
    this.type = testEntity.type;
    this.order = testEntity.order;
  }
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  type: string

  @IsBoolean()
  active: boolean

  @IsNumber()
  order: number
}

export class QuestionsDTO {
  @ApiProperty()
  @IsNumber()
  testId: number;

  @ApiProperty()
  @IsString()
  text: string;

  @ApiProperty()
  @IsString()
  answers: string;

  @ApiProperty()
  @IsNumber()
  order: number;
}

export class AnswersDTO {
  @ApiProperty()
  @IsNumber()
  questionsId: number;

  @ApiProperty()
  @IsString()
  text: string;

  @ApiProperty()
  @IsNumber()
  order: number;
}