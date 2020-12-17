import { ArrayNotEmpty, IsEnum, IsNotEmpty } from 'class-validator';
import { NotificationTypeEnum } from 'src/enums/NotificationTypeEnum';

export class CreateNotificationDto {
  @IsNotEmpty()
  message: string;

  @ArrayNotEmpty()
  audiences: string[];

  @IsEnum(NotificationTypeEnum)
  type: NotificationTypeEnum;
  id?: string;
}
