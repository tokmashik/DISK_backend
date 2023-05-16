import { Controller, Get, Post, Delete, Req, Body, Param, NotFoundException } from '@nestjs/common';
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

  /*@Delete('id')
  async deleteTest(@Req() request) {
    const test = request.test;
    return this.testsService.deleteTest();
  }
*/

  @ApiTags('API')
  @ApiResponse({ status: 201 })
  @Post('add')
  createTests(@Body() dto: CreateTestsDTO): Promise<CreateTestsDTO> {
    return this.testsService.createTests(dto);
  }

  /*@Post()
  async addTest(
  ) {
    return this.testsService.addTest();
  }

  @ApiTags('API')
  @ApiResponse({ status: 201 })
  @Post()
  async addTest(@Body() testsDTO: CreateTestsDTO) {
    return this.testsService.addTest();
  }*/
}
