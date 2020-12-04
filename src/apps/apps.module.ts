import { Module } from '@nestjs/common';
import { AppsService } from './apps.service';
import { AppsController } from './apps.controller';
import { PassportModule } from '@nestjs/passport';
import { AppRepository } from './repository/app.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/User.repository';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    TypeOrmModule.forFeature([AppRepository, UserRepository]),
  ],
  controllers: [AppsController],
  providers: [AppsService],
})
export class AppsModule {}
