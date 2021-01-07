import { EntityRepository, Repository } from 'typeorm';
import { NotificationLogs } from '../entities/notification-log.entity';

@EntityRepository(NotificationLogs)
export class NotificationLogsRepository extends Repository<NotificationLogs> {}
