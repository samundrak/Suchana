import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { App } from 'src/modules/apps/entities/app.entity';
import { Channel } from 'src/modules/channel/entities/channel.entity';
import { ChannelsRepository } from 'src/modules/channel/repository/contact-modes.repository';
import { CreateAudienceChannelDto } from './dto/create-audience-channel.dto';
import { UpdateAudienceChannelDto } from './dto/update-audience-channel.dto';
import { AudienceChannel } from './entities/audience-channel.entity';
import { AudienceChannelRepository } from './repository/audience-channel.repository';

@Injectable()
export class AudienceChannelService {
  constructor(
    @InjectRepository(AudienceChannelRepository)
    private audienceChannelRepo: AudienceChannelRepository,
    @InjectRepository(ChannelsRepository)
    private channelRepo: ChannelsRepository,
  ) {}
  async create(
    createAudienceChannelDto: CreateAudienceChannelDto,
    audienceId: string,
    app: App,
  ) {
    const channel = new Channel();
    channel.mode = createAudienceChannelDto.type;
    channel.id = createAudienceChannelDto.type;

    const channelValue = await this.channelRepo.save(channel);

    const audienceChannel = new AudienceChannel();
    audienceChannel.value = createAudienceChannelDto.value;
    audienceChannel.enabled = true;
    audienceChannel.audienceId = audienceId;
    audienceChannel.channelsId = channelValue.id;
    audienceChannel.appId = app.id;
    const savedChannelInformation = await this.audienceChannelRepo.save(
      audienceChannel,
    );
    return savedChannelInformation;
  }

  findAll() {
    return `This action returns all audienceChannel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} audienceChannel`;
  }

  update(id: number, updateAudienceChannelDto: UpdateAudienceChannelDto) {
    return `This action updates a #${id} audienceChannel`;
  }

  remove(id: number) {
    return `This action removes a #${id} audienceChannel`;
  }
}
