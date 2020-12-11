import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { Queue } from 'bull';
import { setQueues } from 'bull-board';
import { CreateNotificationDto } from '../notification/dto/create-notification.dto';
import { NOTIFICATION_ARRIVED_JOB } from './jobs';

@Injectable()
export class JobsService {
  private logger = new Logger('jobsService');
  constructor(
    @InjectQueue(NOTIFICATION_ARRIVED_JOB)
    private readonly notificationQueue: Queue,
  ) {
    // @ts-ignore
    setQueues([this.notificationQueue]);
  }

  async handleNotificationArrival(notificationDto: CreateNotificationDto) {
    this.logger.log('notification arrived');
    this.notificationQueue.add(notificationDto);
  }
}
