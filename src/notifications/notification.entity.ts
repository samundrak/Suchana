import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { NotificationTypeEnum } from 'src/enums/NotificationTypeEnum';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column({
    type: 'enum',
    enum: NotificationTypeEnum,
    default: NotificationTypeEnum.MEDIUM,
  })
  notification_type: NotificationTypeEnum;
}
