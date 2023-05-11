/* eslint-disable prettier/prettier */
import sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';
import { Collection } from 'typeorm/driver/mongodb/typings';

@Table
export class Questions extends Model {
  
  @Column
  text: string;
}

Questions.init({
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true // Automatically gets converted to SERIAL for postgres
    }
  }, { sequelize });
