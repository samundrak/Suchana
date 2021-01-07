import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AudienceChannelRepository } from '../audience-channel/repository/audience-channel.repository';
import { ContactModesService } from './channel.service';
import { ChannelsRepository } from './repository/contact-modes.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([AudienceChannelRepository, ChannelsRepository]),
  ],
  providers: [ContactModesService],
  controllers: [],
})
export class ContactModesModule {}
