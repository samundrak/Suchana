import { Notification } from 'src/modules/notification/entities/notification.entity';
import { App } from 'src/modules/apps/entities/app.entity';
import { RecordChanges } from 'src/entities/RecordChanges.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AudienceChannel } from 'src/modules/audience-channel/entities/audience-channel.entity';

@Entity()
export class Audience extends RecordChanges {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  token: string;

  @ManyToMany(
    () => App,
    app => app.audiences,
  )
  apps: App[];

  @OneToMany(
    () => AudienceChannel,
    channel => channel.audience,
  )
  audienceToChannels: AudienceChannel[];

  @ManyToMany(
    () => Notification,
    notification => notification.audiences,
  )
  notifications: Notification[];
}
