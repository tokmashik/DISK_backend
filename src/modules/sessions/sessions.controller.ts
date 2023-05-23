import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { Answers_userDTO, CreateSessionsDTO } from './dto';
import { Sessions } from './models/sessions';
import { JwtAuthGuard } from 'src/guards/jwt-guards';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Answers_user } from './models/answers_user';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @UseGuards(JwtAuthGuard)
  @ApiTags('API')
  @ApiResponse({ status: 200, type: CreateSessionsDTO })
  @Get()
  async findAllSessions() {
    return await this.sessionsService.findAllSessions();
  }

  @UseGuards(JwtAuthGuard)
  @ApiTags('API')
  @ApiResponse({ status: 201, type: CreateSessionsDTO })
  @Post('add')
  async createSessions(
    @Body() session: CreateSessionsDTO,
    @Request() req,
  ): Promise<Sessions> {
    return await this.sessionsService.createSessions(session, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiTags('API')
  @ApiResponse({ status: 200, type: CreateSessionsDTO })
  @Get(':id')
  async findOne(@Param('id') id: number, @Request() req): Promise<Sessions> {
    const session = await this.sessionsService.findOne(id, req.user.id);
    if (!session) {
      throw new NotFoundException("This session doesn't exist");
    }
    return session;
  }

  @ApiTags('API')
  @ApiResponse({ status: 200, type: CreateSessionsDTO })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    const deleted = await this.sessionsService.delete(id, req.user.id);
    if (deleted === 0) {
      throw new NotFoundException("This session doesn't exist");
    }
    return 'Successfully deleted';
  }

  @ApiTags('API')
  @ApiResponse({ status: 201, type: Answers_userDTO })
  //@UseGuards(JwtAuthGuard)
  @Post('answers_user/:id')
  createQuestion(@Body() dto: Answers_userDTO): Promise<Answers_user> {
    return this.sessionsService.createAnswers_user(dto);
  }
}
