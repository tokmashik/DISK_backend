import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { TestsService } from './tests.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AnswersDTO, CreateTestsDTO, QuestionsDTO } from './dto';
import { Tests } from './models/tests';
import { Questions } from './models/questions';
import { Answers } from './models/answers';

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}
  @ApiTags('API')
  @ApiResponse({ status: 200 })
  @Get('full')
  async getAllTest() {
    return this.testsService.getAllTests();
  }

  @Get(':id')
  async findOneTest(@Param('id') id: number): Promise<Tests> {
    const test = await this.testsService.findOneTest(id);
    if (!test) {
      throw new NotFoundException("This test doesn't exist");
    }
    return test;
  }

  @Post('add')
  createTests(@Body() dto: CreateTestsDTO): Promise<Tests> {
    return this.testsService.createTests(dto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() post: CreateTestsDTO,
  ): Promise<Tests> {
    const { numberOfAffectedRows, updatedTest } =
      await this.testsService.updateOneTest(id, post);
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }
    return updatedTest;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleted = await this.testsService.deleteOneTest(id);
    if (deleted === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }
    return 'Successfully deleted';
  }

  @Post(':id/question')
  createQuestion(@Body() dto: QuestionsDTO): Promise<Questions> {
    return this.testsService.createQuestion(dto);
  }

  /*@Get(':id/question')
  async findOneQuestion(@Param('id') id: number): Promise<Questions> {
    const q = await this.testsService.findOneQuestion(id);
    if (!q) {
      throw new NotFoundException("This test doesn't exist");
    }
    return q;
  }*/

  @Delete(':id/question')
  async removeQuestion(@Param('id') id: number) {
    const deleted = await this.testsService.deleteOneQuestion(id);
    if (deleted === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }
    return 'Successfully deleted';
  }

  @Post('/question/:id/answers')
  createAnswers(@Body() dto: AnswersDTO): Promise<Answers> {
    return this.testsService.createAnswers(dto);
  }

  @Delete(':id/answers')
  async removeAnswers(@Param('id') id: number) {
    const deleted = await this.testsService.deleteOneAnswers(id);
    if (deleted === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }
    return 'Successfully deleted';
  }
}
