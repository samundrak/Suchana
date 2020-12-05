import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class RecordChanges extends BaseEntity {
  @CreateDateColumn({ type: 'timestamp' })
  created?: Date;

  @UpdateDateColumn()
  updated?: Date;

  @DeleteDateColumn()
  is_deleted: Date;
}
