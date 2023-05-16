/* eslint-disable prettier/prettier */
import { Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Tests } from './tests';
import { Answers } from './answers';

@Table
export class Questions extends Model {
  @ForeignKey(() => Tests)
  @Column
  testId: number;

  @Column
  text: string;

  @HasMany(() => Answers)
  answers: Answers[];

  @Column
  order: number;
}
