import { Injectable } from '@nestjs/common';
import { Sessions } from './models/sessions';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSessionsDTO } from './dto';
import { Answers_user } from './models/answers_user';

@Injectable()
export class SessionsService {
  constructor(
    @InjectModel(Sessions) private readonly sessionsRepository: typeof Sessions,
    @InjectModel(Answers_user)
    private readonly Answers_userRepository: typeof Answers_user,
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

  async findOne(id, user) {
    return await this.sessionsRepository.findOne({
      where: { id, user },
    });
  }

  async delete(id, user) {
    return await this.sessionsRepository.destroy({ where: { id, user } });
  }
}
