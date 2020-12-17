import { AudienceChannel } from '../entities/audience-channel.entity';
import { Notification } from '../../notification/entities/notification.entity';
import { App } from 'src/modules/apps/entities/app.entity';

export type IDestinedNotification = Partial<AudienceChannel> & {
  notification: Pick<Notification, 'id'>;
} & {
  app: Pick<App, 'id'>;
};
