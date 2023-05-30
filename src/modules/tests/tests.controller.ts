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
import {
  AnswersDTO,
  CreateTestsDTO,
  QuestionsDTO,
  TestsResponseDTO,
} from './dto';
import { Tests } from './models/tests';
import { Questions } from './models/questions';
import { Answers } from './models/answers';

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}
  @ApiTags('API')
  @ApiResponse({ status: 200 })
  //@UseGuards(JwtAuthGuard)
  @Get('full')
  async getAllTest() {
    return this.testsService.getAllTests();
  }

  @ApiTags('API')
  @ApiResponse({ status: 200, type: TestsResponseDTO })
  //@UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOneTest(@Param('id') id: number): Promise<Tests> {
    const test = await this.testsService.findOneTest(id);
    if (!test) {
      throw new NotFoundException("This test doesn't exist");
    }
    return test;
  }

  @ApiTags('API')
  @ApiResponse({ status: 201, type: TestsResponseDTO })
  //@UseGuards(JwtAuthGuard)
  @Post('add')
  createTests(@Body() dto: CreateTestsDTO): Promise<Tests> {
    return this.testsService.createTests(dto);
  }

  @ApiTags('API')
  @ApiResponse({ status: 200, type: TestsResponseDTO })
  //@UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() post: CreateTestsDTO,
  ): Promise<Tests> {
    const { numberOfAffectedRows, updatedTest } =
      await this.testsService.updateOneTest(id, post);
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This test doesn't exist");
    }
    return updatedTest;
  }

  @ApiTags('API')
  @ApiResponse({ status: 200, type: QuestionsDTO })
  //@UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleted = await this.testsService.deleteOneTest(id);
    if (deleted === 0) {
      throw new NotFoundException("This test doesn't exist");
    }
    return 'Successfully deleted';
  }

  @ApiTags('API')
  @ApiResponse({ status: 201, type: QuestionsDTO })
  //@UseGuards(JwtAuthGuard)
  @Post(':id/question')
  createQuestion(@Body() dto: QuestionsDTO): Promise<Questions> {
    return this.testsService.createQuestion(dto);
  }

  @ApiTags('API')
  @ApiResponse({ status: 200, type: QuestionsDTO })
  //@UseGuards(JwtAuthGuard)
  @Get('question/full')
  async getAllQuestions() {
    return this.testsService.getAllQuestions();
  }

  @ApiTags('API')
  @ApiResponse({ status: 200, type: QuestionsDTO })
  //@UseGuards(JwtAuthGuard)
  @Get('question/:id')
  async findOneQuestion(@Param('id') id: number): Promise<Questions> {
    const q = await this.testsService.findOneQuestion(id);
    if (!q) {
      throw new NotFoundException("This question doesn't exist");
    }
    return q;
  }

  @ApiTags('API')
  @ApiResponse({ status: 200, type: QuestionsDTO })
  //@UseGuards(JwtAuthGuard)
  @Delete(':id/question')
  async removeQuestion(@Param('id') id: number) {
    const deleted = await this.testsService.deleteOneQuestion(id);
    if (deleted === 0) {
      throw new NotFoundException("This question doesn't exist");
    }
    return 'Successfully deleted';
  }

  @ApiTags('API')
  @ApiResponse({ status: 201, type: AnswersDTO })
  //@UseGuards(JwtAuthGuard)
  @Post('/:id/answer')
  createAnswers(@Body() dto: AnswersDTO): Promise<Answers> {
    return this.testsService.createAnswers(dto);
  }

  @ApiTags('API')
  @ApiResponse({ status: 200, type: AnswersDTO })
  //@UseGuards(JwtAuthGuard)
  @Get('/answer/:id')
  async findOneAnswer(@Param('id') id: number): Promise<Answers> {
    const q = await this.testsService.findOneAnswer(id);
    if (!q) {
      throw new NotFoundException("This answer doesn't exist");
    }
    return q;
  }

  @ApiTags('API')
  @ApiResponse({ status: 200, type: AnswersDTO })
  //@UseGuards(JwtAuthGuard)
  @Delete(':id/answer')
  async removeAnswers(@Param('id') id: number) {
    const deleted = await this.testsService.deleteOneAnswers(id);
    if (deleted === 0) {
      throw new NotFoundException("This answer doesn't exist");
    }
    return 'Successfully deleted';
  }
}
