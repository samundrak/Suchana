import { IsNotEmpty, IsEnum, isNotEmpty, IsString } from 'class-validator';
import { NotificationTypeEnum } from 'src/enums/NotificationTypeEnum';

export class CreateNotificationDTO {
  @IsNotEmpty()
  user: string[];

  @IsString()
  message: string;

  @IsEnum(NotificationTypeEnum)
  type: NotificationTypeEnum;
}
