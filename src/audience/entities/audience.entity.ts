import { RecordChanges } from 'src/entities/RecordChanges.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Audience extends RecordChanges {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  token: string;
}
