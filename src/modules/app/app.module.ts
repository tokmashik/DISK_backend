/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from 'src/modules/user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config/dist';
import configurations from '../../configurations';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/modules/user/models/user.model';
import { AuthModule } from '../auth/auth.module';
import { TokenModule } from 'src/token/token.module';
import { AnswersModule } from '../answers/answers.module';
import { QuestionsModule } from '../questions/questions.module';
import { TestsModule } from '../tests/tests.module';
import { Answers } from '../answers/models/answers';
import { Questions } from '../questions/models/questions';
import { Tests } from '../tests/models/tests';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get('db_host'),
        port: configService.get('db_port'),
        username: configService.get('db_user'),
        password: configService.get('db_password'),
        database: configService.get('db_name'),
        synchronize: true,
        autoLoadModels: true,
        models: [User, Answers, Questions, Tests],
      }),
    }),
    UserModule,
    AuthModule,
    TokenModule,
    AnswersModule,
    QuestionsModule,
    TestsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
