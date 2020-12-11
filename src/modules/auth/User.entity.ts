import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { App } from 'src/modules/apps/entities/app.entity';
import { RecordChanges } from 'src/entities/RecordChanges.entity';

@Entity()
export class UserEntity extends RecordChanges {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  first_name: string;

  @Column({
    nullable: true,
  })
  last_name: string;

  @Column({
    unique: true,
  })
  username: string;

  @Column({
    select: false,
  })
  password: string;

  @Column({
    select: false,
  })
  salt: string;

  @ManyToMany(() => App)
  @JoinTable()
  apps: App[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
