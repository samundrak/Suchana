import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { IDestinedNotification } from 'src/modules/audience-channel/interfaces/IDestinedNotification';
import { AbstractHandler } from '../AbstractHandler';

@Injectable()
export class EmailHandler extends AbstractHandler {
  private logger: Logger = new Logger('EmailHandler');
  constructor(private mailService: MailerService) {
    super();
    console.log(mailService);
  }
  async dispatch(data: IDestinedNotification) {
    console.log(data);
    try {
      await this.mailService.sendMail({
        to: data.value,
        subject: 'New Notification',
        text: data.notification.message,
        html: data.notification.message,
      });
      this.logger.log(`sent an email to ${data.value}`);
      return true;
    } catch (e) {
      this.logger.error('Error while sending an email', e);
      return false;
    }
  }
}
