import { Injectable } from '@nestjs/common';
import { Sessions } from './models/sessions';
import { InjectModel } from '@nestjs/sequelize';
import { Answers_userDTO, CreateSessionsDTO } from './dto';
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
    return await this.sessionsRepository.findAll<Sessions>({
      include: ['answers_user'],
    });
  }

  async findOne(id, user) {
    return await this.sessionsRepository.findOne({
      where: { id, user },
      include: ['answers_user'],
    });
  }

  async delete(id, user) {
    return await this.sessionsRepository.destroy({ where: { id, user } });
  }

  async createAnswers_user(dto: Answers_userDTO): Promise<Answers_user> {
    try {
      const q = await this.Answers_userRepository.create({
        ...dto,
      });
      return q;
    } catch (e) {
      throw new Error(e);
    }
  }
}
