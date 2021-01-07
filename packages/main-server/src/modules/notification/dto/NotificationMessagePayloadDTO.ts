import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { ChannelsEnum } from 'src/modules/channel/enums/ChannelsEnum';

export class NotificationMessagePayloadDTO {
  @IsEnum(ChannelsEnum, {
    message: `Please provide correct channel as "channel".`,
  })
  channel: ChannelsEnum;

  @IsNotEmpty({
    message:
      'Please provide message to be passed in this channel as "message".',
  })
  value: string;
}
