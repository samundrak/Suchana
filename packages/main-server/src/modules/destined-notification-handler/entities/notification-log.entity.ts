import { RecordChanges } from 'src/entities/RecordChanges.entity';
import { AudienceChannel } from 'src/modules/audience-channel/entities/audience-channel.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Notification } from '../../notification/entities/notification.entity';

@Entity()
export class NotificationLogs extends RecordChanges {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  is_clicked: boolean;

  @ManyToOne(() => Notification)
  notification: Notification;

  @ManyToOne(() => AudienceChannel)
  audienceChannel: AudienceChannel;
}
