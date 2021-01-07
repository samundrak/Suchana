import { Module } from '@nestjs/common';
import { AudienceChannelService } from './audience-channel.service';
import { AudienceChannelController } from './audience-channel.controller';
import { AudienceChannelRepository } from './repository/audience-channel.repository';
import { ChannelsRepository } from 'src/modules/channel/repository/contact-modes.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([AudienceChannelRepository, ChannelsRepository]),
  ],
  controllers: [AudienceChannelController],
  providers: [AudienceChannelService],
})
export class AudienceChannelModule {}
