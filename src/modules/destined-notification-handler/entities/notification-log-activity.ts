import { RecordChanges } from 'src/entities/RecordChanges.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DeliveryStatusEnum } from '../enums/DeliveryStatusEnum';
import { NotificationLogs } from './notification-log.entity';

@Entity()
export class NotificationLogActivity extends RecordChanges {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: DeliveryStatusEnum,
  })
  status: DeliveryStatusEnum;

  @ManyToOne(() => NotificationLogs)
  notificationLog: NotificationLogs;
}
