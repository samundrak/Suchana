import { EntityRepository, Repository } from 'typeorm';
import { AudienceChannel } from '../entities/audience-channel.entity';

@EntityRepository(AudienceChannel)
export class AudienceChannelRepository extends Repository<AudienceChannel> {}
