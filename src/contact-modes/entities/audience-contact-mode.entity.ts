import { Audience } from 'src/audience/entities/audience.entity';
import { RecordChanges } from 'src/entities/RecordChanges.entity';
import {
  Column,
  Entity,
  EntityRepository,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ContactModes } from './contact-modes.entity';

@Entity()
export class AudienceContactMode extends RecordChanges {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  audienceId: number;

  @Column()
  contactModesId: number;

  @Column()
  value: string;

  @Column()
  enabled: boolean;

  @ManyToOne(
    () => Audience,
    audience => audience.audienceToContactModes,
  )
  audience: Audience;

  @ManyToOne(
    () => ContactModes,
    contactMode => contactMode.contactModeToAudiences,
  )
  contact_modes: ContactModes;
}
