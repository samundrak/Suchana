import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Queue } from 'bull';
import { NEW_NOTIFICATION_CREATED } from 'src/events/types';
import { NotificationCreatedEvent } from './events/NotificationCreatedEvent';

@Injectable()
export class NotificationEventHandler {
  constructor(
    @InjectQueue(NEW_NOTIFICATION_CREATED)
    private audioQueue: Queue,
  ) {}
  @OnEvent(NotificationCreatedEvent.EVENT_NAME)
  handleNotificationCreatedEvent(payload: any) {
    console.log(payload);
    this.audioQueue.add({
      name: 'samundra',
    });
  }
}
