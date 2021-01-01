import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { IDestinedNotification } from 'src/modules/audience-channel/interfaces/IDestinedNotification';
import { ChannelsEnum } from 'src/modules/channel/enums/ChannelsEnum';
import { NotificationMessagePayloadDTO } from 'src/modules/notification/dto/NotificationMessagePayloadDTO';
import { AbstractHandler } from '../AbstractHandler';

@Injectable()
export class EmailHandler extends AbstractHandler {
  private logger: Logger = new Logger('EmailHandler');
  constructor(private mailService: MailerService) {
    super();
  }
  async dispatch(data: IDestinedNotification) {
    const parsedMessages = JSON.parse(
      data.notification.message,
    ) as NotificationMessagePayloadDTO[];

    const channelMessageMap = parsedMessages.reduce(
      (acc, cur) => ({
        ...acc,
        [cur.channel]: cur.value,
      }),
      {},
    );
    try {
      await this.mailService.sendMail({
        to: data.value,
        subject: 'New Notification',
        text: channelMessageMap[ChannelsEnum.EMAIL],
        html: channelMessageMap[ChannelsEnum.EMAIL],
      });
      this.logger.log(`sent an email to ${data.value}`);
      return true;
    } catch (e) {
      this.logger.error('Error while sending an email', e);
      return false;
    }
  }
}
