import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModesModule } from './modules/channel/channel.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppsModule } from './modules/apps/apps.module';
import { UsersModule } from './modules/users/users.module';
import { dbConfig, envOrConfig, onlyConfig } from './utils/configs';
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_TYPE,
  DB_USERNAME,
  NODE_ENV,
} from './constants/values';
import { NotificationModule } from './modules/notification/notification.module';
import { BullModule } from '@nestjs/bull';
import { JobsModule } from './modules/jobs/jobs.module';
import { AudienceChannelModule } from './modules/audience-channel/audience-channel.module';
import { AudienceModule } from './modules/audience/audience.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    TypeOrmModule.forRoot({
      type: envOrConfig(DB_TYPE, 'db'),
      host: envOrConfig(DB_HOST, 'db'),
      port: envOrConfig(DB_PORT, 'db'),
      username: envOrConfig(DB_USERNAME, 'db'),
      password: envOrConfig(DB_PASSWORD, 'db'),
      database: envOrConfig(DB_NAME, 'db'),
      autoLoadEntities: envOrConfig(NODE_ENV, 'env'),
      synchronize: onlyConfig<boolean>('db.synchronize'),
    }),
    BullModule.forRoot({
      redis: {
        host: envOrConfig(DB_HOST, 'redis'),
        port: envOrConfig(DB_PORT, 'redis'),
      },
    }),
    ContactModesModule,
    AudienceModule,
    AuthModule,
    AppsModule,
    UsersModule,
    AudienceChannelModule,
    NotificationModule,
    JobsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
