import { App } from 'src/modules/apps/entities/app.entity';
import { RecordChanges } from 'src/entities/RecordChanges.entity';
import { NotificationTypeEnum } from 'src/enums/NotificationTypeEnum';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Audience } from 'src/modules/audience/entities/audience.entity';

@Entity()
export class Notification extends RecordChanges {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
  })
  message: string;

  @Column()
  appId: number;

  @ManyToOne(
    () => App,
    app => app.notifications,
  )
  app: App;

  @Column({
    type: 'enum',
    enum: NotificationTypeEnum,
    default: NotificationTypeEnum.LOW,
  })
  type: NotificationTypeEnum;

  @ManyToMany(
    () => Audience,
    audience => audience.notifications,
  )
  @JoinTable()
  audiences: Audience[];
}
