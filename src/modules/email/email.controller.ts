import { MailerService } from '@nestjs-modules/mailer';
import { Controller, Get } from '@nestjs/common';

@Controller('email')
export class EmailController {
  constructor(private mailService: MailerService) {}
  @Get('/')
  send() {
    const mail = new MailerService({});
    mail
      .sendMail({
        to: 'alverta.king@ethereal.email', // list of receivers
        subject: 'Testing Nest MailerModule ✔', // Subject line
        text: 'welcome', // plaintext body
        html: '<b>welcome</b>', // HTML body content
      })
      .then(() => console.log('sent'))
      .catch(e => console.log(e));
    return 'Mail sent';
  }
}
