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
import { TestsModule } from '../tests/tests.module';
import { Tests } from '../tests/models/tests';
import { Questions } from '../tests/models/questions';
import { Answers } from '../tests/models/answers';
import { Sessions } from '../sessions/models/sessions';
import { SessionsModule } from '../sessions/sessions.module';
import { Answers_user } from '../sessions/models/answers_user';


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
        models: [User, Tests, Questions, Answers, Sessions, Answers_user],
      }),
    }),
    UserModule,
    AuthModule,
    TokenModule,
    TestsModule,
    SessionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
