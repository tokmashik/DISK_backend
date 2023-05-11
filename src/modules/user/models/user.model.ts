/* eslint-disable prettier/prettier */
import { Column, Model, Table } from 'sequelize-typescript';

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
}
