import { UserEntity } from 'src/auth/User.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class App extends BaseEntity {
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
}
