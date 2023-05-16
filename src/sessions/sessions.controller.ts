import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSessionsDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guards';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Get()
  async findAllSessions() {
    return await this.sessionsService.findAllSessions();
  }

  @Post()
  async createSessions(
    @Body() session: CreateSessionsDTO,
    @Req() req,
  ): Promise<CreateSessionsDTO> {
    // create a new post and return the newly created post
    return await this.sessionsService.createSessions(session, req.user.id);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CreateSessionsDTO> {
    // find the post with this id
    const session = await this.sessionsService.findOne(id);

    // if the post doesn't exit in the db, throw a 404 error
    if (!session) {
      throw new NotFoundException("This Post doesn't exist");
    }

    // if post exist, return the post
    return session;
  }
  /* @ApiTags('API')
  @ApiResponse({ status: 201 })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  createSessions(@Body() sessionsDTO: CreateSessionsDTO, @Req() request) {
    const user = request.user;
    return;
  }
  @Get('get-all')
  getAllSessions() {
    return;
  }

  @Delete('del-all')
  delAllSessions() {
    return;
  }*/
}
