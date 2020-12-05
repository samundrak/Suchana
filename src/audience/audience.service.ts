import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { AppRepository } from 'src/apps/repository/app.repository';
import { Connection } from 'typeorm';
import { CreateAudienceDto } from './dto/create-audience.dto';
import { UpdateAudienceDto } from './dto/update-audience.dto';
import { AudienceRepository } from './repository/audience.repository';

@Injectable()
export class AudienceService {
  constructor(
    @InjectRepository(AppRepository)
    private appRepository: AppRepository,
    @InjectRepository(AudienceRepository)
    private audienceRepository: AudienceRepository,
    @InjectConnection()
    private connection: Connection,
  ) {}
  async create(appId: string, createAudienceDto: CreateAudienceDto) {
    const app = await this.appRepository.findOne({ where: { key: appId } });
    console.log(app);
    return 'This action adds a new audience';
  }

  findAll() {
    return `This action returns all audience`;
  }

  findOne(id: number) {
    return `This action returns a #${id} audience`;
  }

  update(id: number, updateAudienceDto: UpdateAudienceDto) {
    return `This action updates a #${id} audience`;
  }

  remove(id: number) {
    return `This action removes a #${id} audience`;
  }
}
