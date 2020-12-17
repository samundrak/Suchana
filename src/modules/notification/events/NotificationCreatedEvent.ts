import { CreateNotificationDto } from '../dto/create-notification.dto';

export class NotificationCreatedEvent {
  static EVENT_NAME = 'NEW_NOTIFCATION_ARRIVED';
  constructor(private notification: any) {}
}
export interface INotificationCreatedEvent {
  notification: CreateNotificationDto;
  app: { id: string };
}
