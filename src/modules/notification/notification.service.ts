import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { App } from 'src/modules/apps/entities/app.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './entities/notification.entity';
import { Connection } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { NotificationCreatedEvent } from './events/NotificationCreatedEvent';
import { Audience } from '../audience/entities/audience.entity';

@Injectable()
export class NotificationService {
  constructor(
    private eventEmitter: EventEmitter2,
    private connection: Connection,
  ) {}

  async create(
    createNotificationDto: CreateNotificationDto,
    app: { id: string },
  ) {
    const audiences = createNotificationDto.audiences.map(audienceId => {
      const audience = new Audience();
      audience.id = (audienceId as unknown) as number;
      return audience;
    });
    const notification = new Notification();
    notification.id = createNotificationDto.id;
    notification.appId = (app.id as unknown) as number;
    notification.type = createNotificationDto.type;
    notification.message = createNotificationDto.message;
    notification.audiences = audiences;
    const notificationResult = await this.connection.manager.save(notification);
    return notificationResult;
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
