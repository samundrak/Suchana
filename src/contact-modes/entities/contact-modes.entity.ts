import { RecordChanges } from 'src/entities/RecordChanges.entity';
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { ContactModesEnum } from '../enums/ContactModesEnum';
import { AudienceContactMode } from './audience-contact-mode.entity';

@Entity()
export class ContactModes extends RecordChanges {
  @PrimaryColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ContactModesEnum,
    default: ContactModesEnum.IN_APP,
  })
  mode: string;

  @OneToMany(
    () => AudienceContactMode,
    item => item.contact_modes,
  )
  contactModeToAudiences: AudienceContactMode[];
}
