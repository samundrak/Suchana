import { forwardRef, Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationRepository } from './repository/notification.repository';
import { BullModule } from '@nestjs/bull';
import { NEW_NOTIFICATION_CREATED } from 'src/events/types';
import { JobsModule } from '../jobs/jobs.module';
import { NotificationCreatedHandler } from './handlers/NotificationCreatedHandler';

@Module({
  imports: [
    forwardRef(() => JobsModule),
    BullModule.registerQueue({
      name: NEW_NOTIFICATION_CREATED,
    }),
    TypeOrmModule.forFeature([NotificationRepository]),
  ],
  controllers: [NotificationController],
  providers: [NotificationService, NotificationCreatedHandler],
})
export class NotificationModule {}
