import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsEnum,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { NotificationTypeEnum } from 'src/enums/NotificationTypeEnum';
import { ChannelsEnum } from 'src/modules/channel/enums/ChannelsEnum';
import { NotificationMessagePayloadDTO } from './NotificationMessagePayloadDTO';

export class CreateNotificationDto {
  message: string;

  @ValidateNested({ each: true })
  @IsNotEmpty()
  @ArrayNotEmpty()
  @Type(() => NotificationMessagePayloadDTO)
  messages: NotificationMessagePayloadDTO[];

  @ArrayNotEmpty()
  audiences: string[];

  @IsEnum(NotificationTypeEnum)
  type: NotificationTypeEnum;
  id?: string;
}
