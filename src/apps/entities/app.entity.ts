import { Audience } from 'src/audience/entities/audience.entity';
import { RecordChanges } from 'src/entities/RecordChanges.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
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

  @ManyToMany(() => Audience)
  @JoinTable()
  audiences: Audience[];
}
