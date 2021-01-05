import { EntityRepository, Repository } from 'typeorm';
import { NotificationLogActivity } from '../entities/notification-log-activity';

@EntityRepository(NotificationLogActivity)
export class NotificationLogActivityRepository extends Repository<
  NotificationLogActivity
> {}
