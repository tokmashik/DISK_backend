import { Module } from '@nestjs/common';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sessions } from './models/sessions';
import { Answers_user } from './models/answers_user';
import { UserModule } from '../user/user.module';

@Module({
  imports: [SequelizeModule.forFeature([Sessions, Answers_user]), UserModule],
  controllers: [SessionsController],
  providers: [SessionsService],
})
export class SessionsModule {}
