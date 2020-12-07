import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { App } from 'src/apps/entities/app.entity';
import { AppRepository } from 'src/apps/repository/app.repository';
import { Connection } from 'typeorm';
import { CreateAudienceDto } from './dto/create-audience.dto';
import { UpdateAudienceDto } from './dto/update-audience.dto';
import { Audience } from './entities/audience.entity';
import { AudienceRepository } from './repository/audience.repository';

@Injectable()
export class AudienceService {
  constructor(
    @InjectRepository(AppRepository)
    private appRepository: AppRepository,
    @InjectConnection()
    private connection: Connection,
  ) {}
  async create(app: App, createAudienceDto: CreateAudienceDto) {
    const appWithAudiences = await this.appRepository.findOne(app.id, {
      relations: ['audiences'],
    });
    const audiences = createAudienceDto.tokens
      .map(token => {
        const audience = new Audience();
        audience.token = token;
        return audience;
      })
      .concat(appWithAudiences.audiences);
    await this.connection.manager.save(audiences);
    app.audiences = audiences;
    const appsWithAudiences = await this.connection.manager.save(app);
    return appsWithAudiences.audiences;
  }

  async findAll(app: App) {
    const appWithAudiences = await this.appRepository.findOne(app.id, {
      relations: ['audiences'],
    });
    return appWithAudiences.audiences;
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
