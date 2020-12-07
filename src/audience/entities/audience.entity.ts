import { Notification } from 'src/notification/entities/notification.entity';
import { App } from 'src/apps/entities/app.entity';
import { AudienceChannel } from 'src/audience-channel/entities/audience-channel.entity';
import { RecordChanges } from 'src/entities/RecordChanges.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
