import { Module } from '@nestjs/common';
import { AnswersController } from './answers.controller';
import { AnswersService } from './answers.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Answers } from './models/answers';

@Module({
  imports: [SequelizeModule.forFeature([Answers])],
  controllers: [AnswersController],
  providers: [AnswersService],
})
export class AnswersModule {}
