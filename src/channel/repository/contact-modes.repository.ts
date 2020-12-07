import { EntityRepository, Repository } from 'typeorm';
import { Channel } from '../entities/channel.entity';

@EntityRepository(Channel)
export class ChannelsRepository extends Repository<Channel> {}
