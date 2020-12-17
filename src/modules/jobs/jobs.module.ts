import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppRepository } from '../apps/repository/app.repository';
import { NotificationService } from '../notification/notification.service';
import { NOTIFICATION_ARRIVED_JOB } from './jobs';
import { JobsService } from './jobs.service';
import { NotificationProcessor } from './processors/notification.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: NOTIFICATION_ARRIVED_JOB,
    }),
  ],
  providers: [
    JobsService,
    NotificationService,
    NotificationProcessor,
    AppRepository,
  ],
  exports: [JobsService],
})
export class JobsModule {}
