import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid, v5 as uuidv5 } from 'uuid';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/modules/auth/User.entity';
import { Connection } from 'typeorm';
import { CreateAppDto } from './dto/create-app.dto';
import { UpdateAppDto } from './dto/update-app.dto';
import { App } from './entities/app.entity';
import { AppRepository } from './repository/app.repository';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/modules/users/entities/user.entity';
import { UserRepository } from 'src/modules/auth/User.repository';

@Injectable()
export class AppsService {
  constructor(
    @InjectRepository(AppRepository)
    private appRepository: AppRepository,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    @InjectConnection()
    private connection: Connection,
    private jwtService: JwtService,
  ) {}
  /**
   * Will create an app with key and secret where
   * audiences and notification can kept
   * @param createAppDto
   * @param user
   */
  async create(createAppDto: CreateAppDto, user: UserEntity) {
    const userWithApps = await this.userRepository.findOne(user.id, {
      relations: ['apps'],
    });
    const app = new App();
    app.name = createAppDto.name;
    app.key = uuid();
    const accessToken = this.jwtService.sign({
      name: createAppDto.name,
      key: app.key,
      expiresIn: '90d',
    });
    app.secret = accessToken;
    await this.connection.manager.save(app);
    user.apps = userWithApps.apps.concat([app]);
    return await this.connection.manager.save(user);
  }

  async findAll(user: UserEntity) {
    const userRepo = this.connection.getRepository(UserEntity);
    const userApps = await userRepo.findOne({
      where: {
        id: user.id,
      },
      relations: ['apps'],
    });
    return userApps.apps;
  }

  async findOne(id: string) {
    const app = await this.appRepository.findOne({
      where: {
        key: id,
      },
    });
    if (!app) throw new NotFoundException();
    return app;
  }

  update(id: number, updateAppDto: UpdateAppDto) {
    return `This action updates a #${id} app`;
  }

  async remove(id: string) {
    const app = await this.appRepository.findOne({ where: { key: id } });
    if (!app) throw new NotFoundException();
    return await this.connection.manager.remove(app);
  }
}
