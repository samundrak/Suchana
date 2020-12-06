import { App } from 'src/apps/entities/app.entity';
import { AudienceContactMode } from 'src/contact-modes/entities/audience-contact-mode.entity';
import { ContactModes } from 'src/contact-modes/entities/contact-modes.entity';
import { ContactModesEnum } from 'src/contact-modes/enums/ContactModesEnum';
import { RecordChanges } from 'src/entities/RecordChanges.entity';
import {
  Column,
  Entity,
  ManyToMany,
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
    () => AudienceContactMode,
    contactMode => contactMode.audience,
  )
  audienceToContactModes: AudienceContactMode[];
}
