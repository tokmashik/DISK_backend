import { Module } from '@nestjs/common';
import { TestsController } from './tests.controller';
import { TestsService } from './tests.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tests } from './models/tests';
import { Questions } from './models/questions';
import { Answers } from './models/answers';

@Module({
  imports: [SequelizeModule.forFeature([Tests, Questions, Answers])],
  controllers: [TestsController],
  providers: [TestsService],
})
export class TestsModule {}
