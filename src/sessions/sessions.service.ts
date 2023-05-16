import { Injectable } from '@nestjs/common';
import { Sessions } from './models/sessions';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSessionsDTO } from './dto';

@Injectable()
export class SessionsService {
  constructor(
    @InjectModel(Sessions) private readonly sessionsRepository: typeof Sessions,
  ) {}

  async createSessions(sessions: CreateSessionsDTO, userId): Promise<Sessions> {
    return await this.sessionsRepository.create<Sessions>({
      ...sessions,
      userId,
    });
  }

  async findAllSessions(): Promise<Sessions[]> {
    return await this.sessionsRepository.findAll<Sessions>();
  }

  async findOne(id): Promise<Sessions> {
    return await this.sessionsRepository.findOne({
      where: { id },
    });
  }

  async delete(id, userId) {
    return await this.sessionsRepository.destroy({ where: { id, userId } });
  }
}
