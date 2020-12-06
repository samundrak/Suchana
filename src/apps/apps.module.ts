import { Module } from '@nestjs/common';
import { AppsService } from './apps.service';
import { AppsController } from './apps.controller';
import { AuthGuard, PassportModule } from '@nestjs/passport';
import { AppRepository } from './repository/app.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/User.repository';
import { JwtModule } from '@nestjs/jwt';
import { AudienceRepository } from 'src/audience/repository/audience.repository';
import { jwtAppsConfig } from 'src/utils/configs';
import { JWT_EXPIRES_IN, JWT_STRATEGY, SECRET } from 'src/constants/values';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    TypeOrmModule.forFeature([
      AppRepository,
      UserRepository,
      AudienceRepository,
    ]),
    JwtModule.register({
      secret: jwtAppsConfig(SECRET),
      signOptions: {
        expiresIn: jwtAppsConfig(JWT_EXPIRES_IN),
      },
    }),
  ],
  controllers: [AppsController],
  providers: [AppsService],
})
export class AppsModule {}
