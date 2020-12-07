import { IsEnum, IsString, MaxLength, MinLength } from 'class-validator';
import { ChannelsEnum } from 'src/channel/enums/ChannelsEnum';
import { IsValidChannelValue } from '../decorators/is-valid-channel-value';

export class CreateAudienceChannelDto {
  @IsEnum(ChannelsEnum)
  type: ChannelsEnum;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  // @IsValidChannelValue('sams')
  value: string;
}
