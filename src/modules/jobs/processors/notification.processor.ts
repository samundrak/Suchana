import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bullmq';
import { AppRepository } from 'src/modules/apps/repository/app.repository';
import { CreateNotificationDto } from 'src/modules/notification/dto/create-notification.dto';
import { INotificationCreatedEvent } from 'src/modules/notification/events/NotificationCreatedEvent';
import { NotificationService } from 'src/modules/notification/notification.service';
import { NOTIFICATION_ARRIVED_JOB } from '../jobs';

@Processor(NOTIFICATION_ARRIVED_JOB)
export class NotificationProcessor {
  private logger = new Logger('NotificationProcessor');
  constructor(private notificationService: NotificationService) {}
  @Process()
  async handleNewNotification(job: Job<INotificationCreatedEvent>) {
    try {
      if (!job.data.app) return;
      await this.notificationService.create(job.data.notification, {
        id: job.data.app.id,
      });
    } catch (err) {
      this.logger.error(err.message);
      throw err;
    }
  }
}
