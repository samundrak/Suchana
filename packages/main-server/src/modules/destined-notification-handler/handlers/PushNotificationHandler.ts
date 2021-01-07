import { Injectable, Logger } from '@nestjs/common';
import { IDestinedNotification } from 'src/modules/audience-channel/interfaces/IDestinedNotification';
import { ChannelsEnum } from 'src/modules/channel/enums/ChannelsEnum';
import { AbstractHandler } from '../AbstractHandler';
import { parseAndMapMessageAsPerChannel } from '../utils';
import { PushNotificationProvider } from './PushNotificationProviders';
import { FirebaseCloudMessaging } from './PushNotificationProviders/FirebaseCloudMessaging';

@Injectable()
export class PushNotificationHandler extends AbstractHandler {
  private logger: Logger = new Logger('PushNotificationHandler');
  protected dispatch(data: IDestinedNotification): Promise<boolean> {
    const provider = new PushNotificationProvider(new FirebaseCloudMessaging());
    const channelMessageMap = parseAndMapMessageAsPerChannel(
      data.notification.message,
    );
    this.logger.log(
      'Message recieved by handler and passsing to provider',
      data.notification.id,
    );
    return provider.sendMessage(
      data.value,
      channelMessageMap[ChannelsEnum.PUSH_NOTIFICATION],
    );
  }
}
