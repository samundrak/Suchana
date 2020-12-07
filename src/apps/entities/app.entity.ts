import { AudienceChannel } from 'src/audience-channel/entities/audience-channel.entity';
import { Audience } from 'src/audience/entities/audience.entity';
import { RecordChanges } from 'src/entities/RecordChanges.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class App extends RecordChanges {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  name: string;

  @Column()
  key: string;

  @Column()
  secret: string;

  @Column({
    type: 'bool',
    default: true,
  })
  is_active: boolean;

  @ManyToMany(
    () => Audience,
    audience => audience.apps,
    {},
  )
  @JoinTable()
  audiences: Audience[];

  @OneToMany(
    () => AudienceChannel,
    audienceChannel => audienceChannel.app,
  )
  audienceChannels: AudienceChannel;
}
