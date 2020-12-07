import { PartialType } from '@nestjs/mapped-types';
import { CreateAudienceChannelDto } from './create-audience-channel.dto';

export class UpdateAudienceChannelDto extends PartialType(CreateAudienceChannelDto) {}
