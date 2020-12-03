import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class App extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  key: string;

  @Column()
  secret: string;

  @Column({
    type: 'bool',
  })
  is_active: boolean;
}
