import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { App } from 'src/apps/entities/app.entity';
import { Audience } from 'src/audience/entities/audience.entity';
import { AudienceRepository } from 'src/audience/repository/audience.repository';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationRepository } from './repository/notification.repository';
import { Notification } from './entities/notification.entity';
import { Connection } from 'typeorm';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(NotificationRepository)
    private notificationRepo: NotificationRepository,
    private connection: Connection,
  ) {}

  async create(createNotificationDto: CreateNotificationDto, app: App) {
    const audiences = createNotificationDto.audiences.map(audienceId => {
      const audience = new Audience();
      audience.id = (audienceId as unknown) as number;
      return audience;
    });
    await this.connection.manager.save(audiences);
    const notification = new Notification();
    console.log('??', app);
    notification.appId = app.id;
    console.log('??--', app);

    notification.type = createNotificationDto.type;
    notification.message = createNotificationDto.message;
    notification.audiences = audiences;
    return await this.connection.manager.save(notification);
  }

  findAll() {
    return `This action returns all notification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
