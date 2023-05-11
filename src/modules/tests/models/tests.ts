/* eslint-disable prettier/prettier */
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Questions } from 'src/modules/questions/models/questions';

@Table
export class Tests extends Model {
  @Column
  tests_id: number

  @ForeignKey(() => Questions)
  assetId: Questions;
  
  @Column
  name: string
}
