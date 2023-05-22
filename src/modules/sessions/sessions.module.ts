import { Module } from '@nestjs/common';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tests } from 'src/modules/tests/models/tests';
import { Questions } from 'src/modules/tests/models/questions';
import { Answers } from 'src/modules/tests/models/answers';
import { User } from 'src/modules/user/models/user.model';
import { Sessions } from './models/sessions';
import { Answers_user } from './models/answers_user';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Tests,
      Questions,
      Answers,
      User,
      Sessions,
      Answers_user,
    ]),
  ],
  controllers: [SessionsController],
  providers: [SessionsService],
})
export class SessionsModule {}
