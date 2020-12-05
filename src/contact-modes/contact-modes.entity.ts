import { RecordChanges } from 'src/entities/RecordChanges.entity';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class ContactModes extends RecordChanges {
  @PrimaryColumn()
  id: number;

  @Column()
  tpye: string;
}
