import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionsDTO } from './dto';
import { Sessions } from './models/sessions';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Get()
  async findAllSessions() {
    return await this.sessionsService.findAllSessions();
  }

  @Post('add')
  async createSessions(
    @Body() session: CreateSessionsDTO,
    @Req() req,
  ): Promise<Sessions> {
    return await this.sessionsService.createSessions(session, req.user.id);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Sessions> {
    const session = await this.sessionsService.findOne(id);
    if (!session) {
      throw new NotFoundException("This sessions doesn't exist");
    }
    return session;
  }
  /* @ApiTags('API')
  @ApiResponse({ status: 201 })
  @UseGuards(JwtAuthGuard)*/
}
