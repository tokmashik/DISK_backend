import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tests } from './models/tests';
import { Questions } from './models/questions';
import { Answers } from './models/answers';
import {
  AnswersDTO,
  CreateTestsDTO,
  QuestionsDTO,
  TestsResponseDTO,
} from './dto';

@Injectable()
export class TestsService {
  constructor(
    @InjectModel(Tests)
    private testsModel: typeof Tests,
    @InjectModel(Questions)
    private questionModel: typeof Questions,
    @InjectModel(Answers)
    private answersModel: typeof Answers,
  ) {}

  async getAllTests() {
    return this.testsModel.findAll({ include: ['questions'] });
  }

  async createTests(dto: CreateTestsDTO): Promise<Tests> {
    try {
      const test = await this.testsModel.create({
        ...dto,
      });
      return test;
    } catch (e) {
      throw new Error(e);
    }
  }

  //include[{ model: Questions }]
  async findOneTest(id): Promise<Tests> {
    try {
      return await this.testsModel.findOne({
        where: { id },
        include: ['questions'],
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateOneTest(id, data) {
    const [numberOfAffectedRows, [updatedTest]] = await this.testsModel.update(
      { ...data },
      { where: { id }, returning: true },
    );
    return { numberOfAffectedRows, updatedTest };
  }

  async deleteOneTest(id) {
    try {
      return await this.testsModel.destroy({ where: { id } });
    } catch (e) {
      throw new Error(e);
    }
  }

  async createQuestion(dto: QuestionsDTO): Promise<Questions> {
    try {
      const q = await this.questionModel.create({
        ...dto,
      });
      return q;
    } catch (e) {
      throw new Error(e);
    }
  }

  async findOneQuestion(id): Promise<Tests> {
    try {
      return await this.testsModel.findOne({
        where: { id },
        include: ['answers'],
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteOneQuestion(id) {
    try {
      return await this.questionModel.destroy({ where: { id } });
    } catch (e) {
      throw new Error(e);
    }
  }

  async createAnswers(dto: AnswersDTO): Promise<Answers> {
    try {
      const a = await this.answersModel.create({
        ...dto,
      });
      return a;
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteOneAnswers(id) {
    try {
      return await this.answersModel.destroy({ where: { id } });
    } catch (e) {
      throw new Error(e);
    }
  }

  /*const question1 = await this.questionModel.create({
      text: 'test Question',
      testId: test.id,
    });
    const question2 = await this.questionModel.create({
      text: 'test Question 2',
      testId: test.id,
    });*/
}
