import { RecordChanges } from 'src/entities/RecordChanges.entity';
import { AudienceChannel } from 'src/modules/audience-channel/entities/audience-channel.entity';
import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { ChannelsEnum } from '../enums/ChannelsEnum';

@Entity()
export class Channel extends RecordChanges {
  @PrimaryColumn()
  id: string;

  @Column({
    type: 'enum',
    enum: ChannelsEnum,
    default: ChannelsEnum.IN_APP,
    unique: true,
  })
  mode: string;

  @OneToMany(
    () => AudienceChannel,
    item => item.audience,
  )
  channelToAudiences: AudienceChannel[];
}
