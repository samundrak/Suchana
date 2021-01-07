import { IsEnum, IsString, MinLength } from 'class-validator';
import { ChannelsEnum } from 'src/modules/channel/enums/ChannelsEnum';

export class CreateAudienceChannelDto {
  @IsEnum(ChannelsEnum)
  type: ChannelsEnum;

  @IsString()
  @MinLength(2)
  value: string;
}
