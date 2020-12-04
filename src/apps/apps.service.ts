import { Injectable } from '@nestjs/common';
import { v4 as uuid, v5 as uuidv5 } from 'uuid';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/User.entity';
import { Connection } from 'typeorm';
import { CreateAppDto } from './dto/create-app.dto';
import { UpdateAppDto } from './dto/update-app.dto';
import { App } from './entities/app.entity';
import { AppRepository } from './repository/app.repository';

@Injectable()
export class AppsService {
  constructor(
    @InjectRepository(AppRepository)
    private appRepository: AppRepository,
    @InjectConnection()
    private connection: Connection,
  ) {}
  async create(createAppDto: CreateAppDto, user: UserEntity) {
    const app = new App();
    app.name = createAppDto.name;
    app.key = uuid();
    app.secret = uuid();
    await this.connection.manager.save(app);

    user.apps = [app];
    return await this.connection.manager.save(user);
  }

  findAll() {
    return this.appRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} app`;
  }

  update(id: number, updateAppDto: UpdateAppDto) {
    return `This action updates a #${id} app`;
  }

  remove(id: number) {
    return `This action removes a #${id} app`;
  }
}
