import { Module } from '@nestjs/common';
import { AudienceService } from './audience.service';
import { AudienceController } from './audience.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppRepository } from 'src/modules/apps/repository/app.repository';
import { AudienceRepository } from './repository/audience.repository';
import { PassportModule } from '@nestjs/passport';
import { AppAuthStrategy } from 'src/modules/auth/AppAuthStrategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtAppsConfig, jwtSessionConfig } from 'src/utils/configs';
import { JWT_EXPIRES_IN, JWT_STRATEGY } from 'src/constants/values';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtSessionConfig(JWT_STRATEGY),
      signOptions: {
        expiresIn: jwtSessionConfig(JWT_EXPIRES_IN),
      },
    }),
    TypeOrmModule.forFeature([AppRepository, AudienceRepository]),
  ],
  controllers: [AudienceController],
  providers: [AudienceService, AppAuthStrategy, AudienceRepository],
})
export class AudienceModule {}
