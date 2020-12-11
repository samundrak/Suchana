import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Queue } from 'bull';
import { setQueues } from 'bull-board';
import { NEW_NOTIFICATION_CREATED } from 'src/events/types';
import { NotificationCreatedEvent } from '../events/NotificationCreatedEvent';

@Injectable()
export class NotificationCreatedHandler {
  constructor(
    @InjectQueue(NEW_NOTIFICATION_CREATED)
    private readonly notificationQueue: Queue,
  ) {
    //@ts-ignore
    setQueues([this.notificationQueue]);
  }
  @OnEvent(NotificationCreatedEvent.EVENT_NAME)
  handleNotificationCreation(payload) {
    console.log(payload);
  }
}
