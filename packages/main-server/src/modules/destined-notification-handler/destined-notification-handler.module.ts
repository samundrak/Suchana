import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationLogActivityRepository } from './repositories/notification-log-activity.repository';
import { NotificationLogsRepository } from './repositories/notification-logs.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      NotificationLogsRepository,
      NotificationLogActivityRepository,
    ]),
  ],
})
export class DestinedNotificationHandlerModule {}
