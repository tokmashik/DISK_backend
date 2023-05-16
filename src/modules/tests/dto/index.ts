/* eslint-disable prettier/prettier */
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { Tests } from '../models/tests';

export class CreateTestsDTO {

  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsBoolean()
  active: boolean;
  
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
  @IsNumber()
  id: number;

  @IsString()
  questionsId: number;

  @IsString()
  text: string;

  @IsNumber()
  order: number;
}

export class AnswersDTO {
  @IsNumber()
  id: number;

  @IsString()
  questionsId: number;

  @IsString()
  text: string;

  @IsString()
  order: string;
}