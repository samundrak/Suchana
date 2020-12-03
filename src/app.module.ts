import { Module } from '@nestjs/common';
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

@Module({
  imports: [
    NotificationsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 6603,
      username: 'root',
      password: 'helloworld',
      database: 'notifications_saas',
      autoLoadEntities: true,
      synchronize: true,
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
