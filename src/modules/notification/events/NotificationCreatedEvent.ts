import { OnEvent } from '@nestjs/event-emitter';
import { Notification } from '../entities/notification.entity';

export class NotificationCreatedEvent {
  static EVENT_NAME = 'NEW_NOTIFCATION_CREATED';
  constructor(private notification: any) {}
}
