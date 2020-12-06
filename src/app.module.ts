import { Global, Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsController } from './notifications/notifications.controller';
import { NotificationsModule } from './notifications/notifications.module';
import { ContactModesModule } from './contact-modes/contact-modes.module';
import { NotificationTrackersModule } from './notification-trackers/notification-trackers.module';
import { AudienceModule } from './audience/audience.module';
import { AuthModule } from './auth/auth.module';
import { AppsModule } from './apps/apps.module';
import { UsersModule } from './users/users.module';
import { dbConfig, envOrConfig, onlyConfig } from './utils/configs';
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_TYPE,
  DB_USERNAME,
  JWT_STRATEGY,
} from './constants/values';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    NotificationsModule,
    TypeOrmModule.forRoot({
      type: dbConfig(DB_TYPE),
      host: dbConfig(DB_HOST),
      port: dbConfig(DB_PORT),
      username: dbConfig(DB_USERNAME),
      password: dbConfig(DB_PASSWORD),
      database: dbConfig(DB_NAME),
      autoLoadEntities: envOrConfig('NODE_ENV'),
      synchronize: onlyConfig<boolean>('db.synchronize'),
    }),
    ContactModesModule,
    NotificationTrackersModule,
    AudienceModule,
    AuthModule,
    AppsModule,
    UsersModule,
  ],
  controllers: [AppController, NotificationsController],
  providers: [AppService],
})
export class AppModule {}
