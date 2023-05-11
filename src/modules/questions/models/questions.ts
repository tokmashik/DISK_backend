/* eslint-disable prettier/prettier */
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Questions extends Model {
  @Column
  questionid: number;

  @Column
  text: string;
}
