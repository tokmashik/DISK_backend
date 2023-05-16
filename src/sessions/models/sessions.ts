/* eslint-disable prettier/prettier */
import { Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from 'src/modules/user/models/user.model';

@Table
export class Sessions extends Model {
  @ForeignKey(() => User)
  user: User;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  dateBeg: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  dateEnd: string;
}
