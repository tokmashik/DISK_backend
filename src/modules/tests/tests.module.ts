import { Module } from '@nestjs/common';
import { TestsController } from './tests.controller';
import { TestsService } from './tests.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tests } from './models/tests';

@Module({
  imports: [SequelizeModule.forFeature([Tests])],
  controllers: [TestsController],
  providers: [TestsService],
})
export class TestsModule {}
