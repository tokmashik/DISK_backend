/* eslint-disable prettier/prettier */
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Questions } from 'src/modules/questions/models/questions';

@Table
export class Answers extends Model {
  @Column
  answer_id: number;
 
  @ForeignKey(() => Questions)
  question_id: Questions;

  @Column
  min: string;
}
