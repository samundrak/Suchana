import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bullmq';
import { DESTINED_NOTIFICATION } from '../jobs';

@Processor(DESTINED_NOTIFICATION)
export class DestinedNotification {
  @Process()
  handleDestinedNotification(job: Job) {
    console.log(job);
  }
}
