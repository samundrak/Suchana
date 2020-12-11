import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Queue } from 'bull';

import { NOTIFICATION_ARRIVED_JOB } from 'src/modules/jobs/jobs';
import { JobsService } from 'src/modules/jobs/jobs.service';
import { NotificationCreatedEvent } from '../events/NotificationCreatedEvent';

@Injectable()
export class NotificationCreatedHandler {
  constructor(private jobsService: JobsService) {
    //@ts-ignore
  }
  @OnEvent(NotificationCreatedEvent.EVENT_NAME)
  handleNotificationCreation(payload) {
    console.log('hi am here');
    this.jobsService.handleNotificationArrival(payload);
  }
}
