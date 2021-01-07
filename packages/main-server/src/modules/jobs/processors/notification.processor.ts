import { OnQueueCompleted, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { IDestinedNotification } from 'src/modules/audience-channel/interfaces/IDestinedNotification';
import { AudienceService } from 'src/modules/audience/audience.service';
import { ChannelsEnum } from 'src/modules/channel/enums/ChannelsEnum';
import { INotificationCreatedEvent } from 'src/modules/notification/events/NotificationCreatedEvent';
import { NotificationService } from 'src/modules/notification/notification.service';
import { NOTIFICATION_ARRIVED_JOB } from '../jobs';
import { JobsService } from '../jobs.service';

@Processor(NOTIFICATION_ARRIVED_JOB)
export class NotificationProcessor {
  private logger = new Logger('NotificationProcessor');
  constructor(
    private notificationService: NotificationService,
    private audienceService: AudienceService,
    private jobsService: JobsService,
  ) {}
  @Process()
  async handleNewNotification(job: Job<INotificationCreatedEvent>) {
    try {
      this.logger.log(
        'Notification arrived and saved ' +
          JSON.stringify(job.data.notification.id),
      );
      return await this.notificationService.create(job.data.notification, {
        id: job.data.app.id,
      });
    } catch (err) {
      this.logger.error(err.message);
      throw err;
    }
  }
  @OnQueueCompleted()
  async handleQueueCompleted(job: Job<INotificationCreatedEvent>) {
    const audiences = await this.audienceService.orderByChannel(
      job.data.notification.audiences,
    );
    const allowedChannels = job.data.notification.messages.map(
      item => item.channel,
    );
    const audienceByChannel = (audiences.flatMap(audience => {
      return (
        audience?.audienceToChannels.map(audienceChannel => ({
          ...audienceChannel,
          notification: {
            id: job.data.notification.id,
            message: JSON.stringify(job.data.notification.messages),
          },
          app: job.data.app,
        })) || []
      );
    }) as unknown) as IDestinedNotification[];
    this.jobsService.handleNotificationForChannel(
      audienceByChannel.filter(item =>
        allowedChannels.includes(item.channelsId as ChannelsEnum),
      ),
    );
  }
}
