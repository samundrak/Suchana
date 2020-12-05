import { Module } from '@nestjs/common';
import { AudienceService } from './audience.service';
import { AudienceController } from './audience.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppRepository } from 'src/apps/repository/app.repository';
import { AudienceRepository } from './repository/audience.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: 'secretfornow',
      signOptions: {
        expiresIn: 3600 * 60 * 60,
      },
    }),
    TypeOrmModule.forFeature([AppRepository, AudienceRepository]),
  ],
  controllers: [AudienceController],
  providers: [AudienceService],
})
export class AudienceModule {}
