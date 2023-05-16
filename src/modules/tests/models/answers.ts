/* eslint-disable prettier/prettier */
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Questions } from 'src/modules/tests/models/questions';

@Table
export class Answers extends Model {

  @ForeignKey(() => Questions)
  @Column
  questionsId: number;

  @Column
  text: string;

  @Column
  order: string;
}
