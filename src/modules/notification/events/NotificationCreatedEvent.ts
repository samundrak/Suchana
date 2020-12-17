import { OnEvent } from '@nestjs/event-emitter';
import { App } from 'src/modules/apps/entities/app.entity';
import { CreateNotificationDto } from '../dto/create-notification.dto';
import { Notification } from '../entities/notification.entity';

export class NotificationCreatedEvent {
  static EVENT_NAME = 'NEW_NOTIFCATION_ARRIVED';
  constructor(private notification: any) {}
}
export interface INotificationCreatedEvent {
  notification: CreateNotificationDto;
  app: { id: string };
}
