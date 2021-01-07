import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { JobsService } from 'src/modules/jobs/jobs.service';
import { NotificationCreatedEvent } from '../events/NotificationCreatedEvent';

@Injectable()
export class NotificationCreatedHandler {
  constructor(private jobsService: JobsService) {}
  @OnEvent(NotificationCreatedEvent.EVENT_NAME)
  handleNotificationCreation(payload) {
    this.jobsService.handleNotificationArrival(payload);
  }
}
