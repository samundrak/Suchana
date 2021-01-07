import { InjectRepository } from '@nestjs/typeorm';
import { getManager } from 'typeorm';
import { IDestinedNotification } from '../audience-channel/interfaces/IDestinedNotification';
import { NotificationLogs } from './entities/notification-log.entity';
import { NotificationLogActivityRepository } from './repositories/notification-log-activity.repository';
import { NotificationLogsRepository } from './repositories/notification-logs.repository';
import { Notification } from '../notification/entities/notification.entity';
import { AudienceChannel } from '../audience-channel/entities/audience-channel.entity';
import { DeliveryStatusEnum } from './enums/DeliveryStatusEnum';
export abstract class AbstractHandler {
  constructor(
    @InjectRepository(NotificationLogsRepository)
    protected notificationLogRepo: NotificationLogsRepository,
    @InjectRepository(NotificationLogActivityRepository)
    protected notificationLogActivityRepo: NotificationLogActivityRepository,
  ) {}

  public async execute(data: IDestinedNotification) {
    const notificationLog = await this.saveBeforeDispatch(data);
    await this.dispatch(data);
    await this.saveAfterDispatch(data, notificationLog);
  }
  private async saveBeforeDispatch(data: IDestinedNotification) {
    const manager = getManager();
    const notificationEntity = await manager.findOne(
      Notification,
      data.notification.id,
    );
    const audienceChannel = await manager.findOne(AudienceChannel, data.id);

    const notificationLog = await this.notificationLogRepo.save({
      notification: notificationEntity,
      is_clicked: false,
      audienceChannel: audienceChannel,
    });
    this.notificationLogActivityRepo.save({
      status: DeliveryStatusEnum.RECIEVED,
      notificationLog,
    });
    return notificationLog;
  }

  private saveAfterDispatch(
    data: IDestinedNotification,
    notificationLog: NotificationLogs,
  ) {
    return this.notificationLogActivityRepo.save({
      status: DeliveryStatusEnum.DISPATCHED,
      notificationLog,
    });
  }
  /**
   * As all handler will have their own
   * logic and implementation to dispatch
   * notification so we will leave it upto the
   * handlers.
   */
  protected abstract dispatch(data: IDestinedNotification): Promise<boolean>;
}
