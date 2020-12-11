import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { NOTIFICATION_ARRIVED_JOB } from './jobs';
import { JobsService } from './jobs.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: NOTIFICATION_ARRIVED_JOB,
    }),
  ],
  providers: [JobsService],
  exports: [JobsService],
})
export class JobsModule {}
