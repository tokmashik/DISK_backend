import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { TestsService } from './tests.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTestsDTO } from './dto';
import { Tests } from './models/tests';

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

  @ApiTags('API')
  @ApiResponse({ status: 201 })
  @Post('add')
  createTests(@Body() dto: CreateTestsDTO): Promise<CreateTestsDTO> {
    return this.testsService.createTests(dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleted = await this.testsService.deleteOneTest(id);
    if (deleted === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }
    return 'Successfully deleted';
  }
}
