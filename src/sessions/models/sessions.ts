/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';
import { Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from 'src/modules/user/models/user.model';

@Table
export class Sessions extends Model {
  @ForeignKey(() => User)
  user: User;

  @Column
  name: string;
 /* @IsString()
  dateBeg: string;

  @Column
  dateEnd: number;*/
}
