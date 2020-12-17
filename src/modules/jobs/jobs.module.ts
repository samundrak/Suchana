import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppRepository } from '../apps/repository/app.repository';
import { AudienceService } from '../audience/audience.service';
import { AudienceRepository } from '../audience/repository/audience.repository';
import { NotificationService } from '../notification/notification.service';
import { NOTIFICATION_ARRIVED_JOB, DESTINED_NOTIFICATION } from './jobs';
import { JobsService } from './jobs.service';
import { DestinedNotification } from './processors/notification-destined.processor';
import { NotificationProcessor } from './processors/notification.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: NOTIFICATION_ARRIVED_JOB,
    }),
    BullModule.registerQueue({
      name: DESTINED_NOTIFICATION,
    }),
    TypeOrmModule.forFeature([AudienceRepository]),
  ],
  providers: [
    JobsService,
    NotificationService,
    NotificationProcessor,
    DestinedNotification,
    AppRepository,
    AudienceService,
  ],
  exports: [JobsService],
})
export class JobsModule {}
