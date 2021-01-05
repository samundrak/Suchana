import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IDestinedNotification } from 'src/modules/audience-channel/interfaces/IDestinedNotification';
import { ChannelsEnum } from 'src/modules/channel/enums/ChannelsEnum';
import { AbstractHandler } from '../AbstractHandler';
import { NotificationLogActivityRepository } from '../repositories/notification-log-activity.repository';
import { NotificationLogsRepository } from '../repositories/notification-logs.repository';
import { parseAndMapMessageAsPerChannel } from '../utils';

@Injectable()
export class EmailHandler extends AbstractHandler {
  private logger: Logger = new Logger('EmailHandler');
  constructor(
    private mailService: MailerService,
    @InjectRepository(NotificationLogsRepository)
    protected notificationLogRepo: NotificationLogsRepository,
    @InjectRepository(NotificationLogActivityRepository)
    protected notificationLogActivityRepo: NotificationLogActivityRepository,
  ) {
    super(notificationLogRepo, notificationLogActivityRepo);
  }
  async dispatch(data: IDestinedNotification) {
    const channelMessageMap = parseAndMapMessageAsPerChannel(
      data.notification.message,
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
