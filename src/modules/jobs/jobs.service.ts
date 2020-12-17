import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { Queue } from 'bull';
import { setQueues } from 'bull-board';
import { IDestinedNotification } from '../audience-channel/interfaces/IDestinedNotification';
import { CreateNotificationDto } from '../notification/dto/create-notification.dto';
import { NOTIFICATION_ARRIVED_JOB, DESTINED_NOTIFICATION } from './jobs';

@Injectable()
export class JobsService {
  private logger = new Logger('jobsService');
  constructor(
    @InjectQueue(NOTIFICATION_ARRIVED_JOB)
    private readonly notificationQueue: Queue,
    @InjectQueue(DESTINED_NOTIFICATION)
    private readonly destinedNotification: Queue,
  ) {
    // @ts-ignore
    setQueues([this.notificationQueue, this.destinedNotification]);
  }

  async handleNotificationArrival(notificationDto: CreateNotificationDto) {
    this.notificationQueue.add(notificationDto);
  }

  async handleNotificationForChannel(
    notificationForChannelList: IDestinedNotification[],
  ) {
    notificationForChannelList.forEach(item => {
      console.log(item);
      this.destinedNotification.add(item);
    });
  }
}
