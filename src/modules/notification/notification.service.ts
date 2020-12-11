import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { App } from 'src/modules/apps/entities/app.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationRepository } from './repository/notification.repository';
import { Notification } from './entities/notification.entity';
import { Connection } from 'typeorm';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { NotificationCreatedEvent } from './events/NotificationCreatedEvent';
import { Audience } from '../audience/entities/audience.entity';

@Injectable()
export class NotificationService {
  constructor(
    private eventEmitter: EventEmitter2,
    private connection: Connection,
  ) {}

  async create(createNotificationDto: CreateNotificationDto, app: App) {
    const audiences = createNotificationDto.audiences.map(audienceId => {
      const audience = new Audience();
      audience.id = (audienceId as unknown) as number;
      return audience;
    });
    const notification = new Notification();
    notification.appId = app.id;
    notification.type = createNotificationDto.type;
    notification.message = createNotificationDto.message;
    notification.audiences = audiences;
    const notificationResult = await this.connection.manager.save(notification);
    this.eventEmitter.emit(
      NotificationCreatedEvent.EVENT_NAME,
      new NotificationCreatedEvent(notificationResult),
    );
    return notificationResult;
  }
  findAll() {
    console.log('henlo');
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
