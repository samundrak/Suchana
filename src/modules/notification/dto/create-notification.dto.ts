import { ArrayNotEmpty, IsEnum, IsNotEmpty } from 'class-validator';
import { NotificationTypeEnum } from 'src/enums/NotificationTypeEnum';
import { ChannelsEnum } from 'src/modules/channel/enums/ChannelsEnum';

export class CreateNotificationDto {
  @IsNotEmpty()
  message: string;

  @ArrayNotEmpty()
  audiences: string[];

  @IsEnum(ChannelsEnum, { each: true })
  channels: ChannelsEnum[];

  @IsEnum(NotificationTypeEnum)
  type: NotificationTypeEnum;
  id?: string;
}
