import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class ContactModes {
  @PrimaryColumn()
  id: number;

  @Column()
  tpye: string;
}
