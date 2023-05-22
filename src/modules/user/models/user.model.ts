/* eslint-disable prettier/prettier */
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Sessions } from 'src/modules/sessions/models/sessions';

@Table
export class User extends Model {
  @Column
  role_id:number

  @Column
  firstName: string

  @Column
  username: string
  
  @Column
  email: string
  
  @Column
  password: string

  @HasMany(() => Sessions, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  sessions: Sessions[]
}
