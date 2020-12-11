import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationRepository } from './repository/notification.repository';
import { NotificationEventHandler } from './event-handler';
import { BullModule } from '@nestjs/bull';
import { NEW_NOTIFICATION_CREATED } from 'src/events/types';

@Module({
  imports: [
    BullModule.registerQueue({
      name: NEW_NOTIFICATION_CREATED,
    }),
    TypeOrmModule.forFeature([NotificationRepository]),
  ],
  controllers: [NotificationController],
  providers: [NotificationService, NotificationEventHandler],
})
export class NotificationModule {}
