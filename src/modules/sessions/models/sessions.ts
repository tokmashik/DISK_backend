/* eslint-disable prettier/prettier */
import { Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from 'src/modules/user/models/user.model';
import { Answers_user } from './answers_user';

@Table
export class Sessions extends Model {
  @ForeignKey(() => User)
  user: User;

  /*@HasMany(() => Answers_user)
  answers_user: Answers_user[];*/

  @Column({
    type: DataType.DATE, //DATE
    allowNull: false,
  })
  dateBeg: string;

  @Column({
    type: DataType.STRING, //DATE
    allowNull: false,
  })
  dateEnd: string;
}
