/* eslint-disable prettier/prettier */
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Sessions } from './sessions';

@Table
export class Answers_user extends Model {

  @ForeignKey(() => Sessions)
  @Column
  sessionId: number;

  @Column
  text_of_question: string;

  @Column
  text_of_answers: string;
}
