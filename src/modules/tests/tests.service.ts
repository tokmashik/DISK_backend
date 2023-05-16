import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tests } from './models/tests';
import { Questions } from './models/questions';
import { CreateTestsDTO, TestsResponseDTO } from './dto';

@Injectable()
export class TestsService {
  constructor(
    @InjectModel(Tests)
    private testsModel: typeof Tests,
    @InjectModel(Questions)
    private questionModel: typeof Questions,
  ) {}

  public async getAllTests() {
    return this.testsModel.findAll({ include: ['questions'] });
  }

  /*public async getOne({ where }) {
    return this.testsModel.findAll({ include: ['questions'] });
  }*/

  public async createTests(dto: CreateTestsDTO): Promise<Tests> {
    try {
      const test = await this.testsModel.create({
        ...dto,
      });
      return test;
    } catch (e) {
      throw new Error(e);
    }
  }

  async findOneTest(id): Promise<Tests> {
    try {
      return await this.testsModel.findOne({
        where: { id },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteOneTest(id) {
    try {
      return await this.testsModel.destroy({ where: { id } });
    } catch (e) {
      throw new Error(e);
    }
  }

  //include[{ model: Questions }]

  /*
  
  public async create(dto: CreateTestsDTO): Promise<Tests> {
    try {
      const test = await this.testsModel.create({ ...dto });
      return test;
    } catch (e) {
      throw new Error(e);
    }
  }
  
  public async deleteTest(dto: CreateTestsDTO) {
    const test = await this.testsModel.destroy({ ...dto });
  }
*/
  /*const question1 = await this.questionModel.create({
      text: 'test Question',
      testId: test.id,
    });
    const question2 = await this.questionModel.create({
      text: 'test Question 2',
      testId: test.id,
    });*/
}
