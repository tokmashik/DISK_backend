/* eslint-disable prettier/prettier */
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Questions } from 'src/modules/tests/models/questions';

@Table
export class Tests extends Model {

  @Column
  name: string

  @HasMany(() => Questions)
  questions: Questions[]

  @Column
  type: string

  @Column
  active: boolean

  @Column
  order: number
}