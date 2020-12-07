import { App } from 'src/apps/entities/app.entity';
import { Audience } from 'src/audience/entities/audience.entity';
import { RecordChanges } from 'src/entities/RecordChanges.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Channel } from '../../channel/entities/channel.entity';

@Entity()
export class AudienceChannel extends RecordChanges {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  audienceId: string;

  @Column()
  channelsId: string;

  @Column()
  appId: number;

  @Column()
  value: string;

  @Column()
  enabled: boolean;

  @ManyToOne(
    () => Audience,
    audience => audience.audienceToChannels,
  )
  audience: Audience;

  @ManyToOne(
    () => Channel,
    channel => channel.channelToAudiences,
  )
  channels: AudienceChannel;

  @ManyToOne(
    () => App,
    app => app.audienceChannels,
  )
  app: App;
}
