import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bullmq';
import { IDestinedNotification } from 'src/modules/audience-channel/interfaces/IDestinedNotification';
import { ChannelsEnum } from 'src/modules/channel/enums/ChannelsEnum';
import { DestinedNotificationHandlerService } from 'src/modules/destined-notification-handler/destined-notification-handler.service';
import { EmailHandler } from 'src/modules/destined-notification-handler/handlers/EmailHandler';
import { PushNotificationHandler } from 'src/modules/destined-notification-handler/handlers/PushNotificationHandler';
import { DESTINED_NOTIFICATION } from '../jobs';

@Processor(DESTINED_NOTIFICATION)
export class DestinedNotification {
  constructor(
    private handler: DestinedNotificationHandlerService,
    private emailHandler: EmailHandler,
    private pushNotificationHandler: PushNotificationHandler,
  ) {}
  @Process()
  handleDestinedNotification(job: Job<IDestinedNotification>) {
    const { channelsId } = job.data;
    if (channelsId === ChannelsEnum.EMAIL) {
      this.handler.setHandler(this.emailHandler);
    }
    if (
      channelsId === ChannelsEnum.PUSH_NOTIFICATION ||
      channelsId === ChannelsEnum.IN_APP
    ) {
      this.handler.setHandler(this.pushNotificationHandler);
    }
    this.handler.dispatch(job.data);
  }
}
