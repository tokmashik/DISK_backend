/* eslint-disable prettier/prettier */
import { Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Sessions } from './sessions';

@Table
export class Answers_user extends Model {
  @ForeignKey(() => Sessions)
  @Column
  sessionId: number;

  @Column
  text_of_guestion: string;

  @Column
  text_of_answers: string;
}
